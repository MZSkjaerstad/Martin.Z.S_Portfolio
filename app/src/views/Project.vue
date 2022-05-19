<template>
   <main v-if="loading === true"> <Loading /> </main>
   <main v-else>
      <Introduction :introductionData="content.introduction" />
      <Exhibition :projectName="content.exhibition" />
      <Process :processData="content.process" />
   </main>
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
   },
}
</script>