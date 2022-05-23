<template>
   <main v-if="loading === true"> <Loading /> </main>
   <main v-else class="homepage">
      <section class="homepage__landing-mount">
         <Landing />
      </section>

      <section class="homepage__projects-mount">
         <ProjectsOverview :overviewContent="content"/>
      </section>
   </main >
</template>

<script>
   import Landing from '../components/Landing.vue'
   import Loading from '../components/Loading.vue'
   import ProjectsOverview from '../components/ProjectsOverview.vue'
   import viewMixin from '../mixins/viewMixin.js'
   import query from '../groq/home.groq?raw'

   export default {
      components: {
         Landing,
         Loading,
         ProjectsOverview,
      },

      mixins: [viewMixin],

      async created() {
         this.sanityFetch(query)
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

   @media screen and (max-device-width: 767px) {
      .homepage {
         padding: 0rem 0% 2rem 0%;
      }
   }
</style>