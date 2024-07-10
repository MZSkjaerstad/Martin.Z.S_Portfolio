<template>
  <section class="hero-mobile">
    <div ref="container" class="hero-mobile__threeDContainer" @mousemove="onMouseMove">
      <div v-if="showFallback" class="fallback-content">
        <p>3D model is not available on this device.</p>
      </div>
    </div>
  </section>
</template>

<script>
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default {
  data() {
    return {
      mouseX: 0,
      mouseY: 0,
      showFallback: false,
    };
  },
  mounted() {
    this.initThree();
    window.addEventListener('resize', this.handleWindowResize);
  },
  beforeDestroy() {
    this.cleanUp();
    window.removeEventListener('resize', this.handleWindowResize);
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
        this.model.rotation.y = this.mouseX * 0.5;
        this.model.rotation.x = -(this.mouseY * 0.5);
      }

      this.renderer.render(this.scene, this.camera);
    },
    handleWindowResize() {
      this.renderer.setSize(this.$refs.container.offsetWidth, this.$refs.container.offsetHeight);
      this.camera.aspect = this.containerAspectRatio();
      this.camera.updateProjectionMatrix();
    },
    containerAspectRatio() {
      return this.$refs.container.offsetWidth / this.$refs.container.offsetHeight;
    },
    onMouseMove(event) {
      this.mouseX = (event.offsetX / this.$refs.container.offsetWidth) * 2 - 1;
      this.mouseY = -(event.offsetY / this.$refs.container.offsetHeight) * 2 + 1;
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
    },
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
