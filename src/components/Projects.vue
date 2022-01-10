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

      <div class="projects__thumbnails"></div>

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
               position: '1',
               },
            ]
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
      width: 11rem;
   }

   .decoration__object--8 {
      width: 17rem;
   }

   .decoration__object--9 {
      width: 24rem;
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



   
   /* 4.3 Smaller screens, Small pads, mobile, etc. */

   @media screen and (max-width: 997px) {

   }

</style>