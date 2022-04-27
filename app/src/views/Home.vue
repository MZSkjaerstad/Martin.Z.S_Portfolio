<template>
   <div class="homepage">
      <section class="homepage__landing-mount">
         <Landing />
      </section>

      <section class="homepage__projects-mount">
         <ProjectsOverview />
      </section>
   </div>
</template>

<script>
   import Landing from '../components/Landing.vue'
   import ProjectsOverview from '../components/ProjectsOverview.vue'

   export default {
      components: {
         Landing,
         ProjectsOverview,
      }
   }
</script>

<style>
   .homepage {
      width: 100vw;
      height: auto;
      padding: 0rem 7% 0rem 7%;
   }

   /******* 5.1 MEDIA QUERIES *******/

   /* 5.5 Mobile standing */

   @media screen and (max-device-width: 767px) and (-webkit-min-device-pixel-ratio: 2) {
      .homepage {
         padding: 0rem 0% 2rem 0%;
      }
   }
</style>