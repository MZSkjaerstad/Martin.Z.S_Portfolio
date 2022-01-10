<template>
   <div class="homepage">
      <section class="homepage__landing-mount">
         <Landing />
      </section>

      <section class="homepage__projects-mount">
         <Projects />
      </section>

      <section class="homepage__footer-mount">
         <Footer />
      </section>
   </div>
</template>

<script>
   import Landing from '../components/Landing.vue'
   import Projects from '../components/Projects.vue'
   import Footer from '../components/Footer.vue'

   export default {
      components: {
         Landing,
         Projects,
         Footer,
      }
   }
</script>

<style>
   .homepage {
      width: 100vw;
      height: auto;
      padding: 1rem 7% 0rem 7%;
   }

   /******* 5.1 MEDIA QUERIES *******/

   /* 5.5 Mobile standing */

   @media screen and (max-width: 996px) {
      .homepage {
         padding: 4rem 0% 2rem 0%;
      }
   }
</style>