<template>
   <div class="hardcore">

      <div class="hardcore__warning">
         <div class="hardcore__warning-headline">[ Warning ]</div>

         <div class="hardcore__warning-message">The content below contains highly contrasted, blinking imagery and loud music with a harsh and noicy sound. People with health conditions affected by these conditions or people frail by heart should abstain from viewing this project. You have been warned.</div>
      </div>

      <div class="hardcore__depth">
         <div class="hardcore__depth-frame">
            <img class="hardcore__depth-gif" src="/project_assets/hardcore_animation/gif/depth.gif">
         </div>

         <div class="hardcore__juggle-data hardcore__data">
            "Juggle.gif"
         </div>
      </div>

      <div class="hardcore__pop">
         <div class="hardcore__pop-frame">
            <img class="hardcore__pop-gif" src="/project_assets/hardcore_animation/gif/pop.gif">
         </div>

         <div class="hardcore__juggle-data hardcore__data">
            "Juggle.gif"
         </div>
      </div>

      <div class="hardcore__twist">
         <div class="hardcore__twist-frame">
            <img class="hardcore__twist-gif" src="/project_assets/hardcore_animation/gif/twist.gif">
         </div>

         <div class="hardcore__juggle-data hardcore__data">
            "Juggle.gif"
         </div>
      </div>

      <div class="hardcore__text">
         <div class="hardcore__text-frame">
            <img class="hardcore__text-gif" src="/project_assets/hardcore_animation/gif/text.gif">
         </div>

         <div class="hardcore__juggle-data hardcore__data">
            "Juggle.gif"
         </div>
      </div>

      <div class="hardcore__juggle">
         <div class="hardcore__juggle-frame">
            <img class="hardcore__juggle-gif" src="/project_assets/hardcore_animation/gif/juggling_nodes.gif">
         </div>

         <div class="hardcore__juggle-text">
            <div class="hardcore__juggle-flavour">
               "Through the use of strong contrasts, violent animations and distortion of the elements, the attributes are distilled from the genre and recreated into the visual representation of hardcore punk. Complementary colors, simple and strong shapes, and bold typography define the toolbox, and a relentless use of animation principles brings the elements to life and manifests the brutal character".
            </div>

            <div class="hardcore__juggle-data hardcore__data">
               "Juggle.gif"
            </div>
         </div>
      </div>

      <div class="hardcore__videowrapper">
         <div class="hardcore__data"> "Hardcore Animation Music Video"</div>

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

   .hardcore__data {
      color: var(--highlight-color);
      font-size: var(--font-size-data);
      font-style: italic;
      padding: 0.4rem 0;
      text-align: center;
   }

   /* X.X Depth */



   /* X.X Depth */

   .hardcore__depth {
      grid-column: 3 / span 8;
      grid-row: 4;
      padding: 20rem 0rem;
   }

   .hardcore__depth-gif {
      width: 100%;
      height: auto;
   }

   /* X.X Pop */

   .hardcore__pop {
      grid-column: 1 / span 4;
      grid-row: 3;
   }

   .hardcore__pop-gif {
      width: 100%;
      height: auto;
   }

   /* X.X Twist */

   .hardcore__twist {
      grid-column: 1 / span 7;
      grid-row: 2;
      border: solid #141414 1px;
   }

   .hardcore__twist-gif {
      width: 100%;
      height: auto;
   }

   /* X.X Text */

   .hardcore__text {
      grid-column: 7 / span 5;
      grid-row: 5;
      border: solid #141414 1px;
   }

   .hardcore__text-gif {
      width: 100%;
      height: auto;
   }
   /* X.X Juggle */

   .hardcore__juggle {
      grid-column: 1 / span 12;
      grid-row: 6;
      padding: 5rem 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
   }

   .hardcore__juggle-frame {
      width: 60%;
   }

   .hardcore__juggle-gif {
      width: 100%;
      height: auto;
   }

   .hardcore__juggle-text {
      width: 32%;
      font-style: italic;
   }
   .hardcore__juggle-data {
      text-align: start;
   }

   /* X.X Warning */

   .hardcore__warning {
      grid-column: 5 / span 4;
      grid-row: 1;
      padding: 35vh 0 50vh 0;
      display: flex;
      flex-direction: column;
      align-items: center;
   }

   .hardcore__warning-headline {
      color: var(--highlight-color);
      font-size: 1.5rem;
      font-weight: 600;
      text-transform: uppercase;
      padding-bottom: 2rem;
   }

   .hardcore__warning-message {
      font-size: var(--font-size-data);
      text-align: center;
   }

   /* X.X Video */

   .hardcore__videowrapper {
      grid-column: 1 / span 12;
      grid-row: 7;
      margin: 10rem 0rem 10rem 0rem;
   }

   .hardcore__video {
      width: 100%;
      height: 90vh;
      border: solid #141414 1px;
   }

   @media screen and (max-device-width: 767px) and (-webkit-min-device-pixel-ratio: 2) {
      
   }

</style>
