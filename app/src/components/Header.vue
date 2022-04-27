<template>
   <div class="header">
      <div class="header__nav-tool"> 
         <div class="header__toolwrapper">
            <button class="header__toolbutton" @click="toTop">Back to top</button>

            <div class="header__tooldivider"></div>

            <router-link class="header__toolbutton" :to="`/`"> Home</router-link>
         </div>
      </div>

      <button class="header__burger-button" @click="toggleMenu">
         <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="12" width="19" height="2"/>
            <rect y="6" width="19" height="2"/>
            <rect width="19" height="2"/>
         </svg>
      </button>
   </div>

   <HeaderMenu v-if="menuToggled === true" :toggleMenu="toggleMenu" />
</template>

<script>
import HeaderMenu from './HeaderMenu.vue'

export default {
   components: {
      HeaderMenu
   },

   data() {
      return {
         menuToggled: false,
      }
   },

   methods: {
      toggleMenu() {
         this.menuToggled = !this.menuToggled;
      },

      toTop() {
         window.scrollTo({
            top: 0,
            behavior: "smooth"
         });
      }
   }
}
</script>

<style>
   .header {
      padding: 1rem 3.3% 0.1rem 3.3%;
   }

   /* nav tool */

   .header__nav-tool {
      width: 7%;
      position: fixed;
      left: 0;
      margin-top: 1rem;
      display: flex;
      justify-content: center;
   }

   .header__toolwrapper {
      transform: rotate(-90deg);
      text-align: end;
      white-space: nowrap;
   }

   .header__toolbutton {
      width: auto;
      background: none;
      border: none;
      color: var(--highlight-color);
      font-size: var(--font-size-data);
      font-style: italic;
      text-decoration: none;
   }

   .header__toolbutton:hover {
      color: var(--secondary-color);
      transition: 0.2s;
   }

   .header__tooldivider {
      border-top: var(--increment-style);
      margin: 0.3rem 0 0.15rem 0;
   }

   /* Header buttons */

   .header__button {
      color: var(--secondary-color);
      font-size: var(--font-size-body);
      font-style: italic;
      font-family: var(--font-family);
      text-transform: uppercase;
      background: var(--primary-color);
      border: none;
   }

   .header__button:hover {
      color: var(--highlight-color);
   }

   /* burger burron */

   .header__burger-button {
      right: 0;
      margin-right: 3.25vw;
      position: fixed;
      background: none;
      border: none;
      cursor: pointer;
      z-index: 26;
   }

   .header__burger-button rect {
      fill: var(--highlight-color)
   }

   .header__burger-button:hover rect {
      fill: var(--secondary-color);
      transition: 0.2s;
   }



   @media screen and (max-device-width: 767px) and (-webkit-min-device-pixel-ratio: 2) {
      .header {
         padding: 2rem;
      }

      .header__nav-tool {
         display: none;
      }

      .header__burger-button {
         top: 4.8vh;
      }

      .header__burger-button svg {
         width:4rem;
         height: 4rem;
      }
   }
</style>