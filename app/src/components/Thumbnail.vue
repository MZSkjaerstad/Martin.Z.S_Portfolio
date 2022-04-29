<template>
   <div class="thumbnail" v-for="thumbnail in thumbnails">
      <div :class="`thumbnail__increment thumbnail__increment-position--${thumbnail.position}`">
         <div class="thumbnail__decoration"></div>

         <div class="thumbnail__counter">00{{ thumbnails.indexOf(thumbnail) + 1 }}</div>
      </div>

      <router-link class="thumbnail__link" :to="`/${thumbnail.slug}`">
         <div class="thumbnail__display">
            <div class="thumbnail__ruler">
               <div class="thumbnail__ruler-increment">
                  <div class="thumbnail__ruler-object--small"></div>
               </div>

               <div class="thumbnail__ruler-increment">
                  <div class="thumbnail__ruler-object--small"></div>
               </div>

               <div class="thumbnail__ruler-increment">
                  <div class="thumbnail__ruler-object--small"></div>
               </div>

               <div class="thumbnail__ruler-increment">
                  <div class="thumbnail__ruler-object--medium"></div>
               </div>

               <div class="thumbnail__ruler-increment">
                  <div class="thumbnail__ruler-object--small"></div>
               </div>

               <div class="thumbnail__ruler-increment">
                  <div class="thumbnail__ruler-object--small"></div>
               </div>

               <div class="thumbnail__ruler-increment">
                  <div class="thumbnail__ruler-object--small"></div>
               </div>
            </div>

            <div class="thumbnail__content">
               <div class="thumbnail__info-container">
                  <div class="thumbnail__info">
                     <div class="thumbnail__essentials">
                        <div class="thumbnail__year"> {{ thumbnail.year }} </div>

                        <div class="thumbnail__tags-container">
                           <div class="thumbnail__tags" v-for="tag in thumbnail.tags"> {{ tag }} </div>
                        </div>
                     </div>
                     <div class="thumbnail__description"> {{ thumbnail.description }} </div>
                  </div>
               </div>

               <div class="thumbnail__hook">
                  <div :class="`thumbnail__title thumbnail__title-position--${thumbnail.position}`"> {{ thumbnail.title }} </div>

                  <div class="thumbnail__image"></div>
               </div>
            </div>
         </div>
      </router-link>
   </div>
</template>

<script>
export default {
   computed: {
      thumbnails() {
         return this.$store.getters.getThumbnails;
      }
   },
}
</script>

