<template>
   Mobile Fullscreen Section
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
    .mobile-fs-section {
      width: 100%;
      padding: 0 7%;
      margin: var(--spacing-large) 0;
    }

   @media screen and (max-device-width: 767px) and (-webkit-min-device-pixel-ratio: 2) {
      .mobile-fs-section {
         padding: 0;
      }
   }
</style>