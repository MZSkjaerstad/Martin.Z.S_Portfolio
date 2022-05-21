<template>
  <section class="introduction">
    <div class="introduction__hook">
      <figure class="introduction__figure">
        <img
          class="introduction__image"
          :src="`${introductionData.thumbnail}`"
          alt=""
        />
      </figure>

      <h1 class="introduction__title">
        {{ introductionData.projectName }}
      </h1>
    </div>

    <div class="introduction__content">
      <div class="introduction__ruler">
        <div class="introduction__increment">
          <p class="introduction__increment--data">Project</p>
          <div class="introduction__increment--1"></div>
        </div>

        <div class="introduction__increment">
          <div class="introduction__increment--2"></div>
        </div>

        <div class="introduction__increment">
          <div class="introduction__increment--3"></div>
        </div>

        <div class="introduction__increment">
          <div class="introduction__increment--4"></div>
        </div>

        <div class="introduction__increment">
          <div class="introduction__increment--5"></div>
        </div>

        <div class="introduction__increment">
          <div class="introduction__increment--6"></div>
        </div>

        <div class="introduction__increment">
          <div class="introduction__increment--7"></div>
        </div>

        <div class="introduction__increment">
          <div class="introduction__increment--8"></div>
        </div>
      </div>

      <div class="introduction__information">
        <div class="introduction__text">
          <h3 class="introduction__subtitle">
            {{ introductionData.subtitle }}
          </h3>

          <p class="introduction__description">
            {{ introductionData.description }}
          </p>
        </div>

        <div class="introduction__details">
          <p class="introduction__year">
            {{ introductionData.publishYear.slice(0, 4) }}
          </p>

          <div class="introduction__tagscontainer">
            <p class="introduction__tags" v-for="tag in introductionData.tags">
              {{ tag }}
            </p>
          </div>
        </div>
      </div>

      <div class="introduction__credentials">
        <div
          class="introduction__contributors--undefined"
          v-if="introductionData.contributors === null"
        ></div>

        <div class="introduction__contributors--defined" v-else>
          <p>Contributors:</p>

          <p
            class="introduction__contributor"
            v-for="contributor in introductionData.contributors"
          >
            {{ contributor.name }}
          </p>
        </div>

        <div class="introduction__linkcontainer">
          <a
            :href="link.url"
            class="introduction__link"
            v-for="link in introductionData.links"
            :aria-label="`link to ${link.linktype} asset.`"
            target="_blank"
          >
            <img
              class="introduction__link-icon"
              :src="link.icon"
              :alt="`go to ${link.url}`"
            />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
   export default {
      props: {
         introductionData: {
            type: Object,
         },
      },
   };
</script>

