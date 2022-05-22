<template>
   <main v-if="loading === true">
      <Loading /> 
   </main>

   <main class="about" v-else>
      <div class="about__message"> Page currently not available due to development.</div>
   </main>
</template>

<script>
   import Loading from '../components/Loading.vue'
   import viewMixin from '../mixins/viewMixin.js'
   import query from '../groq/aboutMe.groq?raw'

   export default {
      components: {
         Loading
      },

      mixins: [viewMixin],

      async created() {
         this.sanityFetch(query)
      }
   }
</script>

<style>
   .about {
      width: 100%;
      height: 90%;
      display: flex;
      justify-content: center;
      align-items: center;
   }
</style>