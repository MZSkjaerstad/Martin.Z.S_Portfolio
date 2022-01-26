<template>
   <div class="projects">
      <div class="projects__decoration">
         <div class="decoration__increment">
            <div class="decoration__object decoration__object--1"></div>
         </div>

         <div class="decoration__increment">
            <div class="decoration__object decoration__object--2"></div>
         </div>

         <div class="decoration__increment">
            <div class="decoration__object decoration__object--3"></div>
         </div>

         <div class="decoration__increment">
            <div class="decoration__object decoration__object--4"></div>
         </div>

         <div class="decoration__increment">
            <div class="decoration__object decoration__object--5"></div>
         </div>

         <div class="decoration__increment">
            <div class="decoration__object decoration__object--6"></div>
         </div>

         <div class="decoration__increment">
            <div class="decoration__object decoration__object--7"></div>
         </div>

         <div class="decoration__increment">
            <div class="decoration__object decoration__object--8"></div>
         </div>

         <div class="decoration__increment">
            <div class="decoration__object decoration__object--9"></div>
         </div>
      </div>

      <div class="projects__thumbnails">
         <div class="thumbnail" v-for="thumbnail in thumbnails">
            <div :class="`thumbnail__increment thumbnail__increment-position--${thumbnail.position}`">
               <div class="thumbnail__decoration"></div>

               <div class="thumbnail__counter">00{{ thumbnails.indexOf(thumbnail) + 1 }}</div>
            </div>

            <div class="thumbnail__display" @click="">
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
                        <div class="">
                           <div class="thumbnail__year"> {{ thumbnail.year }} </div>

                           <div class="thumbnail__tags" v-for="tag in thumbnail.tags" >{{ thumbnail.tags.tag }} </div>
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
         </div>
      </div>

      <div class="projects__decoration">
         <div class="decoration__increment">
            <div class="decoration__object decoration__object--9"></div>
         </div>

         <div class="decoration__increment">
            <div class="decoration__object decoration__object--8"></div>
         </div>

         <div class="decoration__increment">
            <div class="decoration__object decoration__object--7"></div>
         </div>

         <div class="decoration__increment">
            <div class="decoration__object decoration__object--6"></div>
         </div>

         <div class="decoration__increment">
            <div class="decoration__object decoration__object--5"></div>
         </div>

         <div class="decoration__increment">
            <div class="decoration__object decoration__object--4"></div>
         </div>

         <div class="decoration__increment decoration__logo-container">
            <div class="decoration__object decoration__object--3"></div>
            <img class="decoration__logo" src="/visual_identity/vector/logo_w_text.svg" alt="Martin.Z.S logo">
            <div></div>
         </div>

         <div class="decoration__increment">
            <div class="decoration__object decoration__object--2"></div>
         </div>

         <div class="decoration__increment">
            <div class="decoration__object decoration__object--1"></div>
         </div>
      </div>
   </div>
</template>

<script>
   export default {
      data() {
         return {
            thumbnails: [
               {
               title: 'name project number.1',
               link: 'link',
               image: 'imagelink',
               year: '2014',
               tags: ['tag1', 'tag2', 'tag3'],
               description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
               position: '1',
               },
               {
               title: 'name project number.2',
               link: 'link',
               image: 'imagelink',
               year: '2016',
               tags: ['tag1', 'tag2', 'tag3'],
               description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
               position: '2',
               },
               {
               title: 'name project number.3',
               link: 'link',
               image: 'imagelink',
               year: '2012',
               tags: ['tag1', 'tag2', 'tag3'],
               description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
               position: '3',
               },
               {
               title: 'name project number.4',
               link: 'link',
               image: 'imagelink',
               year: '2020',
               tags: ['tag1', 'tag2', 'tag3'],
               description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
               position: '1',
               },
               
            ],
         }
      }
   }
</script>

<style>

   /******* 1.1 GENERAL *******/

   .projects {
      width: 100%;
      height: auto;
   }

   /******* 2.1 DECORATION *******/


   .projects__decoration {
      position: relative;
   }

   .decoration__increment {
      width: 100%;
      height: 0px;
      margin-bottom: 5vh;
   }

   .decoration__object {
      border-top: solid var(--foreground) 1px;
   }

   .decoration__object--1 {
      width: 0.6rem;
   }

   .decoration__object--2 {
      width: 0.8rem;
   }

   .decoration__object--3 {
      width: 1.4rem;
   }

   .decoration__object--4 {
      width: 2.2rem;
   }

   .decoration__object--5 {
      width: 4rem;
   }

   .decoration__object--6 {
      width: 6rem;
   }

   .decoration__object--7 {
      width: 10rem;
   }

   .decoration__object--8 {
      width: 14rem;
   }

   .decoration__object--9 {
      width: 19rem;
   }

   .decoration__logo-container {
      display: flex;
      justify-content: space-between;
   }

   .decoration__logo {
      padding-top: 1vh;
      height: 10vh;
      width: auto;
   }

   /******* 3.1 THUMBNAILS *******/

   .thumbnail {}

   /* 3.2 Increment */

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
      border-top: solid var(--foreground) 1px;
   }

   .thumbnail__counter {
      color: var(--foreground);
      font-size: 0.8rem;
      transform: translateY(-50%);
      left: 100%;
      margin-left: 0.8rem;
      position: absolute;
   }
   
   /* 3.3 Display */

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
      border-top: solid var(--foreground) 1px;
   }

   .thumbnail__ruler-object--medium {
      width: 2rem;
      border-top: solid var(--foreground) 1px;
   }

   /* 3.5 Content */

   .thumbnail__content {
      display: flex;
   }

   /* 3.6 Info */

   .thumbnail__info-container {
      width: 14rem;
      height: 100%;
      padding: 0vh 0vh 5vh 0.8rem;
   }

   .thumbnail__info {
      width: 100%;
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
      transform: translateY(-0.7rem);
      color: var(--background);
      -webkit-text-stroke: 1px var(--foreground);
   }

   .thumbnail__description {
      font-size: 0.9rem;
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
      color: var(--background);
      -webkit-text-stroke: 1px var(--foreground);
   }

   .thumbnail__title-position--1 {
      margin-left: 1rem;
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
      color: var(--foreground);
      -webkit-text-stroke: 0px;
      transition: 0.8s;
   }

   /* 4.1 Smaller screens, Small pads, mobile, etc. */

   @media screen and (max-width: 997px) {

   }

</style>