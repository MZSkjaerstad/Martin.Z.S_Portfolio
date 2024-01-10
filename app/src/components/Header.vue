<template>
  <header class="header">
    <div class="header__nav-tool">
      <div class="header__toolwrapper">
        <button class="header__toolbutton" @click="toTop">back to top</button>

        <div class="header__tooldivider"></div>

        <router-link :to="`/`">
          <button class="header__toolbutton"> home</button>
        </router-link>
      </div>
    </div>

    <button
      type="button"
      class="header__burger-button"
      @click="toggleMenu"
      aria-label="open header menu"
    >
      <svg
        width="19"
        height="14"
        viewBox="0 0 19 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect y="12" width="19" height="2" />
        <rect y="6" width="19" height="2" />
        <rect width="19" height="2" />
      </svg>
    </button>
  </header>

  <HeaderMenu
    v-if="menuToggled === true"
    :toggleMenu="toggleMenu"
    :projectLinks="headerData"
  />
</template>

<script>
import HeaderMenu from "./HeaderMenu.vue";

export default {
  components: {
    HeaderMenu,
  },

  data() {
    return {
      menuToggled: false,
    };
  },

  props: {
    headerData: Array,
  },

  methods: {
    toggleMenu() {
      this.menuToggled = !this.menuToggled;
    },

    toTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style>
.header {
  padding: var(--spacing-small) 3.3% 0.1rem 3.3%;
  mix-blend-mode: difference;
  z-index: 10000;
}

/* nav tool */

.header__nav-tool {
  width: 7%;
  position: fixed;
  left: 0;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
}

.header__toolwrapper {
  min-width: 80px;
  transform: rotate(-90deg);
  text-align: end;
  white-space: nowrap;
}

.header__toolbutton {
  width: auto;
  background: none;
  border: none;
  color: var(--secondary-color);
  font-size: var(--font-size-data);
  font-style: italic;
  text-decoration: none;
  transition: 0.3s ease-in-out;
}

.header__toolbutton:hover {
  font-weight: 600;
  transform: translateX(-0.6rem);
  transition: 0.3s ease-in-out;
}

.header__tooldivider {
  width: 100%;
  border-top: var(--increment-style);
  margin: 0.3rem 0 0.15rem 0;
}

/* Header buttons */

.header__button {
  color: var(--secondary-color);
  font-size: var(--font-size-body);
  font-style: italic;
  font-family: var(--font-family);
  text-transform: uppercase;
  background: var(--primary-color);
  border: none;
}

.header__button:hover {
  color: var(--highlight-color);
}

/* burger burron */

.header__burger-button {
  right: 0;
  margin-right: 3.25vw;
  position: fixed;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 26;
}

.header__burger-button rect {
  fill: var(--secondary-color);
}

.header__burger-button:hover rect {
  fill: var(--highlight-color);
  transition: 0.2s;
}

@media screen and (min-width: 1900px) {
  .header__burger-button svg {
    width: 26;
    height: 20;
  }
}

@media screen and (max-device-width: 767px ) {
  .header {
    padding: 2rem;
  }

  .header__nav-tool {
    display: none;
  }

  .header__burger-button {
    top: 4.8vh;
  }

  .header__burger-button svg {
    width: 4rem;
    height: 4rem;
  }
}
</style>