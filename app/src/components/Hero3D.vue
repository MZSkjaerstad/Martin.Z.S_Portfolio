
<template>
  <section class="hero">
    <div ref="container" class="hero__threeDContainer">
      <div v-if="showFallback && isMobile()" class="hero-mobile__fallback-content">
        <svg class="hero__logo" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 164.5 199.4" style="enable-background:new 0 0 164.5 199.4;" xml:space="preserve">
          <g id="Layer_2_00000168101214995450260190000016167244714342944665_">
            <g id="Layer_1-2">
              <g>
                <path class="st0" d="M115.7,85.2L115.7,85.2c2.1,3,4.8,5.5,8,7.3C120.7,90.6,118,88.1,115.7,85.2L115.7,85.2z M40.5,98.3
                  c-0.6,0-1.3,0-2.1,0h3.9C42.3,98.4,41.6,98.3,40.5,98.3L40.5,98.3z"/>
              </g>
              <g>
                <path class="st0" d="M4.1,116.7c-1.9,3.2-3.3,6.7-4.1,10.4v0.2C1,123.6,2.3,120.1,4.1,116.7L4.1,116.7z M83.5,170.6
                  c0,0.1-0.1,0.2-0.1,0.2c0,0.1,0,0.2,0.1,0.2V170.6L83.5,170.6z"/>
              </g>
              <g>
                <path class="st0" d="M48.3,6.9l32.5,71.7C85.5,88.6,91,94.9,99.1,98.6c-2.6,2.1-4.8,5.6-4.9,11.3l0,0.1l0,0.1
                  c0.6,14.3,13.9,22.9,31.2,32.6c2.7,1.5,5.3,2.9,7.8,4.3c17,9.3,28.3,15.4,28.3,29.3c0,6-2.2,11.1-6.3,14.7
                  c-2.7,2.4-6.2,4.1-10.1,4.8c2.7-5.5,3.4-10.2,2.3-14.6c-2.5-9.8-13.2-17.3-34.9-29.4c-22-12.2-29.3-20.9-29.1-34.4l-5.8-1
                  c-3.3,9.9-9.5,18.9-18.8,27.6L3.4,192.5c1.7-14.4,8.7-27.1,21.3-38.7l60.6-53l0,0l0,0l0.2-0.1l5.6-5.2h-7.6H64.1
                  c0.7-0.9,1.3-1.9,1.8-2.9c2-4.4,1.5-9.7-1.5-16.4L48.8,41.5C41.6,25.2,44.4,14.9,48.3,6.9 M48.5,0c-4.8,8.9-12,21.2-2.4,42.7
                  l15.6,34.6c5.6,12.7,0.6,18.3-8.2,21.1h29.9l-0.2,0.1l-60.6,53C5.9,166.9,0,183,0,199.4l60.8-53.1c10.2-9.4,16.4-19,19.7-28.8
                  c-0.3,15.9,9.3,25.2,30.6,37.1c32.1,17.9,40.7,26,28.6,44.9c13.7,0,24.8-8.7,24.8-23.1c0-17.9-16.3-24.2-37.5-36.2
                  c-15.9-9-29.1-17.3-29.7-30.2c0.1-11.1,10.1-11.5,10.1-11.5c-10.8-2.8-18-8.4-23.9-21.1L48.5,0L48.5,0z"/>
              </g>
              <g>
                <path class="st0" d="M83.3,170.6v0.4c0-0.1,0.1-0.2,0.1-0.2C83.4,170.7,83.3,170.6,83.3,170.6L83.3,170.6z"/>
              </g>
              <g>
                <path class="st0" d="M97.9,6.8l32.5,71.7c5.7,12.3,13,19,23.9,22.1v6c-3.8-5.3-9.1-8.3-17.7-11.2c-3.9-1.2-7.6-3-11-5.4l-0.8-0.5
                  h-0.1c-2.5-1.7-4.6-3.8-6.5-6.1c-1.4-2.1-2.7-4.3-3.7-6.6v-0.1l-0.3-0.6L98.5,41.5C91.2,25.2,94,14.9,97.9,6.8 M98.1,0
                  c-4.8,8.9-11.9,21.2-2.4,42.7l15.7,34.6v0.1c1.2,2.7,2.6,5.3,4.3,7.8c2.3,2.8,5,5.3,8,7.3c0.1,0,0.1,0,0.1,0
                  c3.6,2.5,7.6,4.4,11.8,5.7c13,4.3,17.3,8.7,21.6,21.7V98.4c-10.9-2.5-18.2-8.4-24.1-21.1L98.1,0L98.1,0z"/>
              </g>
              <g>
                <path class="st0" d="M83.4,179.7c3.3,7.2,7.9,12.7,14.2,16.7H69.2C75.5,192.4,80.2,186.9,83.4,179.7 M83.4,170.8
                  c0,0.1,0,0.2-0.1,0.2c-4.3,15.6-13,24.2-28.8,28.4h57.6c-15.7-4.3-24.4-12.8-28.7-28.4C83.4,170.9,83.4,170.8,83.4,170.8
                  L83.4,170.8z"/>
              </g>
              <g>
                <path class="st0" d="M0,199.4"/>
              </g>
              <g>
                <path class="st0" d="M111.4,77.4c1,2.8,2.5,5.4,4.3,7.8C114,82.8,112.5,80.1,111.4,77.4L111.4,77.4z"/>
              </g>
              <g>
                <path class="st0" d="M21.2,85.5c2.3,4.8,5.1,8.2,9.2,10.8c-8.5,1.6-20,5.8-27.4,16.6v-12.3C12.5,97.2,17.5,93.3,21.2,85.5
                  M21.2,77.3c-4.2,12.6-8.4,16.9-21,21.1H0v28.7c0.9-3.6,2.3-7.1,4.2-10.4c0.1-0.2,0.2-0.3,0.3-0.5c9-15,26.3-17.5,34-17.8
                  c0.8,0,1.5,0,2.1,0c1.2,0,1.8,0,1.8,0C29.7,94.2,25.4,90,21.2,77.3L21.2,77.3z"/>
              </g>
              <g>
                <polygon class="st0" points="83.4,98.4 83.3,98.4 83.3,98.5 83.4,98.4 			"/>
              </g>
              <g>
                <path class="st0" d="M0,199.4"/>
              </g>
              <g>
                <path class="st0" d="M0,199.4"/>
              </g>
            </g>
          </g>
        </svg>
      </div>

      <div v-else>
        <!-- Only show request button on mobile -->
        <button v-if="showRequestButton" class="hero__request-button" @click="requestDeviceOrientationPermission">Tap to enable 3D</button>
        <!-- Render 3D model -->
      </div>
    </div>

    <div class="hero__display">
      <HeroDisplayMobile v-if="isMobile()" />

      <HeroDisplayDesktop :socials="socials" v-else @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" />
    </div>
  </section>
