<template>
   <div class="landingpage">
      <figure class="landingpage__logowrapper">
         <img class="landingpage__logo" src="/visual_identity/vector/logo_w_text.svg" alt="Martin.Z.S logo">

         <figcaption class="landingpage__logo-fig">Martin Z. S. logo</figcaption>
      </figure>

      <div class="landingpage__ruler">
         <div class="ruler__increment-group">
            <img class="ruler__increment" src="global/visual_identity/vector/medium_increment.svg" alt="medium increment">

            <img class="ruler__increment" src="global/visual_identity/vector/short_increment.svg" alt="short increment">

            <img class="ruler__increment" src="global/visual_identity/vector/short_increment.svg" alt="short increment">

            <img class="ruler__increment" src="global/visual_identity/vector/short_increment.svg" alt="short increment">
         </div>

         <div class="ruler__increment-group">
            <img class="ruler__increment" src="global/visual_identity/vector/medium_increment.svg" alt="medium increment">

            <img class="ruler__increment" src="global/visual_identity/vector/short_increment.svg" alt="short increment">

            <img class="ruler__increment" src="global/visual_identity/vector/short_increment.svg" alt="short increment">

            <img class="ruler__increment" src="global/visual_identity/vector/short_increment.svg" alt="short increment">
         </div>

         <div class="ruler__increment-group">
            <img class="ruler__increment" src="global/visual_identity/vector/medium_increment.svg" alt="medium increment">

            <img class="ruler__increment" src="global/visual_identity/vector/short_increment.svg" alt="short increment">

            <img class="ruler__increment" src="global/visual_identity/vector/short_increment.svg" alt="short increment">

            <img class="ruler__increment" src="global/visual_identity/vector/short_increment.svg" alt="short increment">
         </div>

         <div class="ruler__increment-group">
            <img class="ruler__increment" src="global/visual_identity/vector/medium_increment.svg" alt="medium increment">

            <img class="ruler__increment" src="global/visual_identity/vector/short_increment.svg" alt="short increment">

            <img class="ruler__increment" src="global/visual_identity/vector/short_increment.svg" alt="short increment">

            <img class="ruler__increment" src="global/visual_identity/vector/short_increment.svg" alt="short increment">
         </div>

         <div class="ruler__increment-group">
            <div class="ruler__increment ruler__increment--long">
               <div class="ruler__name">
                  <div class="ruler__name-spacing">By Martin</div>

                  <div class="ruler__name-spacing">Zupfer Skjærstad</div>
               </div>
            </div>

            <img class="ruler__increment" src="global/visual_identity/vector/short_increment.svg" alt="short increment">

            <img class="ruler__increment" src="global/visual_identity/vector/short_increment.svg" alt="short increment">

            <img class="ruler__increment" src="global/visual_identity/vector/short_increment.svg" alt="short increment">
         </div>
      </div>
       
      <div class="landingpage__motif">
         <div class="landingpage__birds">
            <img class="landingpage__bigbird" src="global/visual_identity/image/bird-big.png" alt="big bird">

            <img class="landingpage__smallbird" src="global/visual_identity/image/bird-small.png" alt="small bird">
         </div>

         <div class="landingpage__typography">
            <div class="landingpage__subtitle">a graphic design</div>
            
            <div class="landingpage__title">portfolio</div>
         </div>

         <div class="landingpage__circles">
            <img class="landingpage__big-circle" src="global/visual_identity/image/circle-big.png" alt="Stor sirkel">

            <img class="landingpage__small-circle" src="global/visual_identity/image/circle-small.png" alt="Liten sirkel">
         </div>

         <figure class="landingpage__background">
            <img class="landingpage__background-img" src="global/visual_identity/image/background-image.jpg" alt="Background-image">
            <figcaption class="landingpage__figcaption">Background image</figcaption>
         </figure>
      </div>
   </div>
</template>

<script></script>

<style>

   /******* 1.1 GENERAL *******/

   .landingpage {
      position: relative;       
      width: 100%;
      height: 100%;
   }

   /******* 2.1 LOGO *******/

   .landingpage__logowrapper {
      position: absolute;
      width: 8rem;
      height: auto;
      background: var(--background);
      padding: 0rem 1rem 0.8rem 1rem;
      border-radius: 0px 0px 15px 15px;
      left: 50%;
      transform: translateX(-4rem);
      z-index: 14;
   }

   .landingpage__logo {
      width: 100%;
      height: auto;
   }

   .landingpage__logo-fig {
      display: none;
   }

   /******* 3.1 RULER *******/

   .landingpage__ruler {
      position: absolute;
      z-index: 13;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
   }

   .ruler__increment-group {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
   }

   .ruler__increment {
      height: 2px;
      margin-bottom: 4.65vh;
   }

   .ruler__increment--long {
      width: 85vw;
      border-top: solid var(--foreground) 1px;
   }

   .ruler__name {
      color: var(--foreground);
      font-size: 1.1rem;
      font-style: italic;
      text-align: end;
      text-transform: uppercase;
      letter-spacing: 0.05rem;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      margin-top: 1vh;
   }

   .ruler__name-spacing {
      margin-top: 0.4rem;
   }

   /******* 4.1 MOTIF *******/

   .landingpage__motif {
      width: 86%;
      height: 88.4%;
      z-index: 10;
      left: 50%;
      transform: translateX(8%);
      overflow: hidden;
   }

   /* 4.2 Birds */

   .landingpage__birds {
      position: absolute;
      width: 70%;
      z-index: 16;
      top: 50%;
      left: 50%;
      transform: translateY(-50%) translateX(-50%);
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
      align-items: center;
   }

   .landingpage__bigbird {
      width: 55%;
      width: 55%;
      transform: translateY(-30%);
   }

   .landingpage__smallbird {
      width: 13%;
      height: 13%;
      padding-top: 50%;
   }

   /* 4.3 Typograpfy */

   .landingpage__typography {
      position: absolute;
      margin-top: 5%;
      z-index: 14;
      top: 50%;
      left: 50%;
      transform: translateY(-50%) translateX(-50%);
   }

   .landingpage__subtitle {
      font-size: 1.7vw;
      font-style: italic;
      font-weight: 600;
      text-transform: uppercase;
      color: var(--background);
      padding-left: 7%;
   }

   .landingpage__title {
      font-size: 9vw;
      font-style: italic;
      font-weight: 600;
      letter-spacing: 0.6rem;
      text-transform: uppercase;
      color: var(--background);
   }

   /* 4.4 Circles */

   .landingpage__circles {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 12;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
   }

   .landingpage__big-circle {
      width: 33%;
      rotate: 25%;
      margin-left: 8%;
   }

   .landingpage__small-circle {
      width: 12%;
      margin-bottom: 25%;
   }

   /* 4.5 Background */

   .landingpage__background  {
      position: absolute;
      width: 100%;
      height: 100%;
      background: var(--background);
      border: solid var(--background) 1px;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
   }

   .landingpage__background-img {
      width: auto;
      height: 100%;
   }

   .landingpage__figcaption {
      display: none;
   }

   /******* 5.1 MEDIA QUERIES *******/

   /* 5.2 Widescreen */

   @media screen and (min-width: 1200px) {}

   /* 5.3 Smaller screens, Pads */

   @media screen and (max-width: 992px) {}

   /* 5.4 Mobile Standing */

   @media screen and (max-width: 576px) {}

   /* 5.5 Mobile Laying */

   @media screen and (max-width: none) {}

</style>