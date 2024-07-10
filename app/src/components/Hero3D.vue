<template>
  <section class="hero-mobile">
    <div ref="container" class="hero-mobile__threeDContainer">
      <div v-if="showFallback && isMobile()" class="hero-mobile__fallback-content">
        <p>3D model is not available on this device.</p>
      </div>
      <div v-else>
        <!-- Only show request button on mobile -->
        <button v-if="showRequestButton" class="hero-mobile__request-button" @click="requestDeviceOrientationPermission">Enable Device Orientation</button>
        <!-- Render 3D model -->
      </div>
    </div>
  </section>
</template>

<script>
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { OutlinePass } from 'three/examples/jsm/postprocessing/OutlinePass.js';

export default {
  data() {
    return {
      mouseX: 0,
      mouseY: 0,
      showFallback: false,
      gyroscopePermissionRequested: false,
      deviceOrientationAvailable: false,
      deviceOrientation: {
        alpha: 0,
        beta: 0,
        gamma: 0
      },
      useOutlinePass: false, // Flag to control whether to use OutlinePass
      showRequestButton: false // Flag to control display of the request button
    };
  },
  mounted() {
    this.initThree();
    this.initDeviceOrientation();
    window.addEventListener('resize', this.handleWindowResize);
    window.addEventListener('mousemove', this.onMouseMove);
  },
  beforeDestroy() {
    this.cleanUp();
    window.removeEventListener('resize', this.handleWindowResize);
    window.removeEventListener('deviceorientation', this.handleDeviceOrientation);
    window.removeEventListener('mousemove', this.onMouseMove);
  },
  methods: {
    initThree() {
      try {
        // Initialize WebGL renderer with alpha and antialias
        this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        this.renderer.setSize(this.$refs.container.offsetWidth, this.$refs.container.offsetHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.$refs.container.appendChild(this.renderer.domElement);

        // Initialize scene
        this.scene = new THREE.Scene();

        // Add ambient light to the scene
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        this.scene.add(ambientLight);

        // Add directional light to the scene
        const dirLight = new THREE.DirectionalLight(0xffffff, 1);
        dirLight.position.set(0, 1, 0);
        this.scene.add(dirLight);

        // Initialize camera
        this.camera = new THREE.PerspectiveCamera(75, this.containerAspectRatio(), 0.1, 1000);
        this.camera.position.z = 5;

        // Load the model
        const loader = new GLTFLoader();
        loader.load('/visual_identity/3D/logoOutline.glb', (gltf) => {
          if (!gltf.scene) {
            console.error('Error: GLTF scene is undefined.');
            this.showFallback = true;
            return;
          }

          this.scene.add(gltf.scene);
          this.model = gltf.scene;

          // Enable outline pass only if not on mobile
          if (!this.isMobile()) {
            this.setupOutlinePass();
          }

          // Set initial model position for mobile
          if (this.isMobile()) {
            this.model.position.set(0, 0, -2); // Adjust as needed for mobile
          }

          // Start rendering loop
          this.animate();
        }, undefined, (error) => {
          console.error('Error loading GLTF model:', error);
          this.showFallback = true;
        });
      } catch (error) {
        console.error('Error initializing 3D scene:', error);
        this.showFallback = true;
      }
    },
    animate() {
      requestAnimationFrame(this.animate);

      if (this.model) {
        // Rotate based on input type
        if (this.deviceOrientationAvailable && this.isMobile()) {
          // Adjust rotation based on device orientation for mobile
          this.model.rotation.y = -THREE.MathUtils.degToRad(this.deviceOrientation.gamma); // Invert rotation against device movement
          this.model.rotation.x = -(this.mouseY * 0.5 + THREE.MathUtils.degToRad(this.deviceOrientation.beta) - Math.PI / 4); // Adjust for 45-degree holding

          // Move model based on device orientation for mobile
          const movementSpeed = 0.002; // Adjust movement speed for device orientation
          this.model.position.x += this.deviceOrientation.alpha * movementSpeed;
          this.model.position.y -= this.deviceOrientation.beta * movementSpeed;
          this.model.position.z += this.deviceOrientation.gamma * movementSpeed;
        } else if (!this.isMobile()) {
          // Rotate based on cursor position for desktop
          this.model.rotation.y = this.mouseX * 0.5;
          this.model.rotation.x = -(this.mouseY * 0.5);

          // Move model based on cursor position for desktop
          const moveSpeed = 0.02; // Adjust movement speed for cursor movement
          this.model.position.x += (this.mouseX - this.model.position.x) * moveSpeed;
          this.model.position.y += (-this.mouseY - this.model.position.y) * moveSpeed;
        }

        // Limit model movement within viewport bounds
        if (this.isMobile()) {
          const maxX = this.$refs.container.offsetWidth / 2;
          const maxY = this.$refs.container.offsetHeight / 2;
          const maxZ = 2; // Adjust as needed for mobile

          this.model.position.x = Math.max(-maxX, Math.min(maxX, this.model.position.x));
          this.model.position.y = Math.max(-maxY, Math.min(maxY, this.model.position.y));
          this.model.position.z = Math.max(-maxZ, Math.min(maxZ, this.model.position.z));
        }
      }

      // Render with outline pass if enabled
      if (this.useOutlinePass && this.composer) {
        this.composer.render();
      } else {
        this.renderer.render(this.scene, this.camera);
      }
    },
    handleWindowResize() {
      this.renderer.setSize(this.$refs.container.offsetWidth, this.$refs.container.offsetHeight);
      this.camera.aspect = this.containerAspectRatio();
      this.camera.updateProjectionMatrix();
      if (this.composer) {
        this.composer.setSize(this.$refs.container.offsetWidth, this.$refs.container.offsetHeight);
      }
    },
    containerAspectRatio() {
      return this.$refs.container.offsetWidth / this.$refs.container.offsetHeight;
    },
    initDeviceOrientation() {
      if (window.DeviceOrientationEvent && this.isMobile()) {
        // Show request button only on mobile devices
        this.showRequestButton = true;
      } else {
        console.warn('Device orientation not supported on this device or not mobile.');
        this.deviceOrientationAvailable = false;
        this.showFallback = true;
      }
    },
    requestDeviceOrientationPermission() {
      if (typeof DeviceOrientationEvent.requestPermission === 'function') {
        DeviceOrientationEvent.requestPermission().then((permissionState) => {
          if (permissionState === 'granted') {
            this.deviceOrientationAvailable = true;
            window.addEventListener('deviceorientation', this.handleDeviceOrientation);
            this.showRequestButton = false;
          } else {
            this.showFallback = true;
          }
        }).catch(console.error);
      } else {
        // Handle browsers that do not require permission
        window.addEventListener('deviceorientation', this.handleDeviceOrientation);
        this.deviceOrientationAvailable = true;
        this.showRequestButton = false;
      }
    },
    handleDeviceOrientation(event) {
      this.deviceOrientation = event;
    },
    onMouseMove(event) {
      // Update mouseX and mouseY based on cursor position
      this.mouseX = (event.offsetX / this.$refs.container.offsetWidth) * 2 - 1;
      this.mouseY = -(event.offsetY / this.$refs.container.offsetHeight) * 2 + 1;
    },
    isMobile() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    },
    setupOutlinePass() {
      try {
        // Set up postprocessing only if not on mobile
        this.composer = new EffectComposer(this.renderer);
        const renderPass = new RenderPass(this.scene, this.camera);
        this.composer.addPass(renderPass);

        // Set up outline pass
        this.outlinePass = new OutlinePass(new THREE.Vector2(this.$refs.container.offsetWidth, this.$refs.container.offsetHeight), this.scene, this.camera);
        this.outlinePass.edgeStrength = 3.0;
        this.outlinePass.edgeGlow = 0.0;
        this.outlinePass.edgeThickness = 1.0;
        this.outlinePass.pulsePeriod = 0;
        this.outlinePass.visibleEdgeColor.set('#000000'); // Black outline color
        this.outlinePass.hiddenEdgeColor.set('#000000'); // Black hidden outline color
        this.composer.addPass(this.outlinePass);

        this.useOutlinePass = true;
      } catch (error) {
        console.error('Error setting up outline pass:', error);
        this.useOutlinePass = false;
      }
    },
    cleanUp() {
      if (this.renderer) {
        this.renderer.dispose();
        this.renderer.forceContextLoss();
        this.renderer.domElement = null;
        this.renderer = null;
      }

      if (this.scene) {
        while (this.scene.children.length > 0) {
          this.scene.remove(this.scene.children[0]);
        }
        this.scene = null;
      }

      if (this.camera) {
        this.camera = null;
      }

      if (this.model) {
        this.model = null;
      }

      if (this.composer) {
        this.composer = null;
      }
    },
  },
};
</script>



<style>
.hero-mobile {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.hero-mobile__threeDContainer {
  position: relative;
  width: 100%;
  height: 100%;
}

.hero-mobile__fallback-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #333;
  background: rgba(255, 255, 255, 0.9);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.hero-mobile__request-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #007bff;
  color: #fff;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
