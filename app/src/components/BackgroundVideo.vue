<template>
  <main class="background">
    <div class="background__container">
      <video class="background__video" autoplay muted loop playsinline>
        <source src="/visual_identity/video/particle_background.mp4" type="video/mp4">
      </video>
    </div>
  </main>
</template>

<style>
.background {
  position: sticky;
  width: 100vw;
  height: 0;
  top: 0;
  opacity: 0.9;
  z-index: -2;
  overflow: visible;
  animation: fadeInAnimation ease 2s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}

@keyframes fadeInAnimation {
    0% {
        opacity: 0;
        
    }
    100% {
        opacity: 1;
    }
}

.background__container {
  height: 100vh;
  position: relative;
  object-fit: cover;
  background-color: var(--primary-color);
}

.background__video {
  overflow: visible;
  height: 100%;
  width: 100%;
  object-fit: cover;
}
</style>
