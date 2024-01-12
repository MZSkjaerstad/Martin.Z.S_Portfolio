<template>
   <img class="image-fs-section" :src="sectionData.imageFile" :alt="sectionData.caption">
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
    .image-fs-section {
      width: 100%;
      padding: 0 7%;
      margin: var(--spacing-section) 0;
    }

   @media screen and (max-device-width: 767px) and (-webkit-min-device-pixel-ratio: 2) {
      .image-fs-section {
         padding: 0 5%;
         margin: var(--spacing-section) 0;
      }
   }

</style>
