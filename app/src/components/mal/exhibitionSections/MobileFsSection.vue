<template>
  <section class="mobile-fs-section">
    <img class="mobile-fs-section__mockup" src="/exhibition_assets/iPhone 15 Pro - Black Titanium - Portrait.png" alt="Macbook_mockup">

    <img class="mobile-fs-section__content" :src="sectionData.imageFile" :alt="sectionData.caption">
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
  .mobile-fs-section {
    position: relative;
    width: 100%;
    margin: var(--Spacing-Section) 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
  }
  
  /***** MOCKUP *****/

  .mobile-fs-section__mockup {
    width: 20%;
    height: 100%;
    z-index: 2;
  }
  
  /***** CONTENT *****/

  .mobile-fs-section__content {
    position: absolute;
    width: 17%;
    top: 0;
    padding: 1.7% 0 0 0;
  }

     @media screen and (max-device-width: 767px) and (-webkit-min-device-pixel-ratio: 2) {
      .mobile-fs-section {
        margin: var(--spacing-large) 0;
      }

      .mobile-fs-section__mockup {
         width: 60%;
      }

      .mobile-fs-section__content {
         width: 50%;
         padding: 5.3% 0 0 0;
      }
   }

</style>