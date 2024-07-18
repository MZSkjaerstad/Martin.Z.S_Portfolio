<template>
   <main v-if="loading === true"> <Loading /> </main>
   <main v-else class="homepage">
      <section class="homepage__landing-mount">
         <Hero3D :socials="content.socials" />
      </section>

      <section class="homepage__projects-mount">
         <ProjectsOverview :overviewContent="content.thumbnails"/>
      </section>
   </main >
</template>

<script>
   import Hero3D from '../components/Hero3D.vue'
   import Loading from '../components/Loading.vue'
   import ProjectsOverview from '../components/ProjectsOverview.vue'
   import viewMixin from '../mixins/viewMixin.js'
   import query from '../groq/home.groq?raw'

   export default {
      components: {
         Hero3D,
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

   .herothreed {
      display: block;
   }

   .heromobile {
      display: none;
   }

   /******* 5.1 MEDIA QUERIES *******/

   /* 5.5 Mobile standing */

   @media screen and (max-device-width: 767px) {
      .homepage {
         padding: 0rem 0% 2rem 0%;
      }

      .heromobile {
         display: block !important;
      }

      .herothreed {
         display: none !important;
      }
   }
</style>