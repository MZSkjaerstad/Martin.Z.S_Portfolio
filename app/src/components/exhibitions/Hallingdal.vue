<template>
   <!-- Change block name to the same as component -->
   <div class="hallingdal">
            <iframe class="hallingdal__video" :src="`${hallingdal[12].videoUrl}`" frameborder="0" style="grid-row:1;"></iframe>

      <img class="hallingdal__fullscreen" :src="hallingdal[0].imageFile" :alt="hallingdal[0].imageCaption" style="grid-row:2;">

      <img class="hallingdal__fullscreen" :src="hallingdal[1].imageFile" :alt="hallingdal[1].imageCaption" style="grid-row:3;">

      <img class="hallingdal__fullscreen" :src="hallingdal[2].imageFile" :alt="hallingdal[2].imageCaption" style="grid-row:4;">

      <img class="hallingdal__fullscreen" :src="hallingdal[3].imageFile" :alt="hallingdal[3].imageCaption" style="grid-row:5;">

      <img class="hallingdal__fullscreen" :src="hallingdal[4].imageFile" :alt="hallingdal[4].imageCaption" style="grid-row:6;">

      <img class="hallingdal__fullscreen" :src="hallingdal[5].imageFile" :alt="hallingdal[5].imageCaption" style="grid-row:7;">

      <img class="hallingdal__fullscreen" :src="hallingdal[6].imageFile" :alt="hallingdal[6].imageCaption" style="grid-row:8;">

      <img class="hallingdal__fullscreen" :src="hallingdal[7].imageFile" :alt="hallingdal[7].imageCaption" style="grid-row:9;">

      <img class="hallingdal__fullscreen" :src="hallingdal[8].imageFile" :alt="hallingdal[8].imageCaption" style="grid-row:10;">

      <img class="hallingdal__centerscreen" :src="hallingdal[9].imageFile" :alt="hallingdal[9].imageCaption" style="grid-row:11;">

      <img class="hallingdal__fullscreen" :src="hallingdal[10].imageFile" :alt="hallingdal[10].imageCaption" style="grid-row:12;">

      <img class="hallingdal__fullscreen" :src="hallingdal[11].imageFile" :alt="hallingdal[11].imageCaption" style="grid-row:13;">
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

   .hallingdal__fullscreen {
      width: 100%;
      height: auto;
      grid-column: 1 / span 12;
   }

   .hallingdal__centerscreen {
      width: 100%;
      height: auto;
      grid-column: 3 / span 8;
   }
   

   .hallingdal__video {
      width: 100%;
      height: 90vh;
      grid-column: 1 / span 12;
   }

   /* Rows */

   @media screen and (max-device-width: 767px) and (-webkit-min-device-pixel-ratio: 2) {
      .hallingdal {
         padding: 0;
      }

      .hallingdal__video {
         height: 30vh;
      }
   }
</style>