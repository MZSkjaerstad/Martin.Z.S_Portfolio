<template>
   <div class="process">
      <div class="process__head">
         Process
      </div>

      <div class="process__content">
         <div class="process__details">
            <div class="process__flavourtext">
               {{processData.intro}}
            </div>
            
            <div class="process__linkwrapper">
               <a class="process__link" v-for="link in processData.links" :href="link" target="_blank"> {{ link }} </a>
            </div>
         </div>

         <div class="process__process-wrapper">
            <div class="process__title">
               {{ processData.subtitle }}
            </div>

            <div class="process__process-content" v-for="section in processData.sections">
               <div class="process__processtext" v-if="section._type === 'sectionText'">
                  <div class="process__subtitle-wrapper">
                     <div class="process__subtitle">
                        00{{ processData.sections.indexOf(section) + 1 }} - {{ section.title }} 
                     </div>
                  </div>

                  <div class="process__body">
                     {{ section.sectionContent }}
                  </div>
               </div>
               <div v-else>
                  <img :src="section.imageFile" :alt="imageCaption">
               </div>
            </div>
         </div>
       </div>
   </div>
</template>

<script>
export default {
   props: {
      processData: {
         type: Object
      }
   },
}
</script>

<style>
   .process {
      width: 100%;
      height: auto;
      padding: 3rem 7% 3rem 7%;
   }

   /**** 2.0 Head ****/

   .process__head {
      width: 100%;
      font-size: var(--font-size-subtitle);
      font-style: italic;
      font-weight: 600;
      border-bottom: var(--increment-style);
      padding-bottom: 1rem;
   }

   /**** 3.0 Content ****/

   .process__content {
      width: 100%;
      height: auto;
      padding: 2rem 0;
      display: flex;
      justify-content: space-between;
   }

   /**** 4.0 Details ****/

   .process__details {
      width: 23%;
      height: auto;
      font-style: italic;
      font-size: 1.3rem;
   }

   .process__flavourtext {
      border-bottom: var(--increment-style);
      padding-bottom: 2rem;
   }

   .process__linkwrapper {
      padding-top: 1.3rem;
      display: flex;
      justify-content: end;
   }

   .process__link {
      color: var(--highlight-color);
      font-size: var(--font-size-data);
      text-decoration: none;
      margin-bottom: 0.5rem;
   }

   .process__link:hover {
      color: var(--secondary-color);
      text-decoration: underline;
   }

   /**** 5.0 Process-content ****/

   .process__process-wrapper {
      width: 75%;
   }

   .process__title {
      font-size: 3.5rem;
      font-weight: bold;
      font-style: italic;
      text-transform: uppercase;
      color: var(--primary-color);
      -webkit-text-stroke: var(--title-style);
      transform: translateY(-0.5rem);
      padding: 0 0 1rem 2rem;
   }

   .process__process-content {
      width: 100%;
      height: auto;
      display: flex;
      margin-bottom: 4rem;
   }

   /* 5.1 text */

   .process__processtext {
      width: 65%;
      display: flex;
      height: 100%;
   }

   .process__subtitle-wrapper {
      width: 8rem;
   }

   .process__subtitle {
      top: 45%;
      color: var(--highlight-color);
      font-size: var(--font-size-data);
      font-style: italic;
      white-space: nowrap;
      text-align: center;
      padding: 0.1rem 1rem;
   }

   .process__body {
      width: 70%;
   }

   /* 5.2 images */

   .process__images {
      width: 40%;
      display: flex;
      flex-direction: column;
      padding-left: 2rem;
   }

   .process__figure {
      width: 100%;
      margin-bottom: 2rem;
   }

   .process__image {
      width: 100%;
      height: auto;
      object-fit: cover;
      border: var(--increment-style);
   }

   .process__figcaption {
      color: var(--highlight-color);
      font-size: var(--font-size-data);
      font-style: italic;
      padding-top: 0.6rem;
   }

    @media screen and (max-device-width: 767px) and (-webkit-min-device-pixel-ratio: 2) {
      .process__head {
         padding-bottom: 2rem;
      }
      
      .process__content {
         flex-direction: column;
         padding: 3rem 0;
      }

      .process__details {
         width: 100%;
      }

      .process__flavourtext {
         font-size: 3.2rem;
         padding-bottom: 3rem;
         margin-bottom: 3rem;
      }

      .process__linkwrapper {
         justify-content: start;
      }

      .process__link {
         font-size: var(--font-style-data);
         margin-bottom: 3rem;
      }

      .process__process-content {
         flex-direction: column;
      }

      .process__title {
         display: none;
      }

      .process__process-wrapper {
         width: 100%;
         border-left: none;
      }

      .process__processtext {
         width: 100%;
         padding: 0 0;
         margin-bottom: 5rem;
         justify-content: space-between;
      }

      .process__subtitle {
         padding: 0 0.1rem;
         white-space: normal;
      }

      .process__body {
         width: 78%;
      }

      .process__images {
         width: 100%;
         padding-left: 0;
      }

      .process__figure {
         margin: 2rem 0;
      }

      .process__figcaption {
         padding-top: 1.6rem;
      }
   }
</style>