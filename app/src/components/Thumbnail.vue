<template>
  <div class="thumbnail">
    <div
      :class="`thumbnail__increment thumbnail__increment-position--${thumbnail.position}`"
    >
      <div class="thumbnail__decoration"></div>

      <div class="thumbnail__counter">00{{ index + 1 }}</div>
    </div>

    <router-link
      class="thumbnail__link"
      :to="`/${thumbnail.slug}`"
      :aria-label="`go to ${thumbnail.projectName} project article`"
    >
      <div class="thumbnail__display">
        <div class="thumbnail__ruler">
          <div class="thumbnail__ruler-increment">
            <div class="thumbnail__ruler-object--small"></div>
          </div>

          <div class="thumbnail__ruler-increment">
            <div class="thumbnail__ruler-object--small"></div>
          </div>

          <div class="thumbnail__ruler-increment">
            <div class="thumbnail__ruler-object--small"></div>
          </div>

          <div class="thumbnail__ruler-increment">
            <div class="thumbnail__ruler-object--medium"></div>
          </div>

          <div class="thumbnail__ruler-increment">
            <div class="thumbnail__ruler-object--small"></div>
          </div>

          <div class="thumbnail__ruler-increment">
            <div class="thumbnail__ruler-object--small"></div>
          </div>

          <div class="thumbnail__ruler-increment">
            <div class="thumbnail__ruler-object--small"></div>
          </div>
        </div>

        <div class="thumbnail__content">
          <div class="thumbnail__info">
            <p class="thumbnail__year">
              {{ thumbnail.publishYear.slice(0, 4) }}
            </p>

            <div class="thumbnail__tags-container">
              <p class="thumbnail__tags" v-for="tag in thumbnail.tags">
                {{ tag }}
              </p>
            </div>

            <button class="thumbnail__mobile-button">View Project</button>
          </div>
          

          <div class="thumbnail__hook">
            <h2
              :class="`thumbnail__title thumbnail__title-position--${thumbnail.position}`"
            >
              {{ thumbnail.projectName }}
            </h2>
          </div>
        </div>

        <div class="thumbnail__image">
          <img
            :src="thumbnail.thumbnail"
            :alt="`go to ${thumbnail.projectName}`"
          />
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    thumbnail: Object,
    index: Number,
  },
};
</script>

<style>

