<template>
  <section class="macbook-fs-section">
    <img class="macbook-fs-section__mockup" src="/exhibition_assets/macbook-mockup.png" alt="Macbook_mockup">

    <img class="macbook-fs-section__content" :src="sectionData.imageFile" :alt="sectionData.caption">
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
  .macbook-fs-section {
    position: relative;
    width: 100%;
    margin: var(--spacing-section) 0 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
  }
  
  /***** MOCKUP *****/

  .macbook-fs-section__mockup {
    width: 100%;
    z-index: 2;
  }
  
  /***** CONTENT *****/

  .macbook-fs-section__content {
    position: absolute;
    width: 100%;
    padding: 4% 15% 0 15%;
    top: 0;
  }

     @media screen and (max-device-width: 767px) and (-webkit-min-device-pixel-ratio: 2) {
      .macbook-fs-section {
        margin: var(--spacing-section) 0 0 0;
      }
   }

</style>