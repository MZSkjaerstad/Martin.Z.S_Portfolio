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
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { OutlinePass } from 'three/examples/jsm/postprocessing/OutlinePass.js';

export default {
  data() {
    return {
      mouseX: 0,
      mouseY: 0,
      showFallback: false,
    };
  },
  mounted() {
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

        gltf.scene.traverse((child) => {
          if (child.isMesh) {
            const material = new THREE.MeshBasicMaterial({
              color: 0xffffff,
              vertexColors: true,
            });
            child.material = material;
            this.scene.add(gltf.scene);
            this.model = gltf.scene;
          }
        });

        this.outlinePass.selectedObjects = [gltf.scene];
      }, undefined, (error) => {
        console.error('Error loading GLTF model:', error);
        this.showFallback = true;
      });

      // Set up postprocessing
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

      // Start rendering loop
      this.animate();

      // Listen to window resize events
      window.addEventListener('resize', this.handleWindowResize);
    } catch (error) {
      console.error('Error initializing 3D scene:', error);
      this.showFallback = true;
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleWindowResize);
  },
  methods: {
    animate() {
      requestAnimationFrame(this.animate);

      if (this.model) {
        this.model.rotation.y = this.mouseX * 0.5 || 0;
        this.model.rotation.x = -(this.mouseY * 0.5 || 0);
        this.camera.position.x = this.mouseX * 0.4 || 0;
        this.camera.position.y = this.mouseY * 0.4 || 0;
      }

      this.composer.render();
    },
    handleWindowResize() {
      this.renderer.setSize(this.$refs.container.offsetWidth, this.$refs.container.offsetHeight);
      this.camera.aspect = this.containerAspectRatio();
      this.camera.updateProjectionMatrix();
      this.composer.setSize(this.$refs.container.offsetWidth, this.$refs.container.offsetHeight);
    },
    containerAspectRatio() {
      return this.$refs.container.offsetWidth / this.$refs.container.offsetHeight;
    },
    onMouseMove(event) {
      this.mouseX = (event.offsetX / this.$refs.container.offsetWidth) * 2 - 1;
      this.mouseY = -(event.offsetY / this.$refs.container.offsetHeight) * 2 + 1;
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
