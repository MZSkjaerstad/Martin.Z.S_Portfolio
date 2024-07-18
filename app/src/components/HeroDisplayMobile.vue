
<template>
   <div class="hero__display--mobile">
         <div class="hero__top"></div>


         <div class="hero__bottom">
            <div class="hero__full-name">
            <h3 class="hero__name">Martin Z. Skjærstad</h3>

            <div class="hero__title">Graphic Designer &amp; Frontend Developer</div>
            </div>

            <div class="hero__bottom-controllers">
            <p class="hero__portfolio-hook">Projects below</p>

            <div class="hero__increment">
               <div class="hero__object hero__object--1"></div>
            </div>

            <div class="hero__increment">
               <div class="hero__object hero__object--2"></div>
            </div>
            </div>
         </div>
      </div>
</template>

<style>
.hero__display--mobile {
  height: 100%;
  width: 100%;
  padding: var(--spacing-medium) 5% 0 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.hero__display--mobile .hero__full-name {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: var(--spacing-large);
}

.hero__display--mobile .hero__name {
  color: var(--tetriary-color);
  font-style: italic;
}

.hero__display--mobile .hero__title {
  margin-top: var(--spacing-padding);
  color: var(--tetriary-color);
  font-style: italic;
}

.hero__display--mobile .hero__bottom {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.hero__display--mobile .hero__divider {
  border-bottom: var(--increment-style);
  border-color: var(--tetriary-color);
  width: 100%;
  margin: var(--spacing-large) 0 var(--spacing-medium) 0;
}

.hero__display--mobile .hero__bottom-controllers {
  display: flex;
  flex-direction: column;
}

.hero__display--mobile .hero__portfolio-hook  {
  font-size: var(--font-size-data);
  font-style: italic;
  margin-bottom: 5vh;
}

.hero__display--mobile .hero__mobile-button {
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

/* Increments */

.hero__display--mobile .hero__increment {
   width: 100%;
   height: 0px;
   margin-bottom: 5vh;
}

.hero__display--mobile  .hero__object {
   border-top: var(--increment-style);
   border-color: var(--tetriary-color)
}

.hero__display--mobile  .hero__object--1 {
   width: 0.6rem;
}

.hero__display--mobile  .hero__object--2 {
   width: 0.8rem;
}

.hero__display--mobile  .hero__object--3 {
   width: 1.4rem;
}
</style>