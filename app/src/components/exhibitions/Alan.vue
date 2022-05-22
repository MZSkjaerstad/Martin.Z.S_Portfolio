<template>
   <div class="alan">
      <img class="alan__fullscreen" :src="alan[0].imageFile" :alt="alan[0].imageCaption" style="grid-row:1;">

      <img class="alan__fullscreen" :src="alan[1].imageFile" :alt="alan[1].imageCaption" style="grid-row:2;">

      <img class="alan__fullscreen" :src="alan[2].imageFile" :alt="alan[2].imageCaption" style="grid-row:3;">

      <img class="alan__fullscreen" :src="alan[3].imageFile" :alt="alan[3].imageCaption" style="grid-row:4;">
   </div>
</template>

<script>
export default {
   props: {
      alan: Array
   }
}
</script>

<style>
   .alan {
      padding: 0 7%;
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      grid-gap: var(--spacing-small);
   }

   .alan__fullscreen {
      width: 100%;
      height: auto;
      grid-column: 1 / span 12;
   }

   .alan__centerscreen {
      width: 100%;
      height: auto;
      grid-column: 3 / span 8;
   }
   

   .alan__video {
      width: 100%;
      height: 90vh;
      grid-column: 1 / span 12;
   }

   /* Rows */

   @media screen and (max-device-width: 767px) and (-webkit-min-device-pixel-ratio: 2) {
      .alan {
         padding: 0;
      }

      .alan__video {
         height: 30vh;
      }
   }
</style>
