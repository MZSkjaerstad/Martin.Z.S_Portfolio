<template>
  <section class="process">
    <h3 class="process__head">Process</h3>

    <div class="process__content">
      <div class="process__initials">
        <h2 class="process__subtitle"> {{processData.subtitle}} </h2>

        <p maxlength="60" class="process__intro"> {{processData.intro}} </p>
      </div>

      <div class="process__divider"></div>

      <div class="process__sections" v-for="section in processData.sections">
        <div class="process__section--text" v-if="section._type === 'sectionText'">
          <p class="process__section-title">00{{ processData.sections.indexOf(section) + 1 }} - {{section.sectionTitle}}</p>

          <p class="process__section-content">{{section.sectionContent}}</p>
        </div>

        <div class="process__section--image" v-if="section._type === 'sectionImage'">
          <img class="process__image-file" :src="section.imageFile" :alt="section.imageCaption">
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
};
</script>

<style>
.process {
  width: 100%;
  height: auto;
  padding: 3rem 7% 3rem 7%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/**** 2.0 Head ****/

.process__head {
  padding-bottom: var(--spacing-small);
  text-align: center;
}

/**** 3.0 Content ****/

.process__content {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.process__initials {
  display: flex;
  flex-direction: column;
  align-items: center;
  mix-blend-mode: difference;
}

.process__intro {
  max-width: 60ch;
  font-size: var(--font-size-intro);
  font-style: italic;
  padding: var(--spacing-medium) 0;
  mix-blend-mode: difference;
}

.process__divider {
  width: 100%;
  border-top: var(--increment-style);
  mix-blend-mode: difference;
}

/**** 4.0 Sections ****/

.process__sections {
  padding: var(--spacing-medium) 0;
}

.process__section-title {
  color: var(--secondary-color);
  font-size: var(--font-size-data);
  font-style: italic;
  padding-bottom: var(--spacing-small);
  mix-blend-mode: difference;
}

.process__section-content {
  max-width: 60ch;
  line-height: 150%;
  mix-blend-mode: difference;
}

.process__image-file {
  width: 100%;
}

@media screen and (max-device-width: 767px) and (-webkit-min-device-pixel-ratio: 2) {
  .process__content {
    width: 100%;
  }

  .process__subtitle{
    font-size: 5vh;
  }

  .process__initials{
    width: 95%;
  }

  .process__sections {
    width: 95%;
  }
}
</style>