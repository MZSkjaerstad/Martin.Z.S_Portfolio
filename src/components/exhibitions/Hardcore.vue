<template>
   <div class="hardcore">
      <div class="hardcore__flavour"></div>

      <div class="hardcore__backstory"></div>

      <div class="hardcore"></div>

      <div class="hardcore__videowrapper">
         <iframe class="hardcore__video" src="https://youtube.com/embed/UrVc2s0nDOg" frameborder="0"></iframe>
      </div>
   </div>
</template>

<style>
   .hardcore {
      padding: 0 7%;
      display: grid;
      grid-template-columns: repeat(12, 1fr);
   }

   /* X.X Video */

   .hardcore__videowrapper {
      grid-column: 1 / span 12;
      grid-row: 1;
      margin: 5rem 0rem;
   }

   .hardcore__video {
      width: 100%;
      height: 95vh;
   }

   @media screen and (max-device-width: 767px) and (-webkit-min-device-pixel-ratio: 2) {

   }
</style>
