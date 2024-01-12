<template>
  <div class="intro__image-mobile">
    <img :src="introductionData.thumbnail" :alt="introductionData.projectName">
  </div>

  <section class="intro">
    <div class="intro__cover">
      <div class="intro__image">
        <img :src="introductionData.thumbnail" :alt="introductionData.projectName">
      </div>

      <h1 class="intro__title"> {{introductionData.projectName}} </h1>

      <div class="intro__cover-increments">
        <div class="intro__corner--top">
          <div class="intro__corner--top-left" />

          <div class="intro__corner--top-right" />
        </div>

        <!--  INCREMENTS
        <div class="intro__middle">
          <div class="intro__middle--increment" />
        </div>

        <div class="intro__middle">
          <div class="intro__middle--increment" />
        </div>

        <div class="intro__middle">
          <div class="intro__middle--increment" />
        </div>

        <div class="intro__middle">
          <div class="intro__middle--increment" />
        </div>

        <div class="intro__middle">
          <div class="intro__middle--increment" />
        </div>
        -->

        <div class="intro__corner--bottom">
          <div class="intro__corner--bottom-left" />

          <div class="intro__corner--bottom-right" />
        </div>
      </div>
    </div>

    <div class="intro__content">
      <div class="content__info">
        <div class="intro__tagscontainer">
              <p class="intro__tags" v-for="tag in introductionData.tags">
                {{ tag }}
              </p>
        </div>

        <p class="intro__year">
          {{ introductionData.publishYear.slice(0, 4) }}
        </p>
      </div>


      <h3 class="intro__description"> {{introductionData.description}} </h3>

      <div class="intro__divider"></div>

      <div class="intro__details">
        
        <div class="intro__assets--undefined" v-if="introductionData.links === null"></div>

        <div class="intro__assets--defined" v-else>
            <p class="intro__asset-title">Project assets:</p>

            <div class="intro__linkcontainer">

            <a
              :href="link.url"
              class="intro__link"
              v-for="link in introductionData.links"
              :aria-label="`link to ${link.linktype} asset.`"
              target="_blank"
            >
              <img
                class="intro__link-icon"
                :src="link.icon"
                :alt="`go to ${link.url}`"
              />
            </a>
          </div>
        </div>

        <div
          class="intro__contributors--undefined"
          v-if="introductionData.contributors === null"
        ></div>

        <div class="intro__contributors--defined" v-else>
          <p class="intro__contributors-title">Contributors:</p>

          <p
            class="intro__contributor"
            v-for="contributor in introductionData.contributors"
          >
            {{ contributor.name }}
          </p>
        </div>
      </div>

      <div class="intro__divider"></div>

      <p class="intro__data">Exhibition below</p>
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
  .intro {
    width: 100vw;
    height: auto;
    padding: 0rem 7% 2% 7%;
  }

  .intro__image-mobile {
    display: none;
  }

  /* Cover image */

  .intro__cover {
    width: 100%;
    height: auto;
    position: relative
  }

  .intro__image {
    width: 100%;
    height: 95vh;
    position: sticky;
    top: 2.5vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .intro__image img {
    object-fit: cover;
    height: 110%;
  }

   .intro__title {
    z-index: 100;
    margin: 0 0 var(--spacing-padding) var(--spacing-padding);
    transform: translateY(1rem);
    mix-blend-mode: difference;
  }

  /* Cover increments */

  .intro__cover-increments {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    mix-blend-mode: difference;
  }

  .intro__middle {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  .intro__middle--increment {
    width: var(--increment-small);
    border-top: var(--increment-style);
    mix-blend-mode: difference;
  }

  .intro__corner--top{
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .intro__corner--bottom{
    width: 100%;
    display: flex;
    justify-content: space-between; 
  }

  .intro__corner--top-left {
    mix-blend-mode: difference;
    width: var(--increment-small);
    height: var(--increment-small);
    border-top: var(--increment-style);
    border-left: var(--increment-style);
  }

  .intro__corner--top-right {
    mix-blend-mode: difference;
    width: var(--increment-small);
    height: var(--increment-small);
    border-top: var(--increment-style);
    border-right: var(--increment-style);
  }

  .intro__corner--bottom-left {
    mix-blend-mode: difference;
    width: var(--increment-small);
    height: var(--increment-small);
    border-bottom: var(--increment-style);
    border-left: var(--increment-style);
  }

  .intro__corner--bottom-right {
    mix-blend-mode: difference;
    width: var(--increment-small);
    height: var(--increment-small);
    border-bottom: var(--increment-style);
    border-right: var(--increment-style);
  }

  /* Content */

  .intro__content {
    mix-blend-mode: difference;
    width: 100%;
    padding: 0 0 var(--spacing-medium) 0;
  }

  .content__info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: var(--spacing-medium) 0;
  }

  .intro__tagscontainer {
    width: 80%;
  }

  .intro__tags {
  width: auto;
  display: inline-block;
  color: var(--secondary-color);
  font-size: var(--font-size-data);
  border: var(--increment-style);
  border-radius: 15px;
  padding: 0.09rem 0.4rem 0.1rem 0.4rem;
  margin: 0.1em 0em 0.5em 0.1em;
  }

 .intro__divider {
  width: var(--increment-medium);
  border-bottom: var(--increment-style);
  mix-blend-mode: difference;
  margin: var(--spacing-medium) 0;
}

.intro__details {
  display: flex;
}

/* Contributors */

.intro__contributors--defined {

  color: var(--secondary-color);
  font-size: var(--font-size-data);
  font-style: italic;
  padding-right: var(--spacing-large);
}

.intro__contributors-title{
  margin-bottom: 1rem;
}

.intro__contributor {
  font-size: var(--font-size-body);
  padding: 0 0 0,4rem 0;
  font-style: normal;
}

/* Assets */

.intro__assets--defined {
  color: var(--secondary-color);
  font-size: var(--font-size-data);
  font-style: italic;
  display: flex;
  flex-direction: column;
  padding-right: var(--spacing-large);
}

.intro__linkcontainer {
  display: flex;
  flex-wrap: wrap-reverse;
  align-items: flex-start;
  padding: 1rem 0 0 0;
}

.intro__link {
  width: 3rem;
  height: 3rem;
  margin-right: 1rem;
  transition: 0.3s;
  border: var(--increment-style);
  border-radius: 15%;
}

.intro__link:hover {
  background-color: var(--secondary-color);
  transition: 0.3s;
  padding: 0.2rem;
}

.intro__link-icon {
  width: 100%;
  height: 100%;
  object-fit: cover;
  mix-blend-mode: difference;
}

.intro__year-title{
  font-size: var(--font-size-data);
  font-style: italic;
}

.intro__year {
  font-size: var(--font-size-year);
  font-weight: bold;
  font-style: italic;
  text-decoration: none;
  color: var(--primary-color-tr);
  -webkit-text-stroke: var(--title-style);
  padding-top: 0.8rem;
}

/* Data */

.intro__data {
  font-size: var(--font-size-data);
  font-style: italic;
}

@media screen and (min-width: 1900px) {
  .introduction__link {
    width: 4.5rem;
    height: 4.5rem;
  }
}

@media screen and (max-device-width: 767px) {
  
  /* Cover */
  .intro__image-mobile {
    display: inline-block;
    height: 40vh;
    width: 100vw;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .intro__image-mobile img {
    object-fit: cover;
    height: 110%;
  }

  .intro__image {
    display: none;
  }

  .intro__title {
    font-size: 9rem;
    -webkit-text-stroke: 3.6px black;
    mix-blend-mode: normal;
    margin: 6rem 0 0 0;
  }

  /* Cover increments */

  .intro__cover-increments {
    display: none;
  }

  /* Content */

  .content__info {
    flex-direction: column-reverse;
    align-items: flex-start;
    justify-content: space-evenly;
  }

  .intro__tagscontainer {
    margin-top: var(--spacing-small);
    font-size: 3rem;
  }

  .intro__tags {
    margin: 0.1em 0em 0.5em 0.5em;
  }

  .intro__year {
    font-size: 8rem;
  }

  .intro__description {
    font-size: var(--font-size-intro);
    font-weight: 400;
  }

  /* Details */

  .intro__details {
    flex-direction: column;
    align-items: flex-start;
  }

  .intro__contributors--defined{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: var(--spacing-medium) 0 0 0;
  }

  .intro__contributors-title {
    font-size: 3rem;
    margin-bottom: var(--spacing-small);
  }

  .intro__assets--defined {
    padding: 0 0 0 0;
  }

  .intro__asset-title {
    font-size: 3rem;
    margin-bottom: var(--spacing-small);
  }

  .intro__linkcontainer {
    width: 100%;
  }

  .intro__link {
    width: 10rem;
    height: 10rem;
    margin: 0 1.5rem;
  }

  .intro__link-icon {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .intro__year-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: var(--spacing-medium) 0 0 0;
  }

}

</style>