</template>

<script>
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import TWEEN, { Tween, Easing } from '@tweenjs/tween.js';
import HeroDisplayMobile from './HeroDisplayMobile.vue';
import HeroDisplayDesktop from './HeroDisplayDesktop.vue';
import _ from 'lodash'; // Import lodash for throttling

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
      showRequestButton: false,
      originalColor: new THREE.Color(0xffffff),
      hoverColor: new THREE.Color(0x0a0a0a),
      model: null,
      targetXTween: null,
      targetYTween: null,
      lastTargetX: null,
      lastTargetY: null,
      positionUpdateThreshold: 0.005
    };
  },

  mounted() {
    if (!this.$refs.container) {
      console.error('Error: Container reference is not defined.');
      this.showFallback = true;
      return;
    }

    this.initThree();
    this.initDeviceOrientation();
    window.addEventListener('resize', this.handleWindowResize);
    document.addEventListener('mousemove', this.throttledMouseMove);
  },

  beforeDestroy() {
    this.cleanUp();
    window.removeEventListener('resize', this.handleWindowResize);
    window.removeEventListener('deviceorientation', this.handleDeviceOrientation);
    document.removeEventListener('mousemove', this.throttledMouseMove);
  },

  methods: {
    initThree() {
      if (!this.$refs.container) {
        console.error('Error: Container reference is not defined.');
        this.showFallback = true;
        return;
      }

      try {
        this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        this.renderer.setSize(this.$refs.container.offsetWidth, this.$refs.container.offsetHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.$refs.container.appendChild(this.renderer.domElement);

        this.scene = new THREE.Scene();

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        this.scene.add(ambientLight);

        const dirLight = new THREE.DirectionalLight(0xffffff, 1);
        dirLight.position.set(0, 1, 0);
        this.scene.add(dirLight);

        this.camera = new THREE.PerspectiveCamera(75, this.containerAspectRatio(), 0.1, 1000);
        this.camera.position.z = 5;

        const loader = new GLTFLoader();
        loader.load('/visual_identity/3D/logoOutline.glb', (gltf) => {
          if (!gltf.scene) {
            console.error('Error: GLTF scene is undefined.');
            this.showFallback = true;
            return;
          }

          this.scene.add(gltf.scene);
          this.model = gltf.scene;

          if (this.isMobile()) {
            this.model.position.y = 0.9;
          }

          // Save the original color
          this.model.traverse((child) => {
            if (child.isMesh) {
              child.material.originalColor = child.material.color.clone();
            }
          });

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
      if (!this.renderer || !this.scene || !this.camera) return;
      requestAnimationFrame(this.animate);

      if (this.model && !this.isMobile()) {
        const targetX = -this.mouseX * 0.3;
        const targetY = -this.mouseY * 0.3;

        if (this.lastTargetX === null || this.lastTargetY === null ||
            Math.abs(targetX - this.lastTargetX) > this.positionUpdateThreshold ||
            Math.abs(targetY - this.lastTargetY) > this.positionUpdateThreshold) {
          this.lastTargetX = targetX;
          this.lastTargetY = targetY;

          if (this.targetXTween) this.targetXTween.stop();
          if (this.targetYTween) this.targetYTween.stop();

          console.log('Starting new tweens:', { targetX, targetY });

          this.targetXTween = new TWEEN.Tween(this.model.position)
            .to({ x: targetX }, 800) // Keep duration but ensure smoothness
            .easing(TWEEN.Easing.Quadratic.Out)
            .onUpdate(() => {
              console.log('Tween update - X:', this.model.position.x);
            })
            .start();

          this.targetYTween = new TWEEN.Tween(this.model.position)
            .to({ y: targetY }, 800) // Keep duration but ensure smoothness
            .easing(TWEEN.Easing.Quadratic.Out)
            .onUpdate(() => {
              console.log('Tween update - Y:', this.model.position.y);
            })
            .start();
        }
      }

      if (this.model) {
        if (this.deviceOrientationAvailable) {
          this.model.rotation.y = -THREE.MathUtils.degToRad(this.deviceOrientation.gamma);
          this.model.rotation.x = -(this.mouseY * 0.5 + THREE.MathUtils.degToRad(this.deviceOrientation.beta) - Math.PI / 4);
        } else {
          this.model.rotation.y = this.mouseX * 0.5;
          this.model.rotation.x = -(this.mouseY * 0.5);
        }
      }

      TWEEN.update();
      this.renderer.render(this.scene, this.camera);
    },

    handleWindowResize() {
      if (!this.$refs.container) return;
      this.renderer.setSize(this.$refs.container.offsetWidth, this.$refs.container.offsetHeight);
      this.camera.aspect = this.containerAspectRatio();
      this.camera.updateProjectionMatrix();
    },

    containerAspectRatio() {
      if (!this.$refs.container) return 1;
      return this.$refs.container.offsetWidth / this.$refs.container.offsetHeight;
    },

    initDeviceOrientation() {
      if (window.DeviceOrientationEvent && this.isMobile()) {
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
        window.addEventListener('deviceorientation', this.handleDeviceOrientation);
        this.deviceOrientationAvailable = true;
        this.showRequestButton = false;
      }
    },

    handleDeviceOrientation(event) {
      this.deviceOrientation = event;
    },

    throttledMouseMove: _.throttle(function(event) {
      this.onMouseMove(event);
    }, 20), // Adjust throttle duration for performance and smoothness

    onMouseMove(event) {
      if (!this.$refs.container) return;
      this.mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      this.mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

      console.log('Mouse move:', { mouseX: this.mouseX, mouseY: this.mouseY });
    },

    onMouseEnter() {
      this.tweenModelColor(this.hoverColor);
    },

    onMouseLeave() {
      this.tweenModelColor(this.originalColor);
    },

    onHoverStart() {
      this.tweenModelColor(this.hoverColor);
    },

    onHoverEnd() {
      this.tweenModelColor(this.originalColor);
    },

    tweenModelColor(color) {
      if (this.model) {
        this.model.traverse((child) => {
          if (child.isMesh) {
            new Tween(child.material.color)
              .to({ r: color.r, g: color.g, b: color.b }, 150)
              .easing(Easing.Quadratic.InOut)
              .start();
          }
        });
      }
    },

    isMobile() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
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

      this.camera = null;
      this.model = null;
      this.targetXTween = null; // Clear tween instances on cleanup
      this.targetYTween = null;
    },
  },

  components: {
    HeroDisplayMobile,
    HeroDisplayDesktop,
  },

  props: {
    socials: Array,
  },
};
</script>



<style>
.hero {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

/* 3D */

.hero__threeDContainer {
  position: absolute;
  width: 100%;
  height: 100%;
}

.hero__threeDContainer canvas {
  animation: fadeInLogo ease 0.8s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  transform-origin: center;
}

@keyframes fadeInLogo {
    0% {
        opacity: 0;
        transform: scale(0.95)
    }
    100% {
        opacity: 1;
        transform: scale(1)

    }
}

.hero__fallback-content {
  position: absolute;
  top: 42%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #333;
  background: rgba(255, 255, 255, 0.9);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.hero__request-button {
  position: absolute;
  top: 38%;
  left: 50%;
  opacity: 0;
  transform: translate(-50%, -50%);
  background: var(--primary-color-tr-semi);
  color: var(--tetriary-color);
  font-size: var(--font-size-data);
  padding: 15px 25px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  animation: fadeInButton ease-in-out 0.6s;
  animation-delay: 1s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  transform-origin: center;
  z-index: 30;
}

@keyframes fadeInButton {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
}

/* Display */

.hero__display {
  height: 100%;
  width: 100%;
  color: var(--tetriary-color);
}
</style>