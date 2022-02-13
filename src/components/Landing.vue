<template>
   <div class="landingpage">
      <figure class="landingpage__logowrapper">
         <img class="landingpage__logo" src="/visual_identity/vector/logo_w_text.svg" alt="Martin.Z.S logo">

         <figcaption class="landingpage__logo-fig">Martin Z. S. logo</figcaption>
      </figure>

      <div class="landingpage__ruler">
         <div class="ruler__increment-group">
            <div class="ruler__increments ruler__data">
               <div>
                  <div class="ruler__increment--medium"></div>

                  <div class="ruler__increment-info">001</div>
               </div>

               <div class="ruler__data-content">Heihei</div>
            </div>

            <div class="ruler__increments">
               <div class="ruler__increment--small"></div>
            </div>

            <div class="ruler__increments">
               <div class="ruler__increment--small"></div>
            </div>

            <div class="ruler__increments">
               <div class="ruler__increment--small"></div>
            </div>
         </div>

         <div class="ruler__increment-group">
            <div class="ruler__increments">
               <div class="ruler__increment--medium"></div>
            </div>

            <div class="ruler__increments">
               <div class="ruler__increment--small"></div>
            </div>

            <div class="ruler__increments">
               <div class="ruler__increment--small"></div>
            </div>

            <div class="ruler__increments">
               <div class="ruler__increment--small"></div>
            </div>
         </div>

         <div class="ruler__increment-group">
            <div class="ruler__increments">
               <div class="ruler__increment--medium"></div>
            </div>

            <div class="ruler__increments">
               <div class="ruler__increment--small"></div>
            </div>

            <div class="ruler__increments">
               <div class="ruler__increment--small"></div>
            </div>

            <div class="ruler__increments">
               <div class="ruler__increment--small"></div>
            </div>
         </div>

         <div class="ruler__increment-group">
            <div class="ruler__increments">
               <div class="ruler__increment--medium"></div>
            </div>

            <div class="ruler__increments">
               <div class="ruler__increment--small"></div>
            </div>

            <div class="ruler__increments">
               <div class="ruler__increment--small"></div>
            </div>

            <div class="ruler__increments">
               <div class="ruler__increment--small"></div>
            </div>
         </div>

         <div class="ruler__increment-group">
            <div class="ruler__increments ruler__increment--long">
               <div class="ruler__name">
                  <div class="ruler__name-spacing">By Martin</div>

                  <div class="ruler__name-spacing">Zupfer Skjærstad</div>
               </div>
            </div>

            <div class="ruler__increments ruler__scroll-icon">
               <div class="ruler__increment--small"></div>

               <div></div>
            </div>

            <div class="ruler__increments">
               <div class="ruler__increment--small"></div>
            </div>

            <div class="ruler__increments">
               <div class="ruler__increment--small"></div>
            </div>
         </div>
      </div>
       
      <div class="landingpage__motif">
         <div class="landingpage__birds">
            <img class="landingpage__bigbird" src="/visual_identity/image/bird-big.png" alt="big bird">

            <img class="landingpage__smallbird" src="/visual_identity/image/bird-small.png" alt="small bird">
         </div>

         <div class="landingpage__typography">
            <div class="landingpage__subtitle">a graphic design</div>
            
            <div class="landingpage__title">portfolio</div>
         </div>

         <div class="landingpage__circles">
            <img class="landingpage__big-circle" src="/visual_identity/image/circle-big.png" alt="Stor sirkel">

            <img class="landingpage__small-circle" src="/visual_identity/image/circle-small.png" alt="Liten sirkel">
         </div>

         <figure class="landingpage__background">
            <img class="landingpage__background-img" src="/visual_identity/image/background-image.jpg" alt="Background-image">

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
      background: var(--primary-color);
      padding: 0rem 1rem 0.7rem 1rem;
      border-radius: 0px 0px 10px 10px;
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

   .ruler__increments {
      width: 85vw;
      height: 0px;
      margin-bottom: 5vh;
   }

   .ruler__increment--small {
      width: var(--increment-small);
      border-top: var(--increment-style);
   }

   .ruler__increment--medium {
      width: var(--increment-medium);
      border-top: var(--increment-style);
   }

   .ruler__increment--long {
      width: var(--increment-large);
      border-top: var(--increment-style);
   }

   .ruler__increment-info {
      color: var(--highlight-color);
      font-size: var(--font-size-data);
   }

   .ruler__data {
      display: flex;
      justify-content: space-between;
   }

   .ruler__data-content {
      color: var(--highlight-color);
      font-size: var(--font-size-data);
      font-style: italic;
   }

   .ruler__name {
      color: var(--highlight-color);
      font-size: 1.1em;
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
      height: 92%;
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
      color: var(--primary-color);
      padding-left: 7%;
   }

   .landingpage__title {
      font-size: 9vw;
      font-style: italic;
      font-weight: 600;
      letter-spacing: 0.6rem;
      text-transform: uppercase;
      color: var(--primary-color);
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
      width: 28%;
      transform: rotate(35deg);
      margin-left: 9%;
   }

   .landingpage__small-circle {
      width: 8%;
      transform: rotate(-60deg);
      margin-left: 7%;
      margin-bottom: 25%;
   }

   /* 4.5 Background */

   .landingpage__background  {
      position: absolute;
      width: 100%;
      height: 100%;
      background: var(--primary-color);
      border: solid var(--primary-color) 1px;
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

   /* 5.3 Smaller screens, Small pads, mobile, etc. */

   @media screen and (max-device-width: 767px) and (-webkit-min-device-pixel-ratio: 2) {

      /******* X.1 LOGO *******/

      .landingpage__logowrapper {
         width: 16rem;
         transform: translateX(-8rem);
         padding: 0rem 2rem 1.4rem 2rem;
         border-radius: 0px 0px 18px 18px;
      }

      /******* X.2 RULER *******/

      .landingpage__ruler{
         padding: 0vw 5vw 0vw 5vw;
      }

      .ruler__increments {
         width: 90vw;
      }

      .ruler__name {
         font-size: 2.8rem;
      }

      /******* X.3 MOTIF *******/

      .landingpage__motif {
         width: 100%;
         left: 50%;
         transform: translateX(0%);
      }

      .landingpage__subtitle {
         font-size: 4vw;
      }

      .landingpage__title {
         font-size: 14vw;
      }
   }
</style>