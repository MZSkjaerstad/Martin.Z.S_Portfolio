<template>
  <div class="image-px-section" ref="parallaxContainer">
    <div class="image-px-section__content" :style="{ transform: `translate3d(0, ${scrollY}px, 0)` }">
      <div class="image-wrapper">
        <img :src="sectionData.imageFile" :alt="sectionData.caption" @load="handleImageLoad" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    sectionData: Object
  },

  data() {
    return {
      scrollY: 0,
      imageHeight: 0,
      isInViewport: false,
      scrollFactor: 0.15 // Adjust the scroll factor (lower value = more subtle effect)
    };
  },

  mounted() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.0 // Adjust threshold to trigger earlier
    };

    const observer = new IntersectionObserver(this.handleIntersection, options);
    observer.observe(this.$el);
  },

  methods: {
    handleIntersection(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting || entry.intersectionRatio > 0) {
          this.isInViewport = true;
          window.addEventListener('scroll', this.handleScroll, { passive: true });
        } else {
          this.isInViewport = false;
          window.removeEventListener('scroll', this.handleScroll);
        }
      });
    },

    handleScroll() {
      this.scrollY = (window.scrollY - this.$refs.parallaxContainer.offsetTop) * this.scrollFactor;
    },

    handleImageLoad() {
      this.imageHeight = this.$refs.parallaxContainer.clientHeight;
      this.scrollY = (window.scrollY - this.$refs.parallaxContainer.offsetTop) * this.scrollFactor;
    }
  }
};
</script>

<style>
.image-px-section {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: var(--Spacing-Section) 0;
}

.image-px-section__content {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease-out;
  will-change: transform;
}

.image-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-wrapper img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: none;
  display: block;
  transform: translateZ(0);
  transition: transform 0.3s ease-out;
  object-fit: cover;
}

/* Media query for mobile devices */
@media screen and (max-device-width: 767px) and (-webkit-min-device-pixel-ratio: 2) {
  .image-px-section {
    height: 35vh; /* Adjusted height for mobile */
    margin: var(--spacing-medium) 0;
  }

  .image-px-section__content {
    height: 100%;
  }

  .image-wrapper {
    display: flex;
    align-items: center;
  }

  .image-wrapper img {
    width: 100%;
    height: auto;
    object-fit: cover;
    object-position: center;
  }
}
</style>
