<template>
   <section class="image-ls-section">
      <img class="image-ls-file" :src="sectionData.imageFile" :alt="sectionData.caption">
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
    .image-ls-section {
      width: 100%;
      height: 70vh;
      padding: var(--spacing-small) 7% 0 7%;
      margin: var(--spacing-section) 0;
      overflow: hidden;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      column-gap: var(--spacing-small);
      row-gap: var(--spacing-small);
    }

    .image-ls-file {
      width: 100%;
      height: 100%;
      grid-column: 1 / span 2;
      object-fit: cover;
    }

   @media screen and (max-device-width: 767px) and (-webkit-min-device-pixel-ratio: 2) {
      .image-ls-section {
         height: auto;
         padding: var(--spacing-small) 5% 0 5%;
         margin: var(--spacing-section) 0;
         grid-template-columns: repeat(1, 1fr);
      }

      .image-ls-file {
         grid-column: 1 / span 3;
      }
   }

</style>
