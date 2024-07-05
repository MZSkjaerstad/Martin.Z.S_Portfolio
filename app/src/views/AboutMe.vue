<template>
   <main v-if="loading === true">
      <Loading /> 
   </main>

   <main class="about" v-else>
      <section class="about__essentials">
         <div class="about__essentials-wrapper">
            <div class="about__name about__name--desktop">
               <h3 class="about__fullname"> {{ content.fullName }} </h3>

               <p class="about__title">{{ content.workingTitle }}</p>
            </div>

            <figure class="about__figure">
               <div class="about__figure--loading">
                  <Vue3Lottie class="about__loading-icon" :animationData="loadingJSON" :loop="true" :autoplay="true" :height="15" :width="15" />
               </div>

               <div class="about__figure-markers">
                  <div class="about__figure-marker--upper">
                     <div class="about__figure-marker  about__figure-marker--upper-left"></div>

                     <div class="about__figure-marker about__figure-marker--upper-right"></div>
                  </div>

                  <div class="about__figure-marker--lower">
                     <div class="about__figure-marker about__figure-marker--lower-left"></div>

                     <div class="about__figure-marker about__figure-marker--lower-right"></div>
                  </div>
               </div>

               <img class="about__image" :src="content.profilePicture" alt="">
            </figure>

            <div class="about__name about__name--mobile">
               <h3 class="about__fullname"> {{ content.fullName }} </h3>

               <p class="about__title">{{ content.workingTitle }}</p>
            </div>

            <div class="about__socials">
               <p class="about__category">Social links:</p>

               <div class="about__link-container">
                  <a class="about__link" v-for="link in content.socials" :href="link.url" target="_blank">
                     <img class="about__link-icon" :src="link.icon" alt="">
                  </a>
               </div>
            </div>
         </div>
      </section>

      <section class="about__article">
         <h3 class="about__header">About me</h3>

         <div class="about__divider-top"></div>

         <div class="about__skills">
            <div class="about__adobe">
               <p class="about__category">Adobe softwares:</p>

               <p v-for="software in content.adobeSoftware">
                  {{ software }}
               </p>
            </div>

            <div class="about__webdesign">
               <p class="about__category">Webdesign tools:</p>

               <p v-for="tool in content.webdesignTools">
                  {{ tool }}
               </p>
            </div>

            <div class="about__languages">
               <p class="about__category">Code languages:</p>

               <p v-for="language in content.codeLanguages">
                  {{ language }}
               </p>
            </div>
         </div>

         <div class="about__divider"></div>

         <div class="about__background">
            <p class="about__category">Background:</p>
            
            <p class="about__section" v-for="section in content.background"> {{ section.section }} </p>
         </div>

         <div class="about__divider"></div>

         <div class="about__strengths">
            <p class="about__category">Strengths:</p>

            <p class="about__section" v-for="section in content.strengths">
               {{ section.section }}
            </p>
         </div>

         <div class="about__divider"></div>

         <div class="about__email">
            <p>Work with me? <br> Send me an <a class="about__email-link" href="mailto:martskjae@hotmail.no">email!</a></p>
         </div>
      </section>
   </main>
</template>

