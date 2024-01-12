<template>
  <section class="desktop-fs-section">
    <div class="desktop-fs-section__desktop">
      <img src="" alt="Desktop overlay">
    </div>

    <div class="desktop-fs-section__content">
      <img :src="sectionData.imageFile" :alt="sectionData.caption">
    </div>
  </section>
</template>

<script>
export default {
  props: {
    sectionData: Object
  },
};
</script>

<style>
  /* Change block name to the same as component */
  .desktop-fs-section {
    width: 100%;
    padding: 0 7%;
    margin: var(--Spacing-Section) 0;
  }

  @media screen and (max-device-width: 767px) and (-webkit-min-device-pixel-ratio: 2) {
    .desktop-fs-section {
        padding: 0;
        margin: var(--spacing-medium) 0;
    }
  }
</style>