/* 3.3 Link */
  .thumbnail__link {
    text-decoration: none !important;
  }

  .thumbnail__display {
    display: flex;
    padding-top: 5vh;
    width: 100%;
    cursor: pointer;
  }

  /* 3.5 Content */
  .thumbnail__content {
    display: flex;
    mix-blend-mode: difference;
  }

  /* 3.6 Info */
  .thumbnail__info {
    height: 100%;
    opacity: 0;
    padding-bottom: 5vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: 0.4s;
  }

  .thumbnail__year {
    font-size: var(--font-size-year);
    font-weight: bold;
    font-style: italic;
    text-decoration: none;
    transform: translateY(-0.7rem);
    color: var(--primary-color-tr);
    -webkit-text-stroke: var(--title-style);
    transition: 0.4s;
  }

  .thumbnail__tags-container {
    width: 75%;
    transition: 0.4s;
  }

  .thumbnail__tags {
    width: auto;
    display: inline-block;
    color: var(--secondary-color);
    font-size: var(--font-size-data);
    border: var(--increment-style);
    border-radius: 15px;
    padding: 0.09rem 0.4rem 0.1rem 0.4rem;
    margin: 0.2em;
    transition: 0.4s;
  }

  .thumbnail__mobile-button {
    display: none;
  }

  /* Hook */
  .thumbnail__hook {
    transition: 0.4s;
  }

  .thumbnail__title {
    width: 1rem;
    padding-top: 3vh;
    font-size: 8vh;
    transform: translateY(-2.5vh);
    color: var(--primary-color-tr);
    -webkit-text-stroke: var(--title-style);
    transition: 0.4s;
  }

  .thumbnail__title-position--1 {
    margin-left: 2rem;
  }

  .thumbnail__title-position--2 {
    margin-left: 19vw;
  }

  .thumbnail__title-position--3 {
    margin-left: 29vw;
  }

  .thumbnail__title-position--4 {
    margin-left: 43vw;
  }

  .thumbnail__title-position--5 {
    margin-left: 26vw;
  }

  /* 3.6 Image */
  .thumbnail__image {
    position: fixed;
    opacity: 0%;
    width: 53vw;
    height: 68vh;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    transition: 0.5s;
  }

  .thumbnail__image img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  /* 3.7 Hover */
  .thumbnail__display:hover .thumbnail__info {
    transform: translateX(0.6vw);
    opacity: 100;
    transition: 0.8s;
  }

  .thumbnail__display:hover .thumbnail__hook {
    transform: translateX(2.5vw);
    transition: 0.8s;
  }

  .thumbnail__display:hover .thumbnail__title {
    color: var(--secondary-color);
    -webkit-text-stroke: 0px;
    transition: 0.8s;
  }

  .thumbnail__display:hover .thumbnail__image {
    opacity: 100%;
    width: 55vw;
    height: 70vh;
    transition: 1s;
  }

  /* Thumbnail ruler */
  .thumbnail__increment {
    display: flex;
    position: relative;
    mix-blend-mode: difference;
  }

  .thumbnail__increment-position--1 {
    width: 24rem;
  }

  .thumbnail__increment-position--2 {
    width: 42vw;
  }

  .thumbnail__increment-position--3 {
    width: 54vw;
  }

  .thumbnail__increment-position--4 {
    width: 62vw;
  }

  .thumbnail__increment-position--5 {
    width: 75vw;
  }

  .thumbnail__decoration {
    width: 100%;
    border-top: var(--increment-style);
  }

  .thumbnail__counter {
    color: var(--secondary-color);
    font-size: var(--font-size-data);
    transform: translateY(-50%);
    left: 100%;
    margin-left: 0.8rem;
    position: absolute;
  }

  /* Ruler */
  .thumbnail__ruler-increment {
    height: 0px;
    margin-bottom: 5vh;
    mix-blend-mode: difference;
  }

  .thumbnail__ruler-object--small {
    width: 0.6rem;
    border-top: var(--increment-style);
  }

  .thumbnail__ruler-object--medium {
    width: 2rem;
    border-top: var(--increment-style);
  }

  /* Pad responsive */
  @media screen and (min-device-width: 768px) and (max-device-width: 1090px) {
    .thumbnail__increment {
      width: 24rem;
    }

    .thumbnail__title-position--2 {
      margin-left: 2rem;
    }

    .thumbnail__title-position--3 {
      margin-left: 2rem;
    }

    .thumbnail__title-position--4 {
      margin-left: 2rem;
    }

    .thumbnail__title-position--5 {
      margin-left: 2rem;
    }
  }

  /* Mobile responsive */

  @media screen and (max-device-width: 767px) {
    
    /* Ruler */
    .thumbnail__increment {
      width: 94%;
      flex-direction: column;
    }

    /* Content */
    .thumbnail__content {
      flex-direction: column-reverse;
    }

    .thumbnail__info {
      width: 86vw;
      opacity: 100;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-end;
      padding: 0 4rem 5vh 4rem;
      position: bottom;
    }

    .thumbnail__year {
      height: 100%;
      display: flex;
      align-items: flex-end;
      transform: translateY(1rem);
      -webkit-text-stroke: var(--secondary-color) 3px;
    }

    .thumbnail__tags-container {
      display: none;
    }

    .thumbnail__tags {
      border: solid var(--secondary-color) 3px;
      transform: translateY(0.6rem);
    }

    .thumbnail__mobile-button {
      display: inline-block;
      width: 15rem;
      background: none;
      color: var(--secondary-color);
      font-size: var(--font-size-data);
      font-family: var(--font-family);
      font-style: italic;
      text-decoration: none;
      border: var(--increment-style);
      border-radius: 15px;
      padding: var(--spacing-padding);
      mix-blend-mode: difference;
    }

    .thumbnail__description {
      display: none;
      position: bottom;
    }

    .thumbnail__title {
      font-size: 6vh;
      padding: 0 5rem;
      margin-left: 0;
    }

    .thumbnail__image {
      visibility: hidden;
    }

    /* Mobile Hover Cancelation */
    .thumbnail__display:hover .thumbnail__info {
      transform: translateX(none);
      opacity: none;
      transition: none;
    }

    .thumbnail__display:hover .thumbnail__hook {
      transform: translateX(none);
      transition: none;
    }

    .thumbnail__display:hover .thumbnail__title {
      color: none;
      -webkit-text-stroke: none;
      transition: none;
    }
  }
</style>