<style>
   /* Thumbnail ruler */
   .thumbnail__increment {
      display: flex;
      position: relative;
   }

   .thumbnail__increment-position--1 {
      width: 24rem;
   }

   .thumbnail__increment-position--2 {
      width: 42vw;
   }

   .thumbnail__increment-position--3 {
      width: 54vw;
   }

   .thumbnail__increment-position--4 {
      width: 62vw;
   }

   .thumbnail__increment-position--5 {
      width: 75vw;
   }

   .thumbnail__decoration {
      width: 100%;
      border-top: var(--increment-style);
   }

   .thumbnail__counter {
      color: var(--highlight-color);
      font-size: var(--font-size-data);
      transform: translateY(-50%);
      left: 100%;
      margin-left: 0.8rem;
      position: absolute;
   }
   
   /* 3.3 Link */

   .thumbnail__link {
      text-decoration: none !important;
   }

   .thumbnail__display {
      display: flex;
      padding-top: 5vh;
      width: 100%;
      cursor: pointer;
   }

   /* 3.4 Ruler */

   .thumbnail__ruler-increment {
      height: 0px;
      margin-bottom: 5vh;
   }

   .thumbnail__ruler-object--small {
      width: 0.6rem;
      border-top: var(--increment-style);
   }

   .thumbnail__ruler-object--medium {
      width: 2rem;
      border-top: var(--increment-style);
   }

   /* 3.5 Content */

   .thumbnail__content {
      display: flex;
   }

   /* 3.6 Info */

   .thumbnail__info-container {
      width: 14rem;
      padding: 0vh 0vh 5vh 0.8rem;
   }

   .thumbnail__info {
      height: 100%;
      opacity: 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
   }

   .thumbnail__year {
      font-size: 4.2vh;
      font-weight: bold;
      font-style: italic;
      text-decoration: none;
      transform: translateY(-0.7rem);
      color: var(--primary-color);
      -webkit-text-stroke: var(--title-style);
   }

   .thumbnail__tags {
      width: auto;
      display: inline-block;
      color: var(--highlight-color);
      font-size: var(--font-size-data);
      border: var(--increment-style);
      border-radius: 15px;
      padding: 0.09rem 0.4rem 0.1rem 0.4rem;
      margin: 0.2em;
   }

   .thumbnail__description {
      max-height: 15vh;
      overflow: hidden;
      color: var(--secondary-color);
      font-size: var(--font-size-thumbnail);
      font-weight: lighter;
      transform: translateY(0.3rem);
   }

   /* 3.7 Hook */

   .thumbnail__title {
      width: 1rem;
      padding-top: 3vh;
      font-size: 8vh;
      font-weight: bold;
      font-style: italic;
      text-transform: uppercase;
      transform: translateY(-2.5vh);
      color: var(--primary-color);
      -webkit-text-stroke: var(--title-style);
   }

   .thumbnail__title-position--1 {
      margin-left: 2rem;
   }

   .thumbnail__title-position--2 {
      margin-left: 17vw;
   }

   .thumbnail__title-position--3 {
      margin-left: 29vw;
   }

   .thumbnail__title-position--4 {
      margin-left: 43vw;
   }

   .thumbnail__title-position--5 {
      margin-left: 26vw;
   }

   /* 3.6 Hover */

   .thumbnail__display:hover .thumbnail__info {
      transform: translateX(0.6vw);
      opacity: 100;
      transition: 0.8s;
   }

   .thumbnail__display:hover .thumbnail__hook {
      transform: translateX(2.5vw);
      transition: 0.8s;
   }

   .thumbnail__display:hover .thumbnail__title {
      color: var(--highlight-color);
      -webkit-text-stroke: 0px;
      transition: 0.8s;
   }

   /* Pad responsive */

   @media screen and (min-device-width: 768px) and (max-device-width: 1090px) and (-webkit-min-device-pixel-ratio: 2) {
      .thumbnail__increment {
         width: 24rem;
      }

      .thumbnail__title-position--2 {
         margin-left: 2rem;
      }

      .thumbnail__title-position--3 {
         margin-left: 2rem;
      }

      .thumbnail__title-position--4 {
         margin-left: 2rem;
      }

      .thumbnail__title-position--5 {
         margin-left: 2rem;
      }
   }

   /* Mobile responsive */

   @media screen and (max-device-width: 767px) and (-webkit-min-device-pixel-ratio: 2) {

      /* Ruler */

      .thumbnail__increment {
         width: 94%;
         flex-direction: column;
      }

      /* Content */

      .thumbnail__content {
         flex-direction: column-reverse;
      }

      .thumbnail__info {
         opacity: 100;
      }

      .thumbnail__essentials {
         display: flex;
         justify-content: space-between;
         align-items: flex-end;
         width: 86vw;
         padding: 0rem 4rem;
         position: bottom;
      }

      .thumbnail__year {
         height: 100%;
         display: flex;
         align-items: flex-end;
         transform: translateY(1rem);
         -webkit-text-stroke: var(--highlight-color) 3px;
      }

      .thumbnail__tags-container {
         height: 8.5rem;
         padding-left: 2rem;
         display: flex;
         justify-content: flex-end;
         align-items: flex-start;
         flex-wrap: wrap-reverse;
      }

      .thumbnail__tags {
         border: solid var(--highlight-color) 3px;
         transform: translateY(0.6rem);
      }

      .thumbnail__description {
         display: none;
         position: bottom;
      }

      .thumbnail__title {
         color: var(--highlight-color);
         -webkit-text-stroke: 0;
         transform: translateY(-5vh);
         font-size: 6vh;
         padding: 0 3rem;
         margin-left: 0;
      }

      /* Mobile Hover Cancelation */

      .thumbnail__display:hover .thumbnail__info {
      transform: translateX(none);
      opacity: none;
      transition: none;
      }

      .thumbnail__display:hover .thumbnail__hook {
         transform: translateX(none);
         transition: none;
      }

      .thumbnail__display:hover .thumbnail__title {
         color: none;
         -webkit-text-stroke: none;
         transition: none;
      }
   }
</style>