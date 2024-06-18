<template>
   <iframe class="video-fs-section" :src="sectionData.videoUrl" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</template>

<script>
export default {
  props: {
    sectionData: Object
  },
};
</script>

<style>
  .video-fs-section {
    width: 100%;
    height: 90vh;
    padding: 0 7%;
    margin: var(--spacing-section) 0;
  }

  @media screen and (max-device-width: 767px) and (-webkit-min-device-pixel-ratio: 2) {
    .video-fs-section {
        padding: 0;
        height: 40vh;
        margin: var(--spacing-section) 0;
    }
  }

</style>