<template>
   <main v-if="loading === true">
      <Loading /> 
   </main>

   <main class="about" v-else>
      <section class="about__essentials">
         <div class="about__essentials-wrapper">
            <div class="about__name">
               <h3 class="about__fullname"> {{ content.fullName }} </h3>

               <p class="about__title">{{ content.workingTitle }}</p>
            </div>

            <figure class="about__figure">
               <img class="about__image" :src="content.profilePicture" alt="">
            </figure>

            <div class="about__socials">
               <p class="about__category">Social links:</p>

               <div class="about__link-container">
                  <a class="about__link" v-for="link in content.socials" :href="link.url" target="_blank">
                     <img class="about__link-icon" :src="link.icon" alt="">
                  </a>
               </div>
            </div>
         </div>
      </section>

      <section class="about__article">
         <div class="about__skills">
            <div class="about__adobe">
               <p class="about__category">Adobe softwares:</p>

               <p v-for="software in content.adobeSoftware">
                  {{ software }}
               </p>
            </div>

            <div class="about__webdesign">
               <p class="about__category">Webdesign tools:</p>

               <p v-for="tool in content.webdesignTools">
                  {{ tool }}
               </p>
            </div>

            <div class="about__languages">
               <p class="about__category">Code languages:</p>

               <p v-for="language in content.codeLanguages">
                  {{ language }}
               </p>
            </div>
         </div>

         <div class="about__divider"></div>

         <div class="about__background">
            <p class="about__category">Background:</p>
            
            <p class="about__section" v-for="section in content.background"> {{ section.section }} </p>
         </div>

         <div class="about__divider"></div>

         <div class="about__strengths">
            <p class="about__category">Strengths:</p>

            <p class="about__section" v-for="section in content.strengths">
               {{ section.section }}
            </p>
         </div>

         <div class="about__divider"></div>

         <div class="about__email">
            <p>Work with me? <br> Send me an <a class="about__email-link" href="mailto:martskjae@hotmail.no">email!</a></p>
         </div>
      </section>
   </main>
</template>

<script>
   import Loading from '../components/Loading.vue'
   import viewMixin from '../mixins/viewMixin.js'
   import query from '../groq/aboutMe.groq?raw'

   export default {
      components: {
         Loading
      },

      mixins: [viewMixin],

      async created() {
         this.sanityFetch(query)
      }
   }
</script>

<style>
   .about {
      width: 100%;
      height: auto;
      padding: 0 7% var(--spacing-small) 7%;
      display: flex;
   }

   .about__category {
      color: var(--secondary-color);
      font-size: var(--font-size-data);
      font-style: italic;
      padding-bottom: var(--spacing-small);
   }

   .about__divider {
      width: var(--increment-medium);
      border-top: var(--increment-style);
      mix-blend-mode: difference;
      padding-top: var(--spacing-medium);
   }

   /* Essentials */

   .about__essentials {
      width: 45%;
      min-width: 30rem;
      max-width: 36rem;
      padding: var(--spacing-small) var(--spacing-large) 0 var(--spacing-padding);
   }

   .about__essentials-wrapper {
      position: sticky;
      height: 100vh;
      top: var(--spacing-medium);
      mix-blend-mode: difference;
   }

   .about__name {
      padding-bottom: var(--spacing-medium);
   }

   .about__fullname {
      font-size: 2.2rem;
      padding-bottom: 0.6rem;
      white-space: nowrap;
      mix-blend-mode: difference;
   }

   .about__title {
      font-size: var(--font-size-intro);
      font-style: italic;
      color: var(--secondary-color);
      mix-blend-mode: difference;
   }

   .about__figure {
      width: 100%;
      height: 58%;
   }

   .about__image {
      width: 100%;
      height: 100%;
      object-fit: cover;
   }

   .about__socials {
      padding: var(--spacing-medium) 0 0 0;
   }

   .about__link-container {
      display: flex;
      flex-wrap: wrap-reverse;
      align-items: flex-start;
   }

   .about__link {
      width: 3rem;
      height: 3rem;
      margin-right: 1rem;
      transition: 0.3s;
      border: var(--increment-style);
      border-radius: 15%;
   }

   .about__link:hover {
      background-color: var(--secondary-color);
      transition: 0.3s;
      padding: 0.2rem;
   }

   .about__link-icon {
      width: 100%;
      height: 100%;
      object-fit: cover;
      mix-blend-mode: difference;
   }

   .about__skills {
      max-width: 25rem;
      line-height: 130%;
      display: flex;
      justify-content: space-between;
      white-space: nowrap;
      padding-bottom: var(--spacing-medium);
      mix-blend-mode: difference;
   }

   .about__adobe {
      margin-right: var(--spacing-small);
   }

   .about__webdesign {
      margin-right: var(--spacing-small);
   }

   /* Article */

   .about__article {
      padding: var(--spacing-small) var(--spacing-medium) 0 0;
      mix-blend-mode: difference;
   }

   .about__background {
      padding-bottom: var(--spacing-small);
   }

   .about__strengths {
      padding-bottom: var(--spacing-small);
   }

   .about__section {
      max-width: 80ch;
      line-height: 150%;
      padding-bottom: var(--spacing-small);
   }

   .about__email {
      font-size: var(--font-size-intro);
      font-weight: 600;
      font-style: italic;
      padding: var(--spacing-small) 0 0 0;
   }

   .about__email-link {
      color: var(--secondary-color);
      text-decoration: underline;
      transition: 0.2s;
   }

   .about__email-link:hover {
      color: var(--highlight-color);
      text-decoration: none;
      transition: 0.2s;
   }
   
   @media screen and (max-device-width: 767px) {
      .about {
         flex-direction: column;
      }

      .about__essentials {
         width: 100%;
         min-width: none;
         max-width: none;
         padding: var(--spacing-medium) 0 0 0;
      }

      .about__fullname {
         font-size: 4.4rem;
         padding-bottom: 2rem;
      }

      .about__figure {
         height: 60%;
      }

      .about__skills {
         max-width: none;
      }

      .about__link {
         width: 6rem;
         height: 6rem;
      }

      .about__article {
         padding: var(--spacing-medium) 0 0 0;
      }      

      .about__email {
         text-align: center;
      }
   }


</style>