<script>
   import Loading from '../components/Loading.vue'
   import viewMixin from '../mixins/viewMixin.js'
   import query from '../groq/aboutMe.groq?raw'
   import { Vue3Lottie } from 'vue3-lottie'

   export default {
      components: {
         Loading,
         Vue3Lottie
      },

      data() {
         return {
            loadingJSON: {"nm":"Loading Animation","ddd":0,"h":700,"w":700,"meta":{"g":"LottieFiles AE 1.1.0"},"layers":[{"ty":0,"nm":"Loading","sr":1,"st":0,"op":900.000036657751,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[350,350,0],"ix":1},"s":{"a":0,"k":[224,224,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[350,350,0],"ix":2},"r":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":0},{"s":[360],"t":150.000006109625}],"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"w":700,"h":700,"refId":"comp_0","ind":1}],"v":"4.8.0","fr":29.9700012207031,"op":151.000006150356,"ip":0,"assets":[{"nm":"","id":"comp_0","layers":[{"ty":4,"nm":"Shape Layer 3 Blue","sr":1,"st":0,"op":900.000036657751,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[-21,4,0],"ix":1},"s":{"a":0,"k":[223,223,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[350,350,0],"ix":2},"r":{"a":0,"k":60,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Rectangle 1","ix":1,"cix":2,"np":3,"it":[{"ty":"rc","bm":0,"hd":false,"mn":"ADBE Vector Shape - Rect","nm":"Rectangle Path 1","d":1,"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"s":{"a":0,"k":[700,700],"ix":2}},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Stroke 1","lc":1,"lj":1,"ml":4,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":6,"ix":5},"c":{"a":0,"k":[0,0,0],"ix":3}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0,0,0],"ix":4},"r":1,"o":{"a":0,"k":0,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0.469,-0.562],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Shape 1","ix":2,"cix":2,"np":3,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":false,"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-65,4],[22,4]]},"ix":2}},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Stroke 1","lc":2,"lj":2,"ml":1,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":4,"ix":5},"c":{"a":0,"k":[1,1,1],"ix":3}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0,0,0],"ix":4},"r":1,"o":{"a":0,"k":0,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"tm","bm":0,"hd":false,"mn":"ADBE Vector Filter - Trim","nm":"Trim Paths 1","ix":3,"e":{"a":1,"k":[{"o":{"x":0.796,"y":0},"i":{"x":0.204,"y":1},"s":[1],"t":-141.801},{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[100],"t":-105.801},{"o":{"x":0.796,"y":0},"i":{"x":0.204,"y":1},"s":[100],"t":-105.628},{"o":{"x":0.167,"y":0},"i":{"x":0.667,"y":1},"s":[0.565],"t":-69.97},{"o":{"x":0.796,"y":0},"i":{"x":0.204,"y":1},"s":[1],"t":-65.713},{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[100],"t":-29.713},{"o":{"x":0.796,"y":0},"i":{"x":0.204,"y":1},"s":[100],"t":-29.539},{"o":{"x":0.167,"y":0},"i":{"x":0.833,"y":1},"s":[0.565],"t":6.119},{"o":{"x":0.796,"y":0},"i":{"x":0.204,"y":1},"s":[1],"t":10.113},{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[100],"t":46.113},{"o":{"x":0.796,"y":0},"i":{"x":0.204,"y":1},"s":[100],"t":46.286},{"o":{"x":0.167,"y":0},"i":{"x":0.667,"y":1},"s":[0.565],"t":81.944},{"o":{"x":0.796,"y":0},"i":{"x":0.204,"y":1},"s":[1],"t":86.201},{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[100],"t":122.201},{"o":{"x":0.796,"y":0},"i":{"x":0.204,"y":1},"s":[100],"t":122.375},{"s":[0.565],"t":158.032506436796}],"ix":2},"o":{"a":0,"k":0,"ix":3},"s":{"a":1,"k":[{"o":{"x":0.796,"y":0},"i":{"x":0.204,"y":1},"s":[0],"t":-139.176},{"o":{"x":0.167,"y":0},"i":{"x":0.833,"y":1},"s":[99],"t":-103.176},{"o":{"x":0.796,"y":0},"i":{"x":0.204,"y":1},"s":[98.734],"t":-103.144},{"o":{"x":0.167,"y":0},"i":{"x":0.833,"y":1},"s":[0.266],"t":-66.915},{"o":{"x":0.796,"y":0},"i":{"x":0.204,"y":1},"s":[0],"t":-63.088},{"o":{"x":0.167,"y":0},"i":{"x":0.833,"y":1},"s":[99],"t":-27.088},{"o":{"x":0.796,"y":0},"i":{"x":0.204,"y":1},"s":[98.734],"t":-27.055},{"o":{"x":0.167,"y":0},"i":{"x":0.833,"y":1},"s":[0.266],"t":9.174},{"o":{"x":0.796,"y":0},"i":{"x":0.204,"y":1},"s":[0],"t":12.738},{"o":{"x":0.167,"y":0},"i":{"x":0.833,"y":1},"s":[99],"t":48.738},{"o":{"x":0.796,"y":0},"i":{"x":0.204,"y":1},"s":[98.734],"t":48.77},{"o":{"x":0.167,"y":0},"i":{"x":0.833,"y":1},"s":[0.266],"t":84.999},{"o":{"x":0.796,"y":0},"i":{"x":0.204,"y":1},"s":[0],"t":88.826},{"o":{"x":0.167,"y":0},"i":{"x":0.833,"y":1},"s":[99],"t":124.826},{"o":{"x":0.796,"y":0},"i":{"x":0.204,"y":1},"s":[98.734],"t":124.859},{"s":[0.266],"t":161.087506561228}],"ix":1},"m":1}],"ind":1},{"ty":4,"nm":"Shape Layer 3 Orange","sr":1,"st":0,"op":900.000036657751,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[-21,4,0],"ix":1},"s":{"a":0,"k":[223,223,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[350,350,0],"ix":2},"r":{"a":0,"k":60,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Rectangle 1","ix":1,"cix":2,"np":3,"it":[{"ty":"rc","bm":0,"hd":false,"mn":"ADBE Vector Shape - Rect","nm":"Rectangle Path 1","d":1,"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"s":{"a":0,"k":[700,700],"ix":2}},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Stroke 1","lc":1,"lj":1,"ml":4,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":6,"ix":5},"c":{"a":0,"k":[0,0,0],"ix":3}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0,0,0],"ix":4},"r":1,"o":{"a":0,"k":0,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0.469,-0.562],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Shape 1","ix":2,"cix":2,"np":3,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":false,"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-65,4],[22,4]]},"ix":2}},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Stroke 1","lc":2,"lj":2,"ml":1,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":6,"ix":5},"c":{"a":0,"k":[0,0,0],"ix":3}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0,0,0],"ix":4},"r":1,"o":{"a":0,"k":0,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"tm","bm":0,"hd":false,"mn":"ADBE Vector Filter - Trim","nm":"Trim Paths 1","ix":3,"e":{"a":1,"k":[{"o":{"x":0.796,"y":0},"i":{"x":0.204,"y":1},"s":[1],"t":-141.801},{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[100],"t":-105.801},{"o":{"x":0.796,"y":0},"i":{"x":0.204,"y":1},"s":[100],"t":-105.628},{"o":{"x":0.167,"y":0},"i":{"x":0.667,"y":1},"s":[0.565],"t":-69.97},{"o":{"x":0.796,"y":0},"i":{"x":0.204,"y":1},"s":[1],"t":-65.713},{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[100],"t":-29.713},{"o":{"x":0.796,"y":0},"i":{"x":0.204,"y":1},"s":[100],"t":-29.539},{"o":{"x":0.167,"y":0},"i":{"x":0.833,"y":1},"s":[0.565],"t":6.119},{"o":{"x":0.796,"y":0},"i":{"x":0.204,"y":1},"s":[1],"t":10.113},{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[100],"t":46.113},{"o":{"x":0.796,"y":0},"i":{"x":0.204,"y":1},"s":[100],"t":46.286},{"o":{"x":0.167,"y":0},"i":{"x":0.667,"y":1},"s":[0.565],"t":81.944},{"o":{"x":0.796,"y":0},"i":{"x":0.204,"y":1},"s":[1],"t":86.201},{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[100],"t":122.201},{"o":{"x":0.796,"y":0},"i":{"x":0.204,"y":1},"s":[100],"t":122.375},{"s":[0.565],"t":158.032506436796}],"ix":2},"o":{"a":0,"k":0,"ix":3},"s":{"a":1,"k":[{"o":{"x":0.796,"y":0},"i":{"x":0.204,"y":1},"s":[0],"t":-139.176},{"o":{"x":0.167,"y":0},"i":{"x":0.833,"y":1},"s":[99],"t":-103.176},{"o":{"x":0.796,"y":0},"i":{"x":0.204,"y":1},"s":[98.734],"t":-103.144},{"o":{"x":0.167,"y":0},"i":{"x":0.833,"y":1},"s":[0.266],"t":-66.915},{"o":{"x":0.796,"y":0},"i":{"x":0.204,"y":1},"s":[0],"t":-63.088},{"o":{"x":0.167,"y":0},"i":{"x":0.833,"y":1},"s":[99],"t":-27.088},{"o":{"x":0.796,"y":0},"i":{"x":0.204,"y":1},"s":[98.734],"t":-27.055},{"o":{"x":0.167,"y":0},"i":{"x":0.833,"y":1},"s":[0.266],"t":9.174},{"o":{"x":0.796,"y":0},"i":{"x":0.204,"y":1},"s":[0],"t":12.738},{"o":{"x":0.167,"y":0},"i":{"x":0.833,"y":1},"s":[99],"t":48.738},{"o":{"x":0.796,"y":0},"i":{"x":0.204,"y":1},"s":[98.734],"t":48.77},{"o":{"x":0.167,"y":0},"i":{"x":0.833,"y":1},"s":[0.266],"t":84.999},{"o":{"x":0.796,"y":0},"i":{"x":0.204,"y":1},"s":[0],"t":88.826},{"o":{"x":0.167,"y":0},"i":{"x":0.833,"y":1},"s":[99],"t":124.826},{"o":{"x":0.796,"y":0},"i":{"x":0.204,"y":1},"s":[98.734],"t":124.859},{"s":[0.266],"t":161.087506561228}],"ix":1},"m":1}],"ind":2},{"ty":4,"nm":"Shape Layer 2 Blue","sr":1,"st":0,"op":900.000036657751,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[-21,4,0],"ix":1},"s":{"a":0,"k":[223,223,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[350,350,0],"ix":2},"r":{"a":0,"k":31,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Shape 1","ix":1,"cix":2,"np":3,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":false,"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-65,4],[22,4]]},"ix":2}},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Stroke 1","lc":2,"lj":2,"ml":1,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":4,"ix":5},"c":{"a":0,"k":[1,1,1],"ix":3}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0,0,0],"ix":4},"r":1,"o":{"a":0,"k":0,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"tm","bm":0,"hd":false,"mn":"ADBE Vector Filter - Trim","nm":"Trim Paths 1","ix":2,"e":{"a":1,"k":[{"o":{"x":0.796,"y":0},"i":{"x":0.204,"y":1},"s":[1],"t":-127.028},{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[100],"t":-95.398},{"o":{"x":0.796,"y":0},"i":{"x":0.204,"y":1},"s":[100],"t":-95.245},{"o":{"x":0.167,"y":0},"i":{"x":0.667,"y":1},"s":[0.565],"t":-63.916},{"o":{"x":0.796,"y":0},"i":{"x":0.204,"y":1},"s":[1],"t":-60.176},{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[100],"t":-28.546},{"o":{"x":0.796,"y":0},"i":{"x":0.204,"y":1},"s":[100],"t":-28.393},{"o":{"x":0.167,"y":0},"i":{"x":0.833,"y":1},"s":[0.565],"t":2.936},{"o":{"x":0.796,"y":0},"i":{"x":0.204,"y":1},"s":[1],"t":5.688},{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[100],"t":41.688},{"o":{"x":0.796,"y":0},"i":{"x":0.204,"y":1},"s":[100],"t":41.861},{"o":{"x":0.167,"y":0},"i":{"x":0.667,"y":1},"s":[0.565],"t":77.519},{"o":{"x":0.796,"y":0},"i":{"x":0.204,"y":1},"s":[1],"t":81.776},{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[100],"t":117.776},{"o":{"x":0.796,"y":0},"i":{"x":0.204,"y":1},"s":[100],"t":117.95},{"s":[0.565],"t":153.607506256562}],"ix":2},"o":{"a":0,"k":0,"ix":3},"s":{"a":1,"k":[{"o":{"x":0.796,"y":0},"i":{"x":0.204,"y":1},"s":[0],"t":-124.721},{"o":{"x":0.167,"y":0},"i":{"x":0.833,"y":1},"s":[99],"t":-93.091},{"o":{"x":0.796,"y":0},"i":{"x":0.204,"y":1},"s":[98.734],"t":-93.063},{"o":{"x":0.167,"y":0},"i":{"x":0.833,"y":1},"s":[0.266],"t":-61.233},{"o":{"x":0.796,"y":0},"i":{"x":0.204,"y":1},"s":[0],"t":-57.869},{"o":{"x":0.167,"y":0},"i":{"x":0.833,"y":1},"s":[99],"t":-26.239},{"o":{"x":0.796,"y":0},"i":{"x":0.204,"y":1},"s":[98.734],"t":-26.211},{"o":{"x":0.167,"y":0},"i":{"x":0.833,"y":1},"s":[0.266],"t":5.62},{"o":{"x":0.796,"y":0},"i":{"x":0.204,"y":1},"s":[0],"t":8.313},{"o":{"x":0.167,"y":0},"i":{"x":0.833,"y":1},"s":[99],"t":44.313},{"o":{"x":0.796,"y":0},"i":{"x":0.204,"y":1},"s":[98.734],"t":44.345},{"o":{"x":0.167,"y":0},"i":{"x":0.833,"y":1},"s":[0.266],"t":80.574},{"o":{"x":0.796,"y":0},"i":{"x":0.204,"y":1},"s":[0],"t":84.401},{"o":{"x":0.167,"y":0},"i":{"x":0.833,"y":1},"s":[99],"t":120.401},{"o":{"x":0.796,"y":0},"i":{"x":0.204,"y":1},"s":[98.734],"t":120.434},{"s":[0.266],"t":156.662506380994}],"ix":1},"m":1}],"ind":3},{"ty":4,"nm":"Shape Layer 2 Orange","sr":1,"st":0,"op":900.000036657751,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[-21,4,0],"ix":1},"s":{"a":0,"k":[223,223,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[350,350,0],"ix":2},"r":{"a":0,"k":31,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Shape 1","ix":1,"cix":2,"np":3,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":false,"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-65,4],[22,4]]},"ix":2}},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Stroke 1","lc":2,"lj":2,"ml":1,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":6,"ix":5},"c":{"a":0,"k":[0,0,0],"ix":3}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0,0,0],"ix":4},"r":1,"o":{"a":0,"k":0,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"tm","bm":0,"hd":false,"mn":"ADBE Vector Filter - Trim","nm":"Trim Paths 1","ix":2,"e":{"a":1,"k":[{"o":{"x":0.796,"y":0},"i":{"x":0.204,"y":1},"s":[1],"t":-127.028},{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[100],"t":-95.398},{"o":{"x":0.796,"y":0},"i":{"x":0.204,"y":1},"s":[100],"t":-95.245},{"o":{"x":0.167,"y":0},"i":{"x":0.667,"y":1},"s":[0.565],"t":-63.916},{"o":{"x":0.796,"y":0},"i":{"x":0.204,"y":1},"s":[1],"t":-60.176},{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[100],"t":-28.546},{"o":{"x":0.796,"y":0},"i":{"x":0.204,"y":1},"s":[100],"t":-28.393},{"o":{"x":0.167,"y":0},"i":{"x":0.833,"y":1},"s":[0.565],"t":2.936},{"o":{"x":0.796,"y":0},"i":{"x":0.204,"y":1},"s":[1],"t":5.688},{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[100],"t":41.688},{"o":{"x":0.796,"y":0},"i":{"x":0.204,"y":1},"s":[100],"t":41.861},{"o":{"x":0.167,"y":0},"i":{"x":0.667,"y":1},"s":[0.565],"t":77.519},{"o":{"x":0.796,"y":0},"i":{"x":0.204,"y":1},"s":[1],"t":81.776},{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[100],"t":117.776},{"o":{"x":0.796,"y":0},"i":{"x":0.204,"y":1},"s":[100],"t":117.95},{"s":[0.565],"t":153.607506256562}],"ix":2},"o":{"a":0,"k":0,"ix":3},"s":{"a":1,"k":[{"o":{"x":0.796,"y":0},"i":{"x":0.204,"y":1},"s":[0],"t":-124.721},{"o":{"x":0.167,"y":0},"i":{"x":0.833,"y":1},"s":[99],"t":-93.091},{"o":{"x":0.796,"y":0},"i":{"x":0.204,"y":1},"s":[98.734],"t":-93.063},{"o":{"x":0.167,"y":0},"i":{"x":0.833,"y":1},"s":[0.266],"t":-61.233},{"o":{"x":0.796,"y":0},"i":{"x":0.204,"y":1},"s":[0],"t":-57.869},{"o":{"x":0.167,"y":0},"i":{"x":0.833,"y":1},"s":[99],"t":-26.239},{"o":{"x":0.796,"y":0},"i":{"x":0.204,"y":1},"s":[98.734],"t":-26.211},{"o":{"x":0.167,"y":0},"i":{"x":0.833,"y":1},"s":[0.266],"t":5.62},{"o":{"x":0.796,"y":0},"i":{"x":0.204,"y":1},"s":[0],"t":8.313},{"o":{"x":0.167,"y":0},"i":{"x":0.833,"y":1},"s":[99],"t":44.313},{"o":{"x":0.796,"y":0},"i":{"x":0.204,"y":1},"s":[98.734],"t":44.345},{"o":{"x":0.167,"y":0},"i":{"x":0.833,"y":1},"s":[0.266],"t":80.574},{"o":{"x":0.796,"y":0},"i":{"x":0.204,"y":1},"s":[0],"t":84.401},{"o":{"x":0.167,"y":0},"i":{"x":0.833,"y":1},"s":[99],"t":120.401},{"o":{"x":0.796,"y":0},"i":{"x":0.204,"y":1},"s":[98.734],"t":120.434},{"s":[0.266],"t":156.662506380994}],"ix":1},"m":1}],"ind":4},{"ty":4,"nm":"Shape Layer 1 Blue","sr":1,"st":0,"op":900.000036657751,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[-21,4,0],"ix":1},"s":{"a":0,"k":[223,223,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[350,350,0],"ix":2},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Shape 1","ix":1,"cix":2,"np":3,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":false,"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-65,4],[22,4]]},"ix":2}},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Stroke 1","lc":2,"lj":2,"ml":1,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":4,"ix":5},"c":{"a":0,"k":[1,1,1],"ix":3}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0,0,0],"ix":4},"r":1,"o":{"a":0,"k":0,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"tm","bm":0,"hd":false,"mn":"ADBE Vector Filter - Trim","nm":"Trim Paths 1","ix":2,"e":{"a":1,"k":[{"o":{"x":0.796,"y":0},"i":{"x":0.204,"y":1},"s":[1],"t":0},{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[100],"t":36},{"o":{"x":0.796,"y":0},"i":{"x":0.204,"y":1},"s":[100],"t":36.174},{"o":{"x":0.167,"y":0},"i":{"x":0.667,"y":1},"s":[0.565],"t":71.831},{"o":{"x":0.796,"y":0},"i":{"x":0.204,"y":1},"s":[1],"t":76.089},{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[100],"t":112.089},{"o":{"x":0.796,"y":0},"i":{"x":0.204,"y":1},"s":[100],"t":112.263},{"s":[0.565],"t":147.920006024905}],"ix":2},"o":{"a":0,"k":0,"ix":3},"s":{"a":1,"k":[{"o":{"x":0.796,"y":0},"i":{"x":0.204,"y":1},"s":[0],"t":2.625},{"o":{"x":0.167,"y":0},"i":{"x":0.833,"y":1},"s":[99],"t":38.625},{"o":{"x":0.796,"y":0},"i":{"x":0.204,"y":1},"s":[98.734],"t":38.658},{"o":{"x":0.167,"y":0},"i":{"x":0.833,"y":1},"s":[0.266],"t":74.886},{"o":{"x":0.796,"y":0},"i":{"x":0.204,"y":1},"s":[0],"t":78.714},{"o":{"x":0.167,"y":0},"i":{"x":0.833,"y":1},"s":[99],"t":114.714},{"o":{"x":0.796,"y":0},"i":{"x":0.204,"y":1},"s":[98.734],"t":114.746},{"s":[0.266],"t":150.975006149338}],"ix":1},"m":1}],"ind":5},{"ty":4,"nm":"Shape Layer 1 Orange","sr":1,"st":0,"op":900.000036657751,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[-21,4,0],"ix":1},"s":{"a":0,"k":[223,223,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[350,350,0],"ix":2},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"ef":[],"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Shape 1","ix":1,"cix":2,"np":3,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Path 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":false,"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-65,4],[22,4]]},"ix":2}},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Stroke 1","lc":2,"lj":2,"ml":1,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":6,"ix":5},"c":{"a":0,"k":[0,0,0],"ix":3}},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fill 1","c":{"a":0,"k":[0,0,0],"ix":4},"r":1,"o":{"a":0,"k":0,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0,0],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]},{"ty":"tm","bm":0,"hd":false,"mn":"ADBE Vector Filter - Trim","nm":"Trim Paths 1","ix":2,"e":{"a":1,"k":[{"o":{"x":0.796,"y":0},"i":{"x":0.204,"y":1},"s":[1],"t":0},{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[100],"t":36},{"o":{"x":0.796,"y":0},"i":{"x":0.204,"y":1},"s":[100],"t":36.174},{"o":{"x":0.167,"y":0},"i":{"x":0.667,"y":1},"s":[0.565],"t":71.831},{"o":{"x":0.796,"y":0},"i":{"x":0.204,"y":1},"s":[1],"t":76.089},{"o":{"x":0.333,"y":0},"i":{"x":0.667,"y":1},"s":[100],"t":112.089},{"o":{"x":0.796,"y":0},"i":{"x":0.204,"y":1},"s":[100],"t":112.263},{"s":[0.565],"t":147.920006024905}],"ix":2},"o":{"a":0,"k":0,"ix":3},"s":{"a":1,"k":[{"o":{"x":0.796,"y":0},"i":{"x":0.204,"y":1},"s":[0],"t":2.625},{"o":{"x":0.167,"y":0},"i":{"x":0.833,"y":1},"s":[99],"t":38.625},{"o":{"x":0.796,"y":0},"i":{"x":0.204,"y":1},"s":[98.734],"t":38.658},{"o":{"x":0.167,"y":0},"i":{"x":0.833,"y":1},"s":[0.266],"t":74.886},{"o":{"x":0.796,"y":0},"i":{"x":0.204,"y":1},"s":[0],"t":78.714},{"o":{"x":0.167,"y":0},"i":{"x":0.833,"y":1},"s":[99],"t":114.714},{"o":{"x":0.796,"y":0},"i":{"x":0.204,"y":1},"s":[98.734],"t":114.746},{"s":[0.266],"t":150.975006149338}],"ix":1},"m":1}],"ind":6}]}]}
         }
      },

      mixins: [viewMixin],

      async created() {
         this.sanityFetch(query)
      }
   }
