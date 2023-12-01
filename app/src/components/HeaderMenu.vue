<template>
  <nav class="header__menu">
    <button
      class="header__x-button"
      @click="toggleMenu"
      aria-label="close header menu"
    >
      <svg
        width="15"
        height="16"
        viewBox="0 0 15 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="1.4895"
          y="0.575439"
          width="19"
          height="2"
          transform="rotate(45 1.4895 0.575439)"
          fill="#E06339"
        />
        <rect
          x="14.9246"
          y="1.98962"
          width="19"
          height="2"
          transform="rotate(135 14.9246 1.98962)"
          fill="#E06339"
        />
      </svg>
    </button>

    <div class="header__content">
      <div class="header__title">Navigation</div>

      <div class="header__home">
        <router-link
          class="header__link"
          :to="'/'"
          @click="toggleMenu"
          aria-label="Go back home"
        >
          <div class="header__item">
            <div class="header__item-number">000</div>

            <div class="header__item-link">home</div>
          </div>
        </router-link>
      </div>

      <div class="header__divider" />

      <div class="header__title">Projects</div>

      <div class="header__projects">
        <div v-if="loading === true">Loading</div>

        <router-link
          v-else
          class="header__link"
          :to="`/${link.slug}`"
          @click="toggleMenu"
          v-for="(link, index) in projectLinks"
          :aria-label="`Go to ${link.projectName} project article.`"
        >
          <div class="Header__project-link header__item">
            <div class="header__item-number">00{{ index + 1 }}</div>

            <div class="header__item-link">
              {{ this.truncate(link.projectName, 1) }}
            </div>
          </div>
        </router-link>
      </div>

      <div class="header__divider" />

      <div class="header__title">About</div>

      <div class="header__about">
        <router-link
          class="header__link"
          :to="'/about-me'"
          @click="toggleMenu"
          aria-label="Go to about me article."
        >
          <div class="header__item">
            <div class="header__item-number">
              00{{ projectLinks.length + 1 }}
            </div>

            <div class="header__item-link">About me</div>
          </div>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    toggleMenu: Function,
    projectLinks: Array,
  },

  computed: {
    thumbnails() {
      return this.$store.getters.getThumbnails;
    },
  },

  methods: {
    /* Funksjon funnet på https://www.w3resource.com/javascript-exercises/javascript-string-exercise-24.php */
    truncate(str, no_words) {
      return str.split(" ").splice(0, no_words).join(" ");
    },
  },
};
</script>

<style>
  .header__menu {
    width: 25rem;
    height: 100vh;
    position: fixed;
    background: var(--primary-color);
    border-left: var(--increment-style);
    padding: var(--spacing-small) 3.2rem 1rem 0rem;
    top: 0;
    right: 0;
    z-index: 26;
  }

  /* X button */

  .header__x-button {
    position: absolute;
    right: 0;
    padding-right: 3.25vw;
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: flex-end;
  }

  .header__x-button rect {
    fill: var(--secondary-color);
  }

  .header__x-button:hover rect {
    fill: var(--highlight-color);
    transition: 0.2s;
  }

  /* Content */

  .header__content {
    height: 100%;
    padding: 3rem 0rem 3rem 3rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .header__divider {
    width: 5rem;
    border-top: var(--increment-style);
  }

  .header__title {
    color: var(--secondary-color);
    font-size: var(--font-size-data);
    font-style: italic;
    padding-top: 1rem;
  }

  .header__link {
    text-decoration: none;
  }

  .header__item {
    display: flex;
    align-items: center;
  }

  .header__item-link {
    font-size: 2.2rem;
    font-weight: bold;
    font-style: italic;
    text-transform: uppercase;
    color: var(--primary-color);
    -webkit-text-stroke: var(--title-style);
    padding: 0.1rem 0.9rem;
    transition: 0.2s;
  }

  .header__item-number {
    color: var(--secondary-color);
    font-size: var(--font-size-data);
    margin-right: 2rem;
  }

  .header__item:hover .header__item-link {
    color: var(--secondary-color);
    -webkit-text-stroke: none;
    transform: translateX(1rem);
    transition: 0.2s;
  }

  @media screen and (min-width: 1900px) {
    .header__menu {
      width: 35rem;
    }

    .header__x-button svg {
      width: 28;
      height: 21;
    }

    .header__item-link {
      font-size: 3rem;
    }
  }

  @media screen and (max-device-width: 767px) {
    .header__menu {
      width: 100vw;
      border: none;
      padding: 8rem 0rem 20rem 0rem;
    }

    .header__x-button {
      top: 4.8vh;
    }

    .header__x-button svg {
      width: 4rem;
      height: 4rem;
    }

    .header__content {
      align-items: center;
      padding: 0;
    }

    .header__divider {
      width: 75%;
      border-top: var(--increment-style);
    }

    .header__title {
      text-align: center;
    }

    .header__item-link {
      font-size: 6.5rem;
    }

    .header__item:hover .header__item-link {
      color: var(--highlight-color);
      font-size: 6.5rem;
      -webkit-text-stroke: none;
      transition: 0.2s;
    }

    .header__contact {
      padding-top: 10rem;
    }

    .header__socials {
      width: 100%;
      justify-content: space-between;
    }
    .header__socials-link {
      margin: 0;
    }
  }
</style>