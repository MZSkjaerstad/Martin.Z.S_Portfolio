<template>
  <section class="hero-mobile">
    <div ref="container" class="hero-mobile__threeDContainer" @mousemove="onMouseMove">
      <button v-if="!permissionGranted" @click="requestDeviceOrientationPermission">Enable Gyroscope</button>
      <div v-else-if="permissionDenied" class="fallback-content">
        <!-- Your fallback content goes here -->
        <p>3D model is not available on this device.</p>
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
      gamma: 0,
      beta: 0,
      permissionGranted: false,
      permissionDenied: false
    };
  },
  mounted() {
    // Initialize WebGL renderer with alpha and antialias
    this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    this.renderer.setSize(this.$refs.container.offsetWidth, this.$refs.container.offsetHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.$refs.container.appendChild(this.renderer.domElement);

    // Initialize scene
    this.scene = new THREE.Scene();

    // Add ambient light to the scene
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Soft white light
    this.scene.add(ambientLight);

    // Add directional light to the scene
    const dirLight = new THREE.DirectionalLight(0xffffff, 1);
    dirLight.position.set(0, 1, 0); // Adjust position as needed
    this.scene.add(dirLight);

    // Initialize camera
    this.camera = new THREE.PerspectiveCamera(75, this.containerAspectRatio(), 0.1, 1000);
    this.camera.position.z = 5;

    // Load the model
    const loader = new GLTFLoader();
    loader.load('/visual_identity/3D/logoOutline.glb', (gltf) => {
      if (!gltf.scene) {
        console.error('Error: GLTF scene is undefined.');
        return;
      }

      gltf.scene.traverse((child) => {
        if (child.isMesh) {
          // Create material for the mesh
          const material = new THREE.MeshBasicMaterial({
            color: 0xffffff,
            vertexColors: true // Enable vertex colors
          });

          // Apply material to the mesh
          child.material = material;

          // Add the loaded scene to the Three.js scene
          this.scene.add(gltf.scene);

          // Assign model to a component property for manipulation
          this.model = gltf.scene;
        }
      });

      // Add outline pass for the loaded model
      this.outlinePass.selectedObjects = [gltf.scene];
    }, undefined, (error) => {
      console.error('Error loading GLTF model:', error);
    });

    // Set up postprocessing
    this.composer = new EffectComposer(this.renderer);
    const renderPass = new RenderPass(this.scene, this.camera);
    this.composer.addPass(renderPass);

    // Set up outline pass
    this.outlinePass = new OutlinePass(new THREE.Vector2(this.$refs.container.offsetWidth, this.$refs.container.offsetHeight), this.scene, this.camera);
    this.outlinePass.edgeStrength = 3.0; // Adjust edge strength for outline thickness
    this.outlinePass.edgeGlow = 0.0;
    this.outlinePass.edgeThickness = 1.0; // Adjust edge thickness for outline thickness
    this.outlinePass.pulsePeriod = 0;
    this.outlinePass.visibleEdgeColor.set('#000000'); // Outline color
    this.outlinePass.hiddenEdgeColor.set('#000000'); // Hidden outline color
    this.composer.addPass(this.outlinePass);

    // Start rendering loop
    this.animate();

    // Listen to window resize events
    window.addEventListener('resize', this.handleWindowResize);
  },
  beforeDestroy() {
    // Clean up event listener on component destruction
    window.removeEventListener('resize', this.handleWindowResize);
    if (window.DeviceOrientationEvent) {
      window.removeEventListener('deviceorientation', this.handleDeviceOrientation);
    }
  },
  methods: {
    animate() {
      requestAnimationFrame(this.animate);

      // Rotate the model based on mouse or gyroscope position
      if (this.model) {
        if (this.isMobileDevice() && this.permissionGranted) {
          this.model.rotation.y = this.gamma * 0.005; // Adjust the sensitivity as needed
          this.model.rotation.x = this.beta * 0.005;  // Adjust the sensitivity as needed
        } else {
          this.model.rotation.y = this.mouseX * 0.5 || 0; // Use default 0 if undefined
          this.model.rotation.x = -(this.mouseY * 0.5 || 0); // Use default 0 if undefined
        }

        // Move the camera based on mouse position (or default values if undefined)
        this.camera.position.x = this.mouseX * 0.4 || 0; // Use default 0 if undefined
        this.camera.position.y = this.mouseY * 0.4 || 0; // Use default 0 if undefined
      }

      this.composer.render();
    },
    handleWindowResize() {
      // Update renderer and camera aspect ratio on window resize
      this.renderer.setSize(this.$refs.container.offsetWidth, this.$refs.container.offsetHeight);
      this.camera.aspect = this.containerAspectRatio();
      this.camera.updateProjectionMatrix();
      this.composer.setSize(this.$refs.container.offsetWidth, this.$refs.container.offsetHeight);
    },
    containerAspectRatio() {
      return this.$refs.container.offsetWidth / this.$refs.container.offsetHeight;
    },
    onMouseMove(event) {
      if (!this.isMobileDevice()) {
        // Calculate normalized mouse position within the container (-1 to 1)
        this.mouseX = (event.offsetX / this.$refs.container.offsetWidth) * 2 - 1;
        this.mouseY = -(event.offsetY / this.$refs.container.offsetHeight) * 2 + 1;
      }
    },
    handleDeviceOrientation(event) {
      this.gamma = event.gamma; // Rotation around z axis
      this.beta = event.beta;   // Rotation around x axis
    },
    requestDeviceOrientationPermission() {
      if (typeof DeviceOrientationEvent.requestPermission === 'function') {
        DeviceOrientationEvent.requestPermission()
          .then(permissionState => {
            if (permissionState === 'granted') {
              window.addEventListener('deviceorientation', this.handleDeviceOrientation);
              this.permissionGranted = true;
            } else {
              this.permissionDenied = true;
            }
          })
          .catch(error => {
            console.error('Error requesting device orientation permission:', error);
            this.permissionDenied = true;
          });
      } else {
        // For non-iOS 13+ devices
        window.addEventListener('deviceorientation', this.handleDeviceOrientation);
        this.permissionGranted = true;
      }
    },
    isMobileDevice() {
      return /Mobi|Android/i.test(navigator.userAgent);
    }
  },
};
</script>

<style>
.hero-mobile {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.hero-mobile__threeDContainer {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.fallback-content {
  text-align: center;
  color: #333;
}

@media screen and (max-device-width: 767px) { 
  .hero-mobile {
    display: block;
  }
}
</style>
