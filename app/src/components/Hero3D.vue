<template>
  <section class="hero-mobile">
    <div ref="container" class="hero-mobile__threeDContainer">
      <div v-if="showFallback" class="fallback-content">
        <p>3D model is not available on this device.</p>
      </div>
      <div v-else>
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
        if (this.deviceOrientationAvailable) {
          // Adjust rotation based on device orientation
          this.model.rotation.y = this.mouseX * 0.5 + THREE.MathUtils.degToRad(this.deviceOrientation.gamma);
          this.model.rotation.x = -(this.mouseY * 0.5 + THREE.MathUtils.degToRad(this.deviceOrientation.beta));
        } else {
          // Rotate based on cursor position for desktop
          this.model.rotation.y = this.mouseX * 0.5;
          this.model.rotation.x = -(this.mouseY * 0.5);
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
      if (window.DeviceOrientationEvent) {
        window.addEventListener('deviceorientation', this.handleDeviceOrientation);
        this.deviceOrientationAvailable = true;
      } else {
        console.warn('Device orientation not supported on this device.');
        this.deviceOrientationAvailable = false;
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
        this.outlinePass.visibleEdgeColor.set('#000000');
        this.outlinePass.hiddenEdgeColor.set('#000000');
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
}

.hero-mobile__threeDContainer {
  position: relative;
  width: 100%;
  height: 100%;
}

.fallback-content {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;
  color: #333;
  background: rgba(255, 255, 255, 0.9);
  padding: 20px;
  border-radius: 8px;
}

@media screen and (max-device-width: 767px) {
  .hero-mobile {
    display: block;
  }
}
</style>
