<template>
   <div class="header__menu">
      <button class="header__x-button" @click="toggleMenu">
         <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1.4895" y="0.575439" width="19" height="2" transform="rotate(45 1.4895 0.575439)" fill="#E06339"/>
            <rect x="14.9246" y="1.98962" width="19" height="2" transform="rotate(135 14.9246 1.98962)" fill="#E06339"/>
         </svg>
      </button>

      <div class="header__content">
         <div class="header__home">
            <div class="header__title">
               Navigation
            </div>

            <router-link class="header__link" :to="'/'">
               <div class="header__item">
                  <div class="header__item-number">
                     000
                  </div>

                  <div class="header__item-link">
                     home
                  </div>
               </div>
            </router-link>
         </div>
         
         <div class="header__projects">
            <div class="header__title">
               Projects
            </div>

            <router-link class="header__link" :to="`/${thumbnail.slug}`"  v-for="thumbnail in thumbnails">
               <div class="Header__project-link  header__item">
                  <div class="header__item-number"> 00{{ thumbnails.indexOf(thumbnail) + 1 }} </div>

                  <div class="header__item-link"> {{ thumbnail.navTitle }} </div>
               </div>
            </router-link>
         </div>

         <div class="header__about">
            <div class="header__title">
               About
            </div>

           <div class="header__item">
              <div class="header__item-number"> 00{{ thumbnails.length + 1 }}</div>

               <div class="header__item-link">About me</div>
           </div>

           <div class="header__contact">
              <div class="header__socials">
                 <a class="header__socials-link" href="https://www.linkedin.com/in/martin-zupfer-skj%C3%A6rstad-6257681a3" target="_blank">LinkedIn</a>

                 <a class="header__socials-link" href="https://www.instagram.com/martin.z.s/" target="_blank">Instagram</a>

                 <a class="header__socials-link" href="https://github.com/MZSkjaerstad" target="_blank">Github</a>
              </div>

              <div class="header__email">
                 Work together? Let me know in an <a href="mailto:martskjae@hotmail.no" class="header__email-link">email</a>.
               </div>
           </div>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   props: {
      toggleMenu: Function
   },

   computed: {
      thumbnails() {
         return this.$store.getters.getThumbnails;
      }
   },
}

</script>

<style>
   .header__menu {
      width: 25rem;
      height: 100vh;
      position: fixed;
      background: var(--primary-color);
      border-left: var(--increment-style);
      padding: 1rem 3.2rem 1rem 0rem;
      top: 0;
      right: 0;
      z-index: 26;
   }

   /* X button */

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

   /* Content */

   .header__content {
      height: 100%;
      padding: 3rem 0rem 3rem 3rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
   }

   .header__title {
      color: var(--highlight-color);
      font-size: var(--font-size-data);
      font-style: italic;
      margin-bottom: 0.8rem;
   }

   .header__link {
      text-decoration: none;
   }

   .header__item {
      display: flex;
      align-items: center;
   }

   .header__item-link {
      font-size: 2.5rem;
      font-weight: bold;
      font-style: italic;
      text-transform: uppercase;
      color: var(--primary-color);
      -webkit-text-stroke: var(--title-style);
      padding: 0.3rem 0.9rem;
   }

   .header__item-number {
      color: var(--highlight-color);
      font-size: var(--font-size-data);
      margin-right: 2rem;
   }

   .header__item:hover .header__item-link {
      color: var(--highlight-color);
      font-size: 2.44rem;
      -webkit-text-stroke: none;
      border: var(--increment-style);
      box-sizing: border-box;
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
      transition: 0.2s;
   }

   /* Contact */

   .header__contact {
      padding-top: 1.4rem;
   }

   .header__socials {
      display: flex;
   }

   .header__socials-link {
      color: var(--highlight-color);
      font-size: var(--font-size-body);
      font-style: italic;
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 0.05rem;
      margin-right: 1rem;
   }

   .header__socials-link:hover {
      color: var(--secondary-color);
   }

   .header__email {
      margin-top: 0.6rem;
      font-size: var(--font-size-data);
   }

   .header__email-link {
      color: var(--highlight-color);
      font-style: italic;
      text-decoration: none;
   }

   .header__email-link:hover {
      color: var(--highlight-color);
      font-style: italic;
      text-decoration: underline;
   }

   @media screen and (max-device-width: 767px) and (-webkit-min-device-pixel-ratio: 2) {
      .header__menu {
         width: 100vw;
         border: none;
         padding: 12rem 0rem 16rem 0rem;
      }

      .header__x-button {
         top: 4.8vh;
      }

      .header__x-button svg {
         width: 4rem;
         height: 4rem;
      }

      .header__content {
         align-items: center;
         padding: 0;
      }

      .header__title {
         text-align: center;
      }

      .header__item-link {
         font-size: 6.5rem;
      }

      .header__item:hover .header__item-link {
      color: var(--highlight-color);
      font-size: 6.5rem;
      -webkit-text-stroke: none;
      border: none;
      transition: 0.2s;
      }

      .header__contact {
         padding-top: 3rem;
      }

      .header__socials {
         width: 100%;
         justify-content: space-between;
      }
      .header__socials-link {
         margin: 0;
      }

      .header__email {
         margin-top: 1.2rem;
      }
   }
</style>