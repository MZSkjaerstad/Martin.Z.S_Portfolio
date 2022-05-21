<template>
  <section class="exhibition">
    <div class="exhibition__transition">
      <h3 class="exhibition__title">Exhibition</h3>
    </div>

    <div class="exhibition__content">
      <Hardcore v-if="projectName === 'hardcore-animation-m-video'" :hardcore="exhibitionData.exhibitionAssets"/>
      <Hallingdal v-if="projectName === 'hallingdal-kraftnett-energi'" :hallingdal="exhibitionData.exhibitionAssets"/>
      <Alan v-if="projectName === 'alan-webstore-analytics'" :alan="exhibitionData.exhibitionAssets"/>
      <SoleSolution v-if="projectName === 'sole-solution-webstore'" :soleSolution="exhibitionData.exhibitionAssets"/>
    </div>
  </section>
</template>

<script>
import NoFiles from "../NoFiles.vue"
import Hardcore from "../exhibitions/Hardcore.vue";
import Hallingdal from "../exhibitions/Hallingdal.vue";
import Alan from "../exhibitions/Alan.vue";
import SoleSolution from "../exhibitions/SoleSolution.vue";

export default {
   components: {
      NoFiles,
      Hardcore,
      Hallingdal,
      Alan,
      SoleSolution,
   },

  props: {
    projectName: String,
    exhibitionData: Object
  },
};
</script>

<style>
/* 1.1 Exhibition */

.exhibition {
  background: black;
  padding-bottom: var(--spacing-small)
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
  font-weight: 600;
}

@media screen and (max-device-width: 767px) and (-webkit-min-device-pixel-ratio: 2) {
  .exhibition__transition {
    height: 50rem;
  }
}
</style>