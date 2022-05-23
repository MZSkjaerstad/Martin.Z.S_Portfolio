<template>
  <main class="loading">
    <Vue3Lottie :animationData="loadingJSON" :loop="true" :autoplay="true" :height="50" :width="50" />

    <h2>loading</h2>
  </main>
</template>

<script>
  import { Vue3Lottie } from 'vue3-lottie'
  import loadingJSON from '../lotties/loading.json'

  export default {
    components: {
      Vue3Lottie,
    },

    data() {
      return {
        loadingJSON
      }
    }
  }
</script>

<style>
.loading {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>