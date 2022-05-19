<template>
   <div class="exhibition">
      <div class="exhibition__transition">
         <div class="exhibition__title">Exhibition</div>
      </div>

      <div class="exhibition__content">
         <Hardcore v-if="projectName === 'hardcore-animation-m-video'" />
         <Hallingdal v-if="projectName === 'hallingdal-kraftnett-energi'" />
         <Alan v-if="projectName === 'alan-webstore-analytics'" />
         <SoleSolution v-if="projectName === 'sole-solution-webstore'" />
      </div>
   </div>
</template>

<script>
import Hardcore from '../exhibitions/Hardcore.vue';
import Hallingdal from '../exhibitions/Hallingdal.vue';
import Alan from '../exhibitions/Alan.vue'
import SoleSolution from '../exhibitions/SoleSolution.vue'

export default {
   components: {
      Hardcore,
      Hallingdal,
      Alan,
      SoleSolution,
   },

   props: {
      projectName: String
   },
}
</script>

<style>
   /* 1.1 Exhibition */

   .exhibition {
      background: black;
   }

   /* 1.2 Transition */

   .exhibition__transition {
      height: 25rem;
      background: linear-gradient(0deg, black 0%, var(--primary-color) 95%);
      display: flex;
      justify-content: center;
      align-items: center;
   }

   .exhibition__title {
      font-size: var(--font-size-subtitle);
      font-style: italic;
      font-weight: 600;
   }

   @media screen and (max-device-width: 767px) and (-webkit-min-device-pixel-ratio: 2) {
      .exhibition__transition {
         height: 50rem;
      }
   }
</style>