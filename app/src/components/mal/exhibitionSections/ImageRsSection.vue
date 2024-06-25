<template>
   <section class="image-rs-section">
      <img class="image-rs-file" :src="sectionData.imageFile" :alt="sectionData.caption">
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
    .image-rs-section {
      width: 100%;
      height: 70vh;
      padding: 0 7%;
      margin: var(--spacing-section) 0 0 0;
      overflow: hidden;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      column-gap: var(--spacing-small);
      row-gap: var(--spacing-small);
    }

    .image-rs-file {
      width: 100%;
      height: 100%;
      grid-column: 2 / span 2;
      object-fit: cover;
    }

   @media screen and (max-device-width: 767px) and (-webkit-min-device-pixel-ratio: 2) {
      .image-rs-section {
         height: auto;
         padding: 0 5%;
         grid-template-columns: repeat(1, 1fr);
      }

      .image-rs-file {
         grid-column: 1 / span 3;
      }
   }

</style>
