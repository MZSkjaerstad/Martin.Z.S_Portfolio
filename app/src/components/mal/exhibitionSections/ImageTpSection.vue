<template>
   <section class="image-tp-section">
      <img class="image-tp-file image-tp-left" :src="sectionData.firstImageFile" :alt="sectionData.firstImageCaption">

      <img class="image-tp-file image-tp-middle" :src="sectionData.secondImageFile" :alt="sectionData.secondImageCaption">

      <img class="image-tp-file image-tp-right" :src="sectionData.thirdImageFile" :alt="sectionData.thirdImageCaption">
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
    .image-tp-section {
      width: 100%;
      height: 35vh;
      padding: var(--spacing-small) 7% 0 7%;
      margin: var(--spacing-section) 0;
      overflow: hidden;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      column-gap: var(--spacing-small);
      row-gap: var(--spacing-small);
    }

    .image-tp-file {
      width: 100%;
      height: 100%;
      object-fit: cover;
      
    }

   @media screen and (max-device-width: 767px) and (-webkit-min-device-pixel-ratio: 2) {
      .image-tp-section {
         height: auto;
         padding: var(--spacing-small) 5% 0 5%;
         margin: var(--spacing-section) 0;
         grid-template-columns: repeat(1, 1fr);
      }
   }

</style>
