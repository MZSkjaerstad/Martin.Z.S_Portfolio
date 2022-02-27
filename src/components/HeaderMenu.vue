<template>
   <div class="header__menu">
      <button class="header__x-button" @click="toggleMenu">
         <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1.4895" y="0.575439" width="19" height="2" transform="rotate(45 1.4895 0.575439)" fill="#E06339"/>
            <rect x="14.9246" y="1.98962" width="19" height="2" transform="rotate(135 14.9246 1.98962)" fill="#E06339"/>
         </svg>
      </button>

      <div class="header__content">
         Some cool shit's on its way! Stay tuned...
      </div>
   </div>
</template>

<script>
export default {
   props: {
      toggleMenu: Function
   }
}
</script>

<style>
   .header__menu {
      width: 30rem;
      height: 110vh;
      position: fixed;
      background: var(--primary-color);
      border-left: var(--increment-style);
      padding: 1rem 3.2rem;
      top: 0;
      right: 0;
      z-index: 26;
   }

   .header__x-button {
      position: absolute;
      right: 0;
      padding-right: 3.25vw;
      background: none;
      border: none;
      cursor: pointer;
      display: flex;
      justify-content: flex-end;
   }

   .header__x-button rect {
      fill: var(--highlight-color)
   }

   .header__x-button:hover rect {
      fill: var(--secondary-color);
      transition: 0.2s;
   }

   @media screen and (max-device-width: 767px) and (-webkit-min-device-pixel-ratio: 2) {
      .header__menu {
         width: 100vw;
         border: none;
      }

      .header__x-button {
         top: 4.8vh;
      }

      .header__x-button svg {
         width: 4rem;
         height: 4rem;
      }
   }
</style>