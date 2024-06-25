<template>
  <section class="process" ref="processContainer">
    <div class="process__initials">
      <h2 class="process__subtitle">{{ processData.subtitle }}</h2>
    </div>

    <div class="process__article">
      <div class="process__content">
        <p maxlength="60" class="process__intro">{{ processData.intro }}</p>

        <div class="process__divider"></div>

        <div class="process__section" v-for="(section, index) in processData.sections" :key="index">
          <div v-if="section._type === 'sectionText'" class="process__section--text">
            <p class="process__section-title">00{{ index + 1 }} - {{ section.sectionTitle }}</p>
            <p class="process__section-content">{{ section.sectionContent }}</p>
          </div>

          <div v-if="section._type === 'sectionImage'" class="process__section--image">
            <img class="process__image-file" :src="section.imageFile" :alt="section.imageCaption">
          </div>

          <div class="process__divider" v-if="index < processData.sections.length - 1"></div>
        </div>
      </div>

      <div class="process__overview">
        <div class="process__sidebar">
          <div class="process__sidebar-linkwrapper">
            <div v-for="(section, index) in processData.sections" :key="index" @click="scrollToSection(index)" :class="{ 'active': activeSection === index}" class="process__sidebar-link">
              <div>00{{ index + 1 }} -</div>

              <div v-if="section._type === 'sectionText'">
                  {{section.sectionTitle }}
              </div>

              <div v-if="section._type === 'sectionImage'">
                {{section.imageCaption}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    processData: {
      type: Object,
    },
  },
  data() {
    return {
      activeSection: null,
    };
  },
  methods: {
  scrollToSection(index) {
    if (this.$refs.processContainer) {
      const sections = this.$refs.processContainer.querySelectorAll('.process__section');
      if (sections.length > 0) {
        const sectionElement = sections[index];
        if (sectionElement) {
          const sectionRect = sectionElement.getBoundingClientRect();
          const offsetTop = window.scrollY + sectionRect.top - (window.innerHeight / 2) + (sectionRect.height / 2);
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth',
          });
          this.activeSection = index;
        }
      }
    }
  },

  updateActiveSection() {
    const sections = this.$refs.processContainer.querySelectorAll('.process__section');
    let currentSectionIndex = null;

    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.5 && rect.bottom >= 0) {
        currentSectionIndex = index;
      }
    });

    this.activeSection = currentSectionIndex;
  },
},

  mounted() {
    window.addEventListener('scroll', this.updateActiveSection);
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.updateActiveSection);
  },
};
</script>

<style>
.process {
  width: 100%;
  height: auto;
  padding: 0 0 3rem 7%;
  color: var(--tetriary-color)
}

/**** 3.0 Content ****/


.process__content {
  width: 75%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.process__initials {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.process__subtitle {
  font-size: var(--font-size-title-medium);
  padding: 5rem 0;
  -webkit-text-stroke: 1.6px var(--tetriary-color);
}

.process__intro {
  max-width: 75ch;
  font-size: var(--font-size-intro);
  font-style: italic;
}

.process__divider {
  width: var(--increment-medium);
  border-bottom: var(--increment-style);
  border-color: var(--tetriary-color);
  padding-top: var(--spacing-medium);
}

/**** 4.0 Sections ****/

.process__article {
  display: flex;
}

.process__section {
  padding-top: var(--spacing-medium);
}

.process__section:last-child .process__divider {
  display: none;
}

.process__section-title {
  color: var(--tetriary-color);
  font-size: var(--font-size-data);
  font-style: italic;
  padding-bottom: var(--spacing-small);
}

.process__section-content {
  max-width: 90ch;
  line-height: 150%;
}

.process__image-file {
  width: 100%;
}

/* Process Overview */

.process__overview {
  width: 25%;
  margin-top: var(--spacing-medium);
}

.process__sidebar {
  position: sticky;
  display: flex;
  justify-content: center;
  top: 50%;
  transform: translateY(-50%);
}

.process__sidebar-link {
  font-size: var(--font-size-data);
  letter-spacing: 0.05rem;
  padding-top: var(--spacing-padding);
  transition: ease-in-out 0.2s;
  color: var(--highlight-color);
  display: flex;
  cursor: pointer;
}

.process__sidebar-link:hover {
  font-weight: 600;
  transition: ease-in-out 0.2s;
  color: var(--tetriary-color);
}

.process__sidebar-link.active {
  font-weight: bold;
  color: var(--tetriary-color);
  transition: ease-in-out 0.4s;
}

@media screen and (max-device-width: 767px) and (-webkit-min-device-pixel-ratio: 2) {
  .process__content {
    width: 100%;
  }

  .process__subtitle{
    font-size: var(--font-size-title-medium);
  }

  .process__initials{
    width: 95%;
  }

  .process__section {
    width: 95%;
  }

  .process__overview {
    display: none;
  }
}
</style>