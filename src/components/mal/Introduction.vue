<template>
   <div class="introduction">
      <div class="introduction__hook">
         <figure class="introduction__figure">
            <img class="introduction__image" :src="introductionData.image" alt="">

            <figcaption class="introduction__figcaption"></figcaption>
         </figure>

         <div class="introduction__title">
            {{ introductionData.title }}
         </div>
      </div>

      <div class="introduction__content">
         <div class="introduction__ruler"></div>

         <div class="introduction__information"></div>

         <div class="introduction__overview" v-for="content in introductionData.contentOverview"></div>
      </div>
   </div>
</template>

<script>
export default {
   props: {
      introductionData: {
         type: Object
      }
   },
}
</script>

<style>

@media screen and (max-device-width: 767px) and (-webkit-min-device-pixel-ratio: 2) {
   
}

</style>