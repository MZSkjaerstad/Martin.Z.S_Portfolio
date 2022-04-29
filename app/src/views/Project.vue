<template>
   <Introduction :introductionData="introduction" />
   <Exhibition :projectName="exhibition" />
   <Process :processData="process" />
</template>

<script>
import Introduction from '../components/mal/Introduction.vue';
import Exhibition from '../components/mal/Exhibition.vue';
import Process from '../components/mal/Process.vue';

export default {
   components: {
      Introduction,
      Exhibition,
      Process,
   },

   data() {
      return {
         introduction: {},
         exhibition: '',
         process: {},
      }
   },

   mounted() {
      this.introduction = this.project()[0].introduction;
      this.exhibition = this.project()[0].slug;
      this.process = this.project()[0].process;
      window.scrollTo(0, 0)
   },

   methods: {
      paramProjectSlug() {
         return this.$route.params.projectSlug
      },

      project() {
         return this.$store.getters["getProjects"].filter(project => {
            return project.slug === this.paramProjectSlug()
            })
      },
   },
}
</script>