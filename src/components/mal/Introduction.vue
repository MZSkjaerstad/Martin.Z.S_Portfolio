<template>
   <div class="introduction">
      <div class="introduction__hook">
         <figure class="introduction__figure">
            <img class="introduction__image" :src="`/project_assets/${introductionData.image}`">
         </figure>

         <div class="introduction__title">
            {{ introductionData.title }}
         </div>
      </div>

      <div class="introduction__content">
         <div class="introduction__ruler">
            <div class="introduction__increment">
               <div class="introduction__increment--data">Project</div>
               <div class="introduction__increment--1"></div>
            </div>

            <div class="introduction__increment">
               <div class="introduction__increment--2"></div>
            </div>

            <div class="introduction__increment">
               <div class="introduction__increment--3"></div>
            </div>

            <div class="introduction__increment">
               <div class="introduction__increment--4"></div>
            </div>

            <div class="introduction__increment">
               <div class="introduction__increment--5"></div>
            </div>

            <div class="introduction__increment">
               <div class="introduction__increment--6"></div>
            </div>

            <div class="introduction__increment">
               <div class="introduction__increment--7"></div>
            </div>

            <div class="introduction__increment">
               <div class="introduction__increment--8"></div>
            </div>
         </div>

         <div class="introduction__information">
            <div class="introduction__text">
               <div class="introduction__subtitle">
                  {{ introductionData.subtitle }}
               </div>

               <div class="introduction__description">
                  {{ introductionData.description }}
               </div>
            </div>

            <div class="introduction__details">
               <div class="introduction__year">
                  {{ introductionData.year }}
               </div>

               <div class="introduction__tagscontainer">
                  <div class="introduction__tags" v-for="tag in introductionData.tags">
                     {{ tag }}
                  </div>
               </div>
            </div>
         </div>

         <div class="introduction__overviewcontainer">
            <div class="introduction__overview" v-for="content in introductionData.contentOverview">
               <figure class="introduction__overview-figure">
                  <img class="introduction__overview-image" :src="`/project_assets/${content.image}`">
               </figure>
               
               <div class="introduction__pitch">
                  "{{ content.pitch }}"
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   props: {
      introductionData: {
         type: Object
      }
   },
}
</script>

<style>

   .introduction {
      width: 100%;
      height: 100%;
      padding: 0rem 7% 0rem 7%;
   }

   /***** 1.0 Hook *****/

   .introduction__hook {
      width: 100%;
      height: 60%;
      padding-bottom: 2rem;
   }

   .introduction__figure {
      width: 54%;
      height: 100%;
   }

   .introduction__image {
      width: 100%;
      height: 100%;
      object-fit: cover;
   }

   .introduction__title {
      width: 16rem;
      height: auto;
      position: absolute;
      font-size: 10vh;
      font-weight: bold;
      font-style: italic;
      text-transform: uppercase;
      color: #15233bbb;
      -webkit-text-stroke: var(--title-style);
      transform: translateX(30.5vw);
      bottom: 42%;
      left: 7%;
   }

   /***** 2.0 Content *****/

   .introduction__content {
      width: 100%;
      display: flex;
   }

   /* 2.1 Ruler */

   .introduction__ruler {
      width: 33%;
      height: 100%;
   }

   .introduction__increment {
      width: 100%;
      height: 0;
      margin-bottom: 5vh;
      display: flex;
      justify-content: flex-end;
   }

   .introduction__increment--1 {
      width: 85%;
      border-top: var(--increment-style);
   }

   .introduction__increment--2 {
      width: 55%;
      border-top: var(--increment-style);
   }

   .introduction__increment--3 {
      width: 35%;
      border-top: var(--increment-style);
   }

   .introduction__increment--4 {
      width: 22%;
      border-top: var(--increment-style);
   }

   .introduction__increment--5 {
      width: 14%;
      border-top: var(--increment-style);
   }

   .introduction__increment--6 {
      width: 10%;
      border-top: var(--increment-style);
   }

   .introduction__increment--7 {
      width: 7%;
      border-top: var(--increment-style);
   }

   .introduction__increment--8 {
      width: 4%;
      border-top: var(--increment-style);
   }

   .introduction__increment--data {
      color: var(--highlight-color);
      font-size: var(--font-size-data);
      margin-right: 0.8rem;
      transform: translateY(-0.5rem);
   }

   /* 2.2 Information */

   .introduction__information {
      width: 33%;
      height: 35vh;
      min-width: 21rem;
      padding: 0 2rem 0 2rem;
      border-right: var(--increment-style);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
   }

   .introduction__text {
      transform: translateY(-0.5rem);
   }

   .introduction__subtitle {
      font-size: 1.6rem;
      font-style: italic;
      margin-bottom: 0.8rem;
   }

   .introduction__description {
      overflow-y: hidden;   
   }

   .introduction__year {
      font-size: 2rem;
      font-weight: bold;
      font-style: italic;
      text-decoration: none;
      color: var(--primary-color);
      -webkit-text-stroke: var(--title-style);
   }

   .introduction__tagscontainer {
      transform: translateX(-0.5rem) translateY(0.5rem);
   }

   .introduction__tags {
      width: auto;
      display: inline-block;
      color: var(--highlight-color);
      font-size: var(--font-size-data);
      border: var(--increment-style);
      border-radius: 15px;
      padding: 0.09rem 0.4rem 0.1rem 0.4rem;
      margin: 0.2em;
   }

   /* 2.3 Overview */

   .introduction__overviewcontainer {
      width: 33%;
      display: flex;
      flex-wrap: wrap;
      padding: 0rem 1rem;
   }

   .introduction__overview {
      margin-right: 1rem; 
   }

   .introduction__overview-figure {
      width: 6rem;
      height: 6rem;
      border: var(--increment-style);
   }

   .introduction__overview-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
   }

   .introduction__pitch {
      padding: 0.4rem 0rem;
      font-style: italic;
   }



@media screen and (max-device-width: 767px) and (-webkit-min-device-pixel-ratio: 2) {

   .introduction {
      padding: rem 7% 2rem 7%;
   }

   /* Hook */

   .introduction__hook {
      height: 40%;
   }

   .introduction__figure {
      width: 100%;
   }

   .introduction__title {
      font-size: 14vw;
      transform: translateY(0);
      bottom: 60%;
      left: 11%;
   }

   /* Content */

   .introduction__content {
      height: 60%;
      flex-direction: column;
   }

   .introduction__ruler {
      display: none;
   }

   .introduction__information {
      width: 100%;
      border-right: none;
      justify-content: flex-start;
   }

   .introduction__text {
      transform: translateY(1rem);
   }

   .introduction__subtitle {
      font-size: 4rem;
      margin-bottom: 1.6rem;
   }

   .introduction__description {
      margin-bottom: 2.4rem;
   }

   .introduction__year {
      font-size: 6rem;
   }

   .introduction__overviewcontainer {
      width: 100%;
      padding: 6rem 2rem 4rem 2rem;
      justify-content: space-between;
      align-items: center;
   }

   .introduction__overview-figure {
      width: 12rem;
      height: 12rem;
      margin-right: none;
   }

   .introduction__pitch {
      padding: 1.6rem 0rem;
   }
}

</style>