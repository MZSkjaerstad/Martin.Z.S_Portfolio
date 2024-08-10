<template>
   <div class="video-fs-section">
      <iframe :src="sectionData.videoUrl" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
   </div>
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
    position: relative;
    width: 100%;
    height: 0;
    padding: 0 0 56.25% 0;
    margin: var(--spacing-section) 0 0 0;
    overflow: hidden;
  }

  .video-fs-section iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0 7%;
  }

  @media screen and (max-device-width: 767px) and (-webkit-min-device-pixel-ratio: 2) {
    .video-fs-section iframe {
      padding: 0 5%;
    }
  }

</style>