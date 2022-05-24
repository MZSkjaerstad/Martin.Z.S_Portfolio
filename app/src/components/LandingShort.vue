<template>
   <section>
      <div class="landingpage__ruler">
         <div class="ruler__increments ruler__data">
            <div>
               <div class="ruler__increment--long"></div>

               <div class="ruler__increment-info">000</div>
            </div>
         </div>

         <div class="ruler__increments">
            <div class="ruler__increment--small"></div>

            <div class="ruler__landing">
               <div class="ruler__header">
                 <h1 class="ruler__header--upper">Digital</h1>

                 <h1 class="ruler__header--lower">Designer</h1>
               </div>

               <div class="ruler__about">
                  <div class="ruler__imageframe">
                    <img class="ruler__logo" src="/visual_identity/vector/logo.svg" alt="MartinZ.S. logo.">

                    <img class="ruler__image" src="/visual_identity/image/landing_banner.png" alt="">
                  </div>

                  <div class="ruler__intro">
                    Martin Zupfer Skjærstad
                  </div>

                  <div class="ruler__socials">
                    <a class="ruler__link" v-for="link in socials" :href="link.url" target="_blank" :aria-label="`Open ${link.linktype}`">
                      <img class="ruler__link-icon" :src="link.icon" alt="">
                    </a>
                  </div>
               </div>
            </div>
         </div>

         <div class="ruler__increments">
            <div class="ruler__increment--small"></div>
         </div>

         <div class="ruler__increments">
            <div class="ruler__increment--small"></div>
         </div> 

         <div class="ruler__increments">
            <div class="decoration__object decoration__object--1"></div>
         </div>

         <div class="ruler__increments">
            <div class="decoration__object decoration__object--2"></div>
         </div>

         <div class="ruler__increments">
            <div class="decoration__object decoration__object--3"></div>
         </div>

         <div class="ruler__increments">
            <div class="decoration__object decoration__object--4"></div>
         </div>

         <div class="ruler__increments">
            <div class="decoration__object decoration__object--5"></div>
         </div>

         <div class="ruler__increments">
            <div class="decoration__object decoration__object--6"></div>
         </div>

         <div class="ruler__increments">
            <div class="decoration__object decoration__object--7"></div>
         </div>

         <div class="ruler__increments">
            <div class="decoration__object decoration__object--8"></div>
         </div>

         <div class="ruler__increments">
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
}

.ruler__landing {
  position: relative;
}

/* Header */

.ruler__header {
  padding-left: 10vw;
  height: 60vh;
}

.ruler__header--upper {
  z-index: 20;
}

.ruler__header--lower {
  z-index: 20;
}

.ruler__intro {
  text-align: end;
  padding: 2vh 0 0 30%;
  font-size: 3.21vh;
  font-weight: 600;
  font-style: italic;
  text-transform: uppercase;
}

/* About */

.ruler__about {
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  padding-right: 2vw;
  height: 60vh;
}

.ruler__imageframe {
  position: relative;
  height: 40vh;
  z-index: -1;
}

.ruler__logo {
  position: absolute;
  height: 25%;
  top: 7%;
  right: 8%;
}

.ruler__image {
  height: 100%;
  z-index: -1;
}

.ruler__socials {
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap-reverse;
  padding: var(--spacing-padding) 0;
}

.ruler__link {
  height: 6vh;
  margin-left: var(--spacing-padding);
  position: relative;
  z-index: 10;
}

.ruler__link-icon {
  height: 100%;
  z-index: 10;
}

.ruler__link:hover {
  border: var(--increment-style);
  border-radius: 15%;
  transition: 0.1s;
}

/* Increments */

.ruler__increments {
  width: 85vw;
  height: 0px;
  margin-bottom: 5vh;
}

.ruler__increment--small {
  width: var(--increment-small);
  border-top: var(--increment-style);
}

.ruler__increment--medium {
  width: var(--increment-medium);
  border-top: var(--increment-style);
}

.ruler__increment--long {
  width: var(--increment-large);
  border-top: var(--increment-style);
}

.ruler__increment-info {
  color: var(--highlight-color);
  font-size: var(--font-size-data);
}

.ruler__data {
  display: flex;
  justify-content: space-between;
}

.ruler__data-content {
  color: var(--highlight-color);
  font-size: var(--font-size-data);
  font-style: italic;
  text-align: end;
}

/* decoration increments */

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

/* Media query */
@media screen and (max-device-width: 767px) { 
   .landingpage__ruler {
    padding: 0vw 5vw;
    margin: 3vh 0 0 0;
  }

  .ruler__increments {
    width: 90vw;
  }

  .ruler__data-content {
    display: none;
  }

  .ruler__name {
    font-size: 3rem;
    transform: translateY(-9.2rem);
  }

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