</script>

<style>
   .about {
      width: 100%;
      height: auto;
      padding: var(--spacing-small) 7%;
      display: flex;
      color: var(--tetriary-color);
   }

   .about__category {
      color: var(--secondary-color);
      font-size: var(--font-size-data);
      font-style: italic;
      padding-bottom: var(--spacing-small);
   }

   .about__divider {
      width: var(--increment-medium);
      border-top: var(--increment-style);
      mix-blend-mode: difference;
      padding-top: var(--spacing-medium);
   }

   .about__divider-top {
      width: var(--increment-medium);
      border-top: var(--increment-style);
      mix-blend-mode: difference;
      margin: var(--spacing-medium) 0;
   }

   /* Essentials */

   .about__essentials {
      width: 45%;
      min-width: 30rem;
      max-width: 36rem;
      padding: var(--spacing-small) var(--spacing-large) 0 var(--spacing-padding);
   }

   .about__essentials-wrapper {
      position: sticky;
      height: 100vh;
      top: var(--spacing-medium);
   }

   .about__name {
      padding-bottom: var(--spacing-medium);
   }

   .about__name--mobile {
      display: none;
   }

   .about__fullname {
      font-size: 2.2rem;
      padding-bottom: 0.6rem;
      white-space: nowrap;
      color: var(--tetriary-color);
   }

   .about__title {
      font-size: var(--font-size-intro);
      font-style: italic;
      color: var(--tetriary-color);
   }

   /* Figure */

   .about__figure {
      width: 100%;
      height: 58%;
   }

   .about__figure--loading {
      height: 58%;
      width: 100%;
      position: absolute;
      z-index: 1;
      display: flex;
      justify-content: center;
      align-items: center;
   }

   .about__figure-markers {
      position: absolute;
      width: 100%;
      height: 58%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
   }

   .about__figure-marker {
      height: 1rem;
      width: 1rem;
   }

   .about__figure-marker--upper {
      width: 100%;
      display: flex;
      justify-content: space-between;
   }

   .about__figure-marker--lower {
      width: 100%;
      display: flex;
      justify-content: space-between;
   }

   .about__figure-marker--upper-left {
      border-top: var(--increment-style);
      border-left: var(--increment-style);
      border-color: var(--tetriary-color);
   }

   .about__figure-marker--upper-right {
      border-top: var(--increment-style);
      border-right: var(--increment-style);
      border-color: var(--tetriary-color);
   }

   .about__figure-marker--lower-left {
      border-bottom: var(--increment-style);
      border-left: var(--increment-style);
      border-color: var(--tetriary-color);
   }

   .about__figure-marker--lower-right {
      border-bottom: var(--increment-style);
      border-right: var(--increment-style);
      border-color: var(--tetriary-color);
   }

   .about__loading-icon {
      width: 60%;
      height: auto;
   }

   .about__image {
      position: relative;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: 2;
   }

   /* Socials */

   .about__socials {
      padding: var(--spacing-medium) 0 0 0;
      position: relative;
   }

   .about__link-container {
      display: flex;
      flex-wrap: wrap-reverse;
      align-items: flex-start;
      position: relative;

   }

   .about__link {
      position: relative;
      width: 3rem;
      height: 3rem;
      margin-right: 1rem;
      transition: 0.3s;
      background: #ffffff;
      border: var(--increment-style);
      border-color: var(--tetriary-color);
      border-radius: 15%;
      mix-blend-mode: difference;
   }

   .about__link:hover {
      background-color: var(--tetriary-color);
      transition: 0.3s;
      padding: 0.2rem;
      cursor: pointer;
   }

   .about__link-icon {
      width: 100%;
      height: 100%;
      object-fit: cover;
      mix-blend-mode: difference;
   }

   .about__skills {
      max-width: 25rem;
      line-height: 130%;
      display: flex;
      justify-content: space-between;
      white-space: nowrap;
      padding-bottom: var(--spacing-medium);
   }

   .about__adobe {
      margin-right: var(--spacing-small);
   }

   .about__webdesign {
      margin-right: var(--spacing-small);
   }

   /* Article */

   .about__header {
      font-size: 2.2rem;
      white-space: nowrap;
      color: var(--tetriary-color);
   }

   .about__category {
      color: var(--tetriary-color);
   }

   .about__article {
      padding: var(--spacing-small) var(--spacing-medium) 0 0;
   }

   .about__background {
      padding-bottom: var(--spacing-small);
   }

   .about__strengths {
      padding-bottom: var(--spacing-small);
   }

   .about__section {
      max-width: 80ch;
      line-height: 150%;
      padding-bottom: var(--spacing-small);
   }

   .about__email {
      font-size: var(--font-size-intro);
      font-weight: 600;
      font-style: italic;
      padding: var(--spacing-small) 0 0 0;
   }

   .about__email-link {
      color: var(--tetriary-color);
      text-decoration: underline;
      transition: 0.2s;
   }

   .about__email-link:hover {
      color: var(--highlight-color);
      text-decoration: none;
      transition: 0.2s;
   }
   
   @media screen and (max-device-width: 767px) {
      .about {
         flex-direction: column;
         padding-top: var(--spacing-small)
      }

      .about__essentials {
         width: 100%;
         min-width: none;
         max-width: none;
         padding: 0;
      }

      .about__name--desktop {
         display: none;
      }

      .about__name--mobile {
         display: block;
         padding-top: var(--spacing-medium)
      }

      .about__fullname {
         font-size: 4.4rem;
         padding-bottom: 2rem;
      }

      .about__figure {
         height: 60%;
      }

      .about__socials {
         padding: 0 0 0 0;
      }

      .about__skills {
         max-width: none;
      }

      .about__link {
         width: 6rem;
         height: 6rem;
      }

      .about__header {
         display: none;
      }

      .about__divider-top {
         margin: 0 0 var(--spacing-medium) 0;
      }

      .about__article {
         padding: var(--spacing-medium) 0 0 0;
      }      

      .about__email {
         text-align: center;
      }
   }
</style>