<template>
   <section class="hardcore">
      <iframe class="hardcore__video" :src="`${hardcore[0].videoUrl}`" frameborder="0"></iframe>

      <img class="hardcore__depth" :src="hardcore[1].imageFile" :alt="hardcore[1].imageCaption">

      <img class="hardcore__pop" :src="hardcore[2].imageFile" :alt="hardcore[2].imageCaption">

      <img class="hardcore__twist" :src="hardcore[3].imageFile" :alt="hardcore[3].imageCaption">

      <img class="hardcore__text" :src="hardcore[4].imageFile" :alt="hardcore[4].imageCaption">

      <img class="hardcore__juggling" :src="hardcore[5].imageFile" :alt="hardcore[5].imageCaption">
   </section>
</template>

<script>
export default {
   props: {
      hardcore: Array
   }
}
</script>

<style>
   .hardcore {
      padding: 0 7%;
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      grid-gap: var(--spacing-small);
   }

   .hardcore__video {
      width: 100%;
      height: 90vh;
      grid-column: 1 / span 12;
      grid-row: 1;
   }

   .hardcore__depth {
      width: 100%;
      height: auto;
      grid-column: 1 / span 12;
      grid-row: 2;
   }

   .hardcore__pop {
      width: 100%;
      height: auto;
      grid-column: 1 / span 12;
      grid-row: 3;
   }

   .hardcore__twist {
      width: 100%;
      height: auto;
      grid-column: 1 / span 12;
      grid-row: 4;
   }

   .hardcore__text {
      width: 100%;
      height: auto;
      grid-column: 1 / span 12;
      grid-row: 5;
   }

   .hardcore__juggling {
      width: 100%;
      height: auto;
      grid-column: 1 / span 12;
      grid-row: 6;
   }

   @media screen and (max-device-width: 767px) and (-webkit-min-device-pixel-ratio: 2) {
      .hardcore {
         padding: 0;
      }

      .hardcore__video {
         height: 30vh;
      }
   }

</style>
