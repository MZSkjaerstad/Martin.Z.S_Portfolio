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
         <Thumbnail />
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
            <div/>
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
import Thumbnail from '../components/Thumbnail.vue'
   export default {
      components: {
         Thumbnail
      },
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
      border-top: var(--increment-style);
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
   
   @media screen and (max-device-width: 767px) and (-webkit-min-device-pixel-ratio: 2) {

      /* Decoration */

      .decoration__object--1 {
      width: 2.5vw;
      }

      .decoration__object--2 {
         width: 4vw;
      }

      .decoration__object--3 {
         width: 7vw;
      }

      .decoration__object--4 {
         width: 10vw;
      }

      .decoration__object--5 {
         width: 15vw;
      }

      .decoration__object--6 {
         width: 22vw;
      }

      .decoration__object--7 {
         width: 35vw;
      }

      .decoration__object--8 {
         width: 50vw;
      }

      .decoration__object--9 {
         width: 70vw;
      }      
      
      /* Projects */

      .projects {
         padding: 0vw 5vw 0vw 5vw;
      }
   }
</style>