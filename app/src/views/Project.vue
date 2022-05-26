<template>
   <article v-if="loading === true"> <Loading /> </article>
   <article v-else>
      <Introduction :introductionData="content.introduction" />
      <Exhibition :exhibitionData="content.exhibition" :projectName="content.exhibition.slug" />
      <Process :processData="content.process" />
   </article>
</template>

<script>
import Introduction from '../components/mal/Introduction.vue';
import Loading from '../components/Loading.vue';
import Exhibition from '../components/mal/Exhibition.vue';
import Process from '../components/mal/Process.vue';
import viewMixin from '../mixins/viewMixin.js';
import query from '../groq/project.groq?raw';

export default {
   components: {
      Introduction,
      Loading,
      Exhibition,
      Process,
   },

   mixins: [viewMixin],

   async created() {
      const params = {
         projectSlug: this.$route.params.projectSlug
      }

      this.sanityFetch(query, params)
      return params
   },

   mounted () {
      window.scrollTo(0, 0)
   },

   /*Routerlink between articles */
   computed: {
      getParam() {
         return this.$route.params.projectSlug
      }
   },

   watch: {
      getParam(newParam, oldParam) {
         if(newParam != oldParam) {
            const params = {
               projectSlug: this.$route.params.projectSlug
            }
            this.sanityFetch(query, params)
            window.scrollTo(0, 0)
         }
      }
   }
}
</script>