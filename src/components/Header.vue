<template>
   <div class="header">
      <figure class="header__logowrapper">
         <img class="header__logo" src="/visual_identity/vector/logo_w_text.svg" alt="Martin.Z.S logo">

         <figcaption class="header__logo-fig">Martin Z. S. logo</figcaption>
      </figure>

      <div class="header__desktop-menu">
         <button class="header__button">About me</button>


      </div>
   </div>
</template>

<script>
export default {
   
}
</script>

<style>
   .header {
      display: flex;
      justify-content: flex-end;
      padding: 1rem 1rem;
   }

   /* Header Logo */

   .header__logowrapper {
      position: absolute;
      width: 8rem;
      height: auto;
      background: var(--primary-color);
      padding: 0rem 1rem 0.7rem 1rem;
      border-radius: 0px 0px 5px 5px;
      left: 50%;
      transform: translateX(-4rem);
      z-index: 14;
   }

   .header__logo {
      width: 100%;
      height: auto;
   }

   .header__logo-fig {
      display: none;
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

   @media screen and (max-device-width: 767px) and (-webkit-min-device-pixel-ratio: 2) {

   }
</style>