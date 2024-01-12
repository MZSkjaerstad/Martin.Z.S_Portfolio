<template>
   <section class="asset-cta-section">
    <h3 class="asset-cta-section__title">
      {{sectionData.assetTitle}}
    </h3>

    <div class="asset-cta-section__content">
      <div class="asset-cta-section__asset" v-for="asset in sectionData.assetLinks">
        <div class="asset-cta-section__type">
          <img class="asset-cta-section__type-icon" :src="asset.icon" alt="icon">

          <h3 class="asset-cta-section__type-name"> {{asset.linktype}} </h3>
        </div>

        <div class="asset-cta-section__cta">
          <p class="asset-cta-section__disclaimer"> {{asset.disclaimer}} </p>

          <a :href="asset.url" target="_blank">
            <button class="asset-cta-section__button"> <p>View</p> </button>
          </a>
        </div>
      </div>
    </div>
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
  .asset-cta-section {
    width: 100%;
    height: 80vh;
    padding: 0 7%;
    margin: var(--Spacing-Section) 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .asset-cta-section__content {
    display: flex;
  }

  /* Title */

  .asset-cta-section__title {
    margin-bottom: var(--spacing-medium);
  }

  /* Assets */

  .asset-cta-section__asset {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    min-width: 15rem;
    min-height: 20rem;
    border: var(--increment-style);
    border-radius: 15px;
    mix-blend-mode: difference;
    padding: var(--spacing-medium);
    margin: var(--spacing-small);
  }

  /* Type */

  .asset-cta-section__type {
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .asset-cta-section__type-icon {
    height: 70%;
    margin-bottom: var(--spacing-small);
  }

  .asset-cta-section__type-name {
    text-transform: uppercase;
    font-weight: 600;
  }

  /* CTA */

  .asset-cta-section__cta {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .asset-cta-section__cta a {
    color: var(--secondary-color);
    mix-blend-mode: difference;
    width: 100%;
    cursor: pointer;
  }

  .asset-cta-section__disclaimer {
    font-size: var(--font-size-data);
    font-style: italic;
    margin-bottom: var(--spacing-padding);
    text-decoration: none;
  }

  .asset-cta-section__button {
    width: 100%;
    height: 3rem;
    background: none;
    border: var(--increment-style);
    border-radius: 15px;
    padding: var(--spacing-padding);
    mix-blend-mode: difference;
    transition: 0.3s ease-in-out;
    cursor: pointer;
  }

  .asset-cta-section__button p {
    color: var(--secondary-color);
    font-size: var(--font-size-intro);
    font-weight: 600;
    mix-blend-mode: difference;
    transition: 0.3s ease-in-out;
  }
  
  .asset-cta-section__button:hover {
    background-color: var(--secondary-color);
    transition: 0.3s ease-in-out;
  }

  .asset-cta-section__button:hover p {
    font-size: var(--font-size-body);
    transition: 0.3s ease-in-out;
  }

  @media screen and (max-device-width: 767px) and (-webkit-min-device-pixel-ratio: 2) {
    .asset-cta-section {
        padding: 0;
        height: auto;
    }

    .asset-cta-section__title {
      margin-bottom: var(--spacing-large);
    }

    .asset-cta-section__content {
      flex-direction: column;
    }

    .asset-cta-section__asset {
      min-width: none;
      min-height: none;
      border: none;
      padding: var(--spacing-padding);
    }

    .asset-cta-section__type-icon {
      height: 14rem;
      margin-bottom: var(--spacing-medium);
    }

    .asset-cta-section__cta {
      margin-top: var(--spacing-medium);
    }

    .asset-cta-section__button {
      height: auto;
      padding: var(--spacing-medium);
    }

    .asset-cta-section__button p {
      font-size: 3rem;
    }
  }
</style>