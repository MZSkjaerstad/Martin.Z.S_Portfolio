<template>
   <section>
      <div class="landingpage__ruler">
         <div class="landingpage__increments ruler__data">
            <div>
               <div class="landingpage__increment--long"></div>

               <div class="landingpage__increment-info">000</div>
            </div>
         </div>

         <div class="landingpage__increments">
            <div class="landingpage__increment--small"></div>

            <div class="landingpage__landing">
               <div class="landingpage__header">
                 <h1 class="landingpage__header--upper">Digital</h1>

                 <h1 class="landingpage__header--lower">Designer</h1>
               </div>

               <div class="landingpage__about">
                  <div class="landingpage__imageframe">
                    <img class="landingpage__logo" src="/visual_identity/vector/logo_black.svg" alt="MartinZ.S. logo.">

                    <img class="landingpage__image" src="/visual_identity/image/landing_banner.png" alt="">
                  </div>

                  <div class="landingpage__intro">
                    Martin Zupfer Skjærstad
                  </div>

                  <div class="landingpage__socials">
                    <a class="landingpage__link" v-for="link in socials" :href="link.url" target="_blank" :aria-label="`Open ${link.linktype}`">
                      <img class="landingpage__link-icon" :src="link.icon" alt="">
                    </a>
                  </div>
               </div>
            </div>
         </div>

         <div class="landingpage__increments">
            <div class="landingpage__increment--small"></div>
         </div>

         <div class="landingpage__increments">
            <div class="landingpage__increment--small"></div>
         </div> 

         <div class="landingpage__increments">
            <div class="decoration__object decoration__object--1"></div>
         </div>

         <div class="landingpage__increments">
            <div class="decoration__object decoration__object--2"></div>
         </div>

         <div class="landingpage__increments">
            <div class="decoration__object decoration__object--3"></div>
         </div>

         <div class="landingpage__increments">
            <div class="decoration__object decoration__object--4"></div>
         </div>

         <div class="landingpage__increments">
            <div class="decoration__object decoration__object--5"></div>
         </div>

         <div class="landingpage__increments">
            <div class="decoration__object decoration__object--6"></div>
         </div>

         <div class="landingpage__increments">
            <div class="decoration__object decoration__object--7"></div>
         </div>

         <div class="landingpage__increments">
            <div class="decoration__object decoration__object--8"></div>
         </div>

         <div class="landingpage__increments">
            <div class="decoration__object decoration__object--9"></div>
         </div>
      </div>
   </section>
</template>

<script>
export default {
  props: {
    socials: Array,
  }
}
</script>

<style>
  .landingpage__ruler {
    z-index: 13;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    mix-blend-mode: difference;
  }

  .landingpage__landing {
    position: relative;
  }

  /* 1.1 Header */

  .landingpage__header {
    padding-left: 10vw;
  }

  .landingpage__header--upper {
    z-index: 20;
  }

  .laningpage__header--lower {
    z-index: 20;
  }

  .landingpage__intro {
    text-align: end;
    padding: 2vh 0 0 30%;
    font-size: 3.21vh;
    font-weight: 600;
    font-style: italic;
    text-transform: uppercase;
    mix-blend-mode: difference;
  }

  /* 1.2 About */

  .landingpage__about {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    padding-right: 2vw;
    height: 60vh;
  }

  .landingpage__imageframe {
    position: relative;
    height: 40vh;
    z-index: -1;
  }

  .landingpage__logo {
    position: absolute;
    height: 25%;
    top: 7%;
    right: 8%;
  }

  .landingpage__image {
    height: 100%;
    z-index: -1;
    mix-blend-mode: none;
  }

  .landingpage__socials {
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap-reverse;
    padding: var(--spacing-padding) 0;
  }

  .landingpage__link {
    height: 6vh;
    margin-left: var(--spacing-padding);
    position: relative;
    z-index: 10;
    border: var(--increment-style);
    border-radius: 15%;
    transition: 0.3s;
  }

  .landingpage__link-icon {
    height: 100%;
    z-index: 10;
    mix-blend-mode: difference;
  }

  .landingpage__link:hover {
    background-color: var(--secondary-color);
    transition: 0.3s;
    padding: 0.2rem;
  }

  /* 1.3 Increments */

  .landingpage__increments {
    width: 85vw;
    height: 0px;
    margin-bottom: 5vh;
  }

  .landingpage__increment--small {
    width: var(--increment-small);
    border-top: var(--increment-style);
  }

  .landingpage__increment--medium {
    width: var(--increment-medium);
    border-top: var(--increment-style);
  }

  .landingpage__increment--long {
    width: var(--increment-large);
    border-top: var(--increment-style);
  }

  .landingpage__increment-info {
    color: var(--secondary-color);
    font-size: var(--font-size-data);
  }

  .landingpage__data {
    display: flex;
    justify-content: space-between;
  }

  .landingpage__data-content {
    color: var(--secondary-color);
    font-size: var(--font-size-data);
    font-style: italic;
    text-align: end;
  }

  /* 1.4 Decoration increments */

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

  /* Mobile */
  @media screen and (max-device-width: 767px) { 
    .landingpage__ruler {
      padding: 0vw 5vw;
      margin: 0;
    }

    /* 2.1 Mobile Header */
    .landingpage__header {
      padding: 0;
    }

    .landingpage__header--upper {
      font-size: 10vh;
      text-align: center;
    }

    .landingpage__header--lower {
      font-size: 10vh;
      text-align: center;
    }

    /* 2.2 Mobile about */
    .landingpage__about {
      padding: 0;
      width: 100%;
    }

    .landingpage__imageframe {
      position: relative;
      height: 25vh;
      z-index: -1;
    }

    .landingpage__image {
      display: none;
    }

    .landingpage__logo {
      display: none;
    }

    .landingpage__intro {
      text-align: center;
      padding: 0;
    }

    .landingpage__socials {
      justify-content: center;
    }

  .landingpage__link {
    height: 6vh;
    margin-left: 0.2rem;
    position: relative;
    z-index: 10;
  }

    /* 2.3 Mobile increments */
    .landingpage__increments {
      width: 90vw;
    }

    .landingpage__data-content {
      display: none;
    }

    .landingpage__name {
      font-size: 3rem;
      transform: translateY(-9.2rem);
    }

    /* 2.4 Mobile decorations */

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

    .decoration__buffer {
      width: 7vw;
    }
  }
</style>