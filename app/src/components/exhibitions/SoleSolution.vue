<template>
   <!-- Change block name to the same as component -->
   <div class="sole">
      <img class="sole__fullscreen" :src="soleSolution[0].imageFile" :alt="soleSolution[0].imageCaption" style="grid-row:1;">

      <img class="sole__fullscreen" :src="soleSolution[1].imageFile" :alt="soleSolution[1].imageCaption" style="grid-row:2;">

      <img class="sole__fullscreen" :src="soleSolution[2].imageFile" :alt="soleSolution[2].imageCaption" style="grid-row:3;">
   </div>
</template>

<script>
export default {
   props: {
      soleSolution: Array
   }
}
</script>

<style>
   /* Change block name to the same as component */
   .sole {
      padding: 0 7%;
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      grid-gap: var(--spacing-small);
   }

   .sole__fullscreen {
      width: 100%;
      height: auto;
      grid-column: 1 / span 12;
   }

   .sole__centerscreen {
      width: 100%;
      height: auto;
      grid-column: 3 / span 8;
   }

   @media screen and (max-device-width: 767px) and (-webkit-min-device-pixel-ratio: 2) {
      .sole {
         padding: 0;
      }
   }
</style>
