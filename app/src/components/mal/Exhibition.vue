<template>
  <section class="exhibition">
    <div class="exhibition__transition" />

    <div class="exhibition__content">
      <div class="exhibition__section" v-for="section in exhibitionData.exhibitionSections">
        <ImageFsSection :sectionData="section" v-if="section.sectionType === 'imageFsSection'"/>
      </div>
    </div>
  </section>
</template>

<script>
import NoFiles from '../NoFiles.vue'
import ImageFsSection from './exhibitionSections/ImageFsSection.vue'
import ImagePxSection from './exhibitionSections/ImagePxSection.vue'
import DesktopFsSection from './exhibitionSections/DesktopFsSection.vue'
import MacbookFsSection from './exhibitionSections/MacbookFsSection.vue'
import MobileFsSection from './exhibitionSections/MobileFsSection.vue'
import VideoFsSection from './exhibitionSections/VideoFsSection.vue'



export default {
   components: {
      NoFiles,
      ImageFsSection,
      ImagePxSection,
      DesktopFsSection,
      MacbookFsSection,
      MobileFsSection,
      VideoFsSection,
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
  height: 40rem;
  background: linear-gradient(0deg, black 5%, var(--primary-color) 95%);
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