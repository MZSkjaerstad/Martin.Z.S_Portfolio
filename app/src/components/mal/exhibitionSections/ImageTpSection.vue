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
      height: 40vh;
      padding: 0 7%;
      margin: var(--spacing-section) 0 0 0;
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
         padding: 0 5%;
         grid-template-columns: repeat(1, 1fr);
         column-gap: var(--spacing-section);
         row-gap: var(--spacing-section);
      }

      .image-tp-file {
         grid-column: 1 / span 3;
      }
   }

</style>
