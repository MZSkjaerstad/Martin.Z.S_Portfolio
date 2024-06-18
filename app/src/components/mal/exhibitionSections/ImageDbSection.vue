<template>
   <section class="image-db-section">
      <img class="image-db-file image-db-left" :src="sectionData.firstImageFile" :alt="sectionData.firstImageCaption">

      <img class="image-db-file image-db-right" :src="sectionData.secondImageFile" :alt="sectionData.secondImageCaption">
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
    .image-db-section {
      width: 100%;
      height: 60vh;
      padding: var(--spacing-small) 7% 0 7%;
      margin: var(--spacing-section) 0;
      overflow: hidden;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: var(--spacing-small);
      row-gap: var(--spacing-small);
    }

    .image-db-file {
      width: 100%;
      height: 100%;
      object-fit: cover;
      
    }

   @media screen and (max-device-width: 767px) and (-webkit-min-device-pixel-ratio: 2) {
      .image-db-section {
         height: auto;
         padding: var(--spacing-small) 5% 0 5%;
         margin: var(--spacing-section) 0;
         grid-template-columns: repeat(1, 1fr);
      }
   }

</style>
