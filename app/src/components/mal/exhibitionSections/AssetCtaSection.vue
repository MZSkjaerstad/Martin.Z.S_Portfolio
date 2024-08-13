<template>
   <section class="cta-section">
    <h3 class="cta-section__title">
      {{sectionData.assetTitle}}
    </h3>

    <div class="cta-section__content">
      <p class="cta-section__data">Link assets:</p>

      <div class="cta-section__asset" v-for="asset in sectionData.assetLinks">
        <a class="cta-section__link" :href="asset.url" target="_blank">
          <button class="cta-section__button">
            <h2 class="cta-section__linkname">{{asset.linkName}}</h2>
            <p class="cta-section__linktype">{{asset.linktype}}</p>
          </button>
        </a>

        <div class="cta-section__thumbnail">
          <img class="cta-section__image" :src="asset.linkThumbnail" alt="Thumbnail">
        </div>
      </div>
    </div>

    <p class="cta-section__data">{{sectionData.disclaimer}}</p>
   </section>
</template>

<script>
export default {
  props: {
    sectionData: Object
  },
};
</script>

<style>
  /* Change block name to the same as component */
  .cta-section {
    width: 100%;
    padding: 0 7%;
    position: relative;
    margin: var(--spacing-large) 0;
    min-height: 70vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  /* Links */

  .cta-section__content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: var(--spacing-medium);
  }

  .cta-section__link {
    z-index: 10;
    text-decoration: none;
    position: relative;
    mix-blend-mode: difference;
  }

  .cta-section__data {
    font-style: italic;
    font-size: var(--font-size-data);
    margin-bottom: var(--spacing-small);
  }

  .cta-section__asset {
    margin-top: var(--spacing-padding);
  }

  .cta-section__button {
    font-family: var(--font-family);
    width: 100%;
    background: none;
    border: none;
    color: var(--secondary-color);
    display: flex;
    align-items: center;
    transition: 0.2s ease-out;
  }

  .cta-section__linkname {
    font-size: 6vh;
    font-family: var(--font-family);
    color: var(--primary-color-tr);
    -webkit-text-stroke: var(--title-style);
    transition: 0.2s ease-out;
  }

  .cta-section__linktype {
    margin-left: var(--spacing-small);
    font-style: italic;
    text-transform: uppercase;
  }

  .cta-section__link:hover .cta-section__button {
    padding-left: 3rem;
    transition: 0.2s ease-out;
  }

  .cta-section__link:hover .cta-section__linkname {
    color: var(--secondary-color);
    transition: 0.2s ease-out;
  }

  .cta-section__thumbnail {
    position: absolute;
    opacity: 0%;
    max-width: 75%;
    height: 70%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: 0.5s;
    overflow: hidden;
    z-index: 0;
  }

  .cta-section__image {
    height: 100%;
    width: 100%;
    object-fit: cover;
    z-index: 1;
  }

  .cta-section__asset:hover .cta-section__thumbnail {
    height: 75%;
    opacity: 0.8;
  }

  @media screen and (max-device-width: 767px) and (-webkit-min-device-pixel-ratio: 2) {
    .cta-section {
      min-height: auto;
    }

    .cta-section__title {
      text-align: center;
    }

    .cta-section__content {
      align-items: center;
      margin-bottom: 0;
      margin-top: var(--spacing-medium);
    }
    
    .cta-section__thumbnail {
      display: none;
    }

    .cta-section__linkname {
      font-size: 4vh;
    }

    .cta-section__linktype {
      display: none;
    }

    .cta-section__button:hover {
    padding-left: 0rem;
    transition: 0.2s ease-out;
  }
  }
</style>