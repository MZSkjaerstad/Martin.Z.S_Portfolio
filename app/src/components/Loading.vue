<template>
  <main class="loading">
    <Vue3Lottie :animationData="loadingAnimation" :loop="true" :autoplay="true" :height="200" :width="200" />

    <h2>loading</h2>
  </main>
</template>

<script>
  import Vue3Lottie from 'vue3-lottie'
  import loadingAnimation from '../lotties/loading.json'

  export default {
    components: {
      Vue3Lottie,
    },

    data() {
      return {
        loadingAnimation
      }
    }
  }
</script>

<style>
.loading {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>