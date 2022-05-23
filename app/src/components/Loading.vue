<template>
  <main class="loading">
    <Vue3Lottie class="loading__animation" :animationData="loadingJSON" :loop="true" :autoplay="true" :height="20" :width="20" />

    <h2>loading</h2>
  </main>
</template>

<script>
  import { Vue3Lottie } from 'vue3-lottie'
  import loadingJSON from '../lotties/loading.json?raw'

  export default {
    components: {
      Vue3Lottie,
    },

    data() {
      return {
        loadingJSON: JSON.parse(loadingJSON)
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

.loading__animation {
  width: 15%;
  height: auto;
}
</style>