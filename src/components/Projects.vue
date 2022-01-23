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

               <div class="thumbnail__content"></div>
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
               name: 'name',
               link: 'link',
               image: 'imagelink',
               year: '2014',
               tags: ['tag1', 'tag2', 'tag3'],
               description: 'description',
               position: '1',
               },
               {
               name: 'name',
               link: 'link',
               image: 'imagelink',
               year: '2014',
               tags: ['tag1', 'tag2', 'tag3'],
               description: 'description',
               position: '2',
               },
               {
               name: 'name',
               link: 'link',
               image: 'imagelink',
               year: '2014',
               tags: ['tag1', 'tag2', 'tag3'],
               description: 'description',
               position: '4',
               },
               {
               name: 'name',
               link: 'link',
               image: 'imagelink',
               year: '2014',
               tags: ['tag1', 'tag2', 'tag3'],
               description: 'description',
               position: '3',
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
      height: 10vh;
      width: auto;
   }

   /******* 3.1 THUMBNAILS *******/

   .thumbnail {
      margin-bottom: 5vh;
   }

   /* 3.2 Increment */

   .thumbnail__increment {
      display: flex;
      position: relative;
   }

   .thumbnail__increment-position--1 {
      width: 24rem;
   }

   .thumbnail__increment-position--2 {
      width: 36rem;
   }

   .thumbnail__increment-position--3 {
      width: 48rem;
   }

   .thumbnail__increment-position--4 {
      width: 60rem;
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
      padding-top: 5vh;
      width: 100%;
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

   /* 4.3 Smaller screens, Small pads, mobile, etc. */

   @media screen and (max-width: 997px) {

   }

</style>