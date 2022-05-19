<template>
   <div class="about">
      <div class="about__message"> Page currently not available due to </div>
   </div>
</template>

<script>
   import viewMixin from '../mixins/viewMixin.js'
   import query from '../groq/aboutMe.groq?raw'

   export default {
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