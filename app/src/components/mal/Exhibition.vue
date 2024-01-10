<template>
  <section class="exhibition">
    <div class="exhibition__transition" />

    <div class="exhibition__content">
      <div class="exhibition__section" v-for="section in exhibitionData.exhibitionSections">
        <ImageFsSection :sectionData="section" v-if="section.sectionType === 'imageFsSection'"/>

        <ImagePxSection :sectionData="section" v-if="section.sectionType === 'imagePxSection'"/>

        <DesktopFsSection :sectionData="section" v-if="section.sectionType === 'DesktopFsSection'"/>

        <MacbookFsSection :sectionData="section" v-if="section.sectionType === 'macFsSection'"/>

        <MobileFsSection :sectionData="section" v-if="section.sectionType === 'mobileFsSection'"/>

        <VideoFsSection :sectionData="section" v-if="section.sectionType === 'videoFsSection'"/>

        <AssetCtaSection :sectionData="section" v-if="section.sectionType === 'assetCtaSection'" />
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
import AssetCtaSection from './exhibitionSections/AssetCtaSection.vue'


export default {
   components: {
      NoFiles,
      ImageFsSection,
      ImagePxSection,
      DesktopFsSection,
      MacbookFsSection,
      MobileFsSection,
      VideoFsSection,
      AssetCtaSection,
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
  padding-bottom: var(--spacing-large);
}

/* 1.2 Transition */

.exhibition__transition {
  height: 40rem;
  background: linear-gradient(0deg, black 5%, var(--primary-color) 95%);
  display: flex;
  justify-content: center;
  align-items: center;
}

.exhibition__content {
  padding-top: var(--spacing-large);
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