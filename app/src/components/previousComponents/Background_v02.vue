<template>
  <main class="background">
    <div class="background__container">
      <div id="lottie-container"></div>
    </div>
  </main>
</template>

<script>
import lottie from 'lottie-web';
import backgroundAnimation from '../lotties/particle_background.json'

export default {
  data() {
    return {
      backgroundJSON: backgroundAnimation,
    };
  },
  mounted() {
    this.initLottie();
  },
  methods: {
    initLottie() {
      lottie.loadAnimation({
         container: document.getElementById('lottie-container'),
         renderer: 'svg',
         loop: true,
         autoplay: true,
         animationData: this.backgroundJSON,
         rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
            },
      });
    },
  },
};
</script>

<style>
.background {
  position: sticky;
  width: 100vw;
  height: 0;
  top: 0;
  opacity: 0.9;
  z-index: -2;
  overflow: visible;
}

.background__container {
  height: 100vh;
  position: relative;
  object-fit: cover;
  background-color: var(--primary-color);
}

#lottie-container svg {
  overflow: visible;
  height: 100%;
  width: 100%;
  object-fit: cover;
}
</style>
