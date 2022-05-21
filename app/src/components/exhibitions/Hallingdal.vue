<template>
   <!-- Change block name to the same as component -->
   <div class="hallingdal">
      <img class="hallingdal__poster-one" :src="hallingdal[3].imageFile" :alt="hallingdal[3].imageCaption">

      <img class="hallingdal__web-app" :src="hallingdal[1].imageFile" :alt="hallingdal[1].imageCaption">

      <iframe class="hallingdal__video" :src="`${hallingdal[0].videoUrl}`" frameborder="0"></iframe>
   </div>
</template>

<script>
export default {
   props: {
      hallingdal: Array
   }
}
</script>

<style>
   /* Change block name to the same as component */
   .hallingdal {
      padding: 0 7%;
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      grid-gap: var(--spacing-small);
   }

   .hallingdal__poster-one {
      width: 100%;
      height: auto;
      grid-column: 1 / span 12;
      grid-row: 1;
   }

   .hallingdal__web-app {
      width: 100%;
      height: auto;
      grid-column: 1 / span 12;
      grid-row: 2;
   }

   .hallingdal__video {
      width: 100%;
      height: 90vh;
      grid-column: 1 / span 12;
      grid-row: 3;
   }

   @media screen and (max-device-width: 767px) and (-webkit-min-device-pixel-ratio: 2) {
      .hallingdal {
         padding: 0;
      }

      .hallingdal__video {
         height: 30vh;
      }
   }
</style>