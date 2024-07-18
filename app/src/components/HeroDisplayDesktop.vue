<template>
   <div class="hero__display--desktop">

         <div class="hero__middle-section">
            
         </div>

         <div class="hero__lower-section">
            <div class="hero__lower-left" @mouseover="onMouseOver" @mouseout="onMouseLeave" >
               <div class="hero__title">
                  <h4>Martin</h4>

                  <h4>Zupfer</h4>

                  <h4>Skjærstad</h4>
               </div>

            <div class="hero__name-assembler">
               <div class="hero__names" v-for="(word, wordIndex) in words" :key="wordIndex">
                  <h1 class="hero__letters" v-for="(letter, letterIndex) in word.split('')" :key="letterIndex">
                  {{ letter }}
                  </h1>
               </div>
            </div>
            </div>

            <div class="hero__lower-right">
               <a class="hero__link" v-for="link in socials" :href="link.url" target="_blank" :aria-label="`Open ${link.linktype}`" @hover-start="onHoverStart" @hover-end="onHoverEnd">
                  <img class="hero__link-icon" :src="link.icon" alt="">
               </a>
            </div>
         </div>  
      </div>
</template>

<script>
export default {
   data() {
      return {
         inputString: 'Digital Designer'
      };
   },

   computed: {
      words() {
         return this.inputString.split(' ');
      }
   },

   props: {
      socials: Array,
   },

   methods: {
      onMouseOver() {
         // Logic for hover start event
         this.$emit('hover-start'); // Emitting hover start event to parent component (Hero3D.vue)
      },
      onMouseLeave() {
         // Logic for hover end event
         this.$emit('hover-end'); // Emitting hover end event to parent component (Hero3D.vue)
      },
   },
}
</script>


<style>
.hero__display--desktop {
  width: 100%;
  height: 100%;
  padding: var(--spacing-small) 0 5vh 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/* Middle */

.hero__display--desktop .hero__name-assembler {
   display: flex;
}

.hero__display--desktop .hero__names {
   display: flex;
   align-items: center;
   margin-right: var(--spacing-small);
}

.hero__display--desktop .hero__letters {
   transition: ease 0.4s;
   font-size: var(--font-size-title-small);
}

.hero__display--desktop .hero__letters:hover {
   color: var(--secondary-color);
   transition: ease 0.4s;
   margin: 0 0.5rem;
}

.hero__display--desktop .hero__letters:hover:first-child {
   cursor: pointer;
   color: var(--secondary-color);
   transition: ease 0.4s;
   margin: 0 0.5rem 0 0;
}

.hero__display--desktop .hero__title {
   color: var(--tetriary-color);
   font-style: italic;
   margin-left: var(--spacing-padding);
   display: flex;
}

.hero__display--desktop .hero__title h4 {
   margin: 0 0.3rem 0 0;
}

.hero__display--desktop .hero__title h4:hover {
   margin: 0 1rem 0 1rem;
}

.hero__display--desktop .hero__title:first-child h4:hover {
   margin: 0 0 0 1rem;
}

/* Lower */

.hero__display--desktop .hero__lower-section {
   display: flex;
   justify-content: space-between;
}



.hero__display--desktop .hero__project-cta {
   border-bottom: var(--increment-style);
   border-color: var(--tetriary-color);
   padding: var(--spacing-small) 0;
   font-size: var(--font-size-data);
   font-style: italic;
}

/* Socials */

.hero__display--desktop .hero__lower-right {
   display: flex;
   flex-wrap: wrap-reverse;
   padding: var(--spacing-padding) 0;
}

.hero__display--desktop .hero__link {
   height: 6vh;
   margin-right: var(--spacing-padding);
   position: relative;
   z-index: 10;
   border: var(--increment-style);
   border-radius: 15%;
   transition: 0.3s;
   mix-blend-mode: difference;
}

.hero__display--desktop .hero__link-icon {
   height: 100%;
   z-index: 10;
   mix-blend-mode: difference;
}

.hero__display--desktop .hero__link:hover {
   background-color: var(--secondary-color);
   transition: 0.3s;
   padding: 0.2rem;
}
</style>