<style>
   .introduction {
   width: 100%;
   height: 100%;
   padding: 0rem 7% 2% 7%;
   }

   /***** 1.0 Hook *****/

   .introduction__hook {
   width: 100%;
   height: 60%;
   padding-bottom: 2rem;
   }

   .introduction__figure {
   width: 54%;
   min-width: 35rem;
   height: 100%;
   }

   .introduction__image {
   width: 100%;
   height: 100%;
   object-fit: cover;
   }

   .introduction__title {
   width: 16rem;
   height: auto;
   position: absolute;
   padding: 0 7%;
   bottom: 42%;
   left: 30%;
   }

   /***** 2.0 Content *****/

   .introduction__content {
   width: 100%;
   height: 35vh;
   display: flex;
   }

   /* 2.1 Ruler */

   .introduction__ruler {
   width: 33%;
   height: 100%;
   }

   .introduction__increment {
   width: 100%;
   height: 0;
   margin-bottom: 5vh;
   display: flex;
   justify-content: flex-end;
   }

   .introduction__increment--1 {
   width: 85%;
   border-top: var(--increment-style);
   }

   .introduction__increment--2 {
   width: 55%;
   border-top: var(--increment-style);
   }

   .introduction__increment--3 {
   width: 35%;
   border-top: var(--increment-style);
   }

   .introduction__increment--4 {
   width: 22%;
   border-top: var(--increment-style);
   }

   .introduction__increment--5 {
   width: 14%;
   border-top: var(--increment-style);
   }

   .introduction__increment--6 {
   width: 10%;
   border-top: var(--increment-style);
   }

   .introduction__increment--7 {
   width: 7%;
   border-top: var(--increment-style);
   }

   .introduction__increment--8 {
   width: 4%;
   border-top: var(--increment-style);
   }

   .introduction__increment--data {
   color: var(--highlight-color);
   font-size: var(--font-size-data);
   margin-right: 0.8rem;
   transform: translateY(-0.5rem);
   }

   /* 2.2 Information */

   .introduction__information {
   width: 33%;
   height: 35vh;
   min-width: 21rem;
   padding: 0 2rem 0 2rem;
   border-right: var(--increment-style);
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   }

   .introduction__text {
   transform: translateY(-0.5rem);
   }

   .introduction__subtitle {
   margin-bottom: 0.8rem;
   }

   .introduction__description {
   overflow-y: hidden;
   }

   .introduction__year {
   font-size: 2rem;
   font-weight: bold;
   font-style: italic;
   text-decoration: none;
   color: var(--primary-color);
   -webkit-text-stroke: var(--title-style);
   }

   .introduction__tagscontainer {
   transform: translateX(-0.5rem) translateY(0.5rem);
   }

   .introduction__tags {
   width: auto;
   display: inline-block;
   color: var(--highlight-color);
   font-size: var(--font-size-data);
   border: var(--increment-style);
   border-radius: 15px;
   padding: 0.09rem 0.4rem 0.1rem 0.4rem;
   margin: 0.2em;
   }

   /* 2.3 Credentials */

   .introduction__credentials {
   width: 33%;
   height: 100%;
   display: flex;
   flex-direction: column;
   justify-content: flex-end;
   }

   .introduction__contributors--defined {
   width: 100%;
   height: 50%;
   color: var(--highlight-color);
   font-size: var(--font-size-data);
   font-style: italic;
   padding: 0rem 2rem;
   }

   .introduction__contributor {
   font-size: var(--font-size-body);
   padding: 0.4rem 0 0 0;
   font-style: normal;
   }

   .introduction__linkcontainer {
   width: 100%;
   height: 50%;
   display: flex;
   flex-wrap: wrap-reverse;
   align-items: flex-start;
   padding: 0rem 1rem;
   }

   .introduction__link {
   width: 3rem;
   height: 3rem;
   margin-right: 1rem;
   transition: 0.1s;
   }

   .introduction__link-icon {
   width: 100%;
   height: 100%;
   object-fit: cover;
   }

   .introduction__link:hover {
   border: var(--increment-style);
   border-radius: 15%;
   transition: 0.1s;
   }

   @media screen and (max-device-width: 767px) and (-webkit-min-device-pixel-ratio: 2) {
   .introduction {
      height: auto;
      padding: 0rem 7% 2rem 7%;
   }

   /* Hook */

   .introduction__hook {
      height: 40%;
   }

   .introduction__figure {
      width: 100%;
   }

   .introduction__title {
      font-size: 14vw;
      transform: translateY(0);
      bottom: 60%;
      left: 6%;
   }

   /* Content */

   .introduction__content {
      height: auto;
      flex-direction: column;
      justify-content: flex-start;
   }

   .introduction__ruler {
      display: none;
   }

   .introduction__information {
      width: 100%;
      border-right: none;
      justify-content: flex-start;
   }

   .introduction__text {
      transform: translateY(1rem);
   }

   .introduction__subtitle {
      font-size: 4rem;
      margin-bottom: 1.6rem;
   }

   .introduction__description {
      margin-bottom: 2.4rem;
   }

   .introduction__year {
      padding-top: 2rem;
      font-size: 6rem;
   }

   /* Credentials */

   .introduction__credentials {
      flex-direction: column-reverse;
      align-items: center;
      width: 100%;
   }

   .introduction__contributors--defined {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 4rem;
   }

   .introduction__linkcontainer {
      width: 100%;
      padding: 8rem 4rem 4rem 4rem;
      justify-content: flex-start;
      align-items: flex-end;
   }

   .introduction__link {
      width: 10rem;
      height: 10rem;
      margin-right: none;
   }

   .introduction__link-icon {
      width: 100%;
      height: 100%;
      object-fit: contain;
   }
   }
</style>