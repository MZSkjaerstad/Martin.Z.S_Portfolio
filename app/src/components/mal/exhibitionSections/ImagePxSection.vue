<template>
   <div class="image-px-section" ref="parallaxContainer" @scroll="handleScroll">
      <img class="image-px-section__content" :src="sectionData.imageFile" :alt="sectionData.caption">
   </div>
</template>

<script>
export default {
  props: {
    sectionData: Object
  },

   methods: {
    handleScroll() {
      const scrollTop = this.$refs.parallaxContainer.scrollTop || this.$refs.parallaxContainer.pageYOffset;
      const scrollSpeed = 0.5;
      this.$refs.parallaxContent.style.transform = `translateY(-${scrollTop * scrollSpeed}px)`;
    }
  }
};
</script>

<style>
   .image-px-section {
      overflow: hidden;
      position: relative;
      width: 100%;
      height: 100vh;
   }

   .image-px-section__content {
      width: 100%;
      height: autu;
      transform: translateY(0);
      transition: transform 0.3s ease-out;
   }

   @media screen and (max-device-width: 767px) and (-webkit-min-device-pixel-ratio: 2) {
      .image-px-section {
         padding: 0;
      }
   }
</style>
