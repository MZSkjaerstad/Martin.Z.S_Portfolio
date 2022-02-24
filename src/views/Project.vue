<template>
   <Introduction :introductionData="introduction" />
   <Exhibition :projectName="exhibition" />
   <Prosess :prosessData="prosess" />
</template>

<script>
import Introduction from '../components/mal/Introduction.vue';
import Exhibition from '../components/mal/Exhibition.vue';
import Prosess from '../components/mal/Prosess.vue';

export default {
   components: {
      Introduction,
      Exhibition,
      Prosess,
   },

   data() {
      return {
         introduction: {},
         exhibition: '',
         prosess: {},
      }
   },

   mounted() {
      this.introduction = this.project()[0].introduction;
      this.exhibition = this.project()[0].exhibition;
      this.prosess = this.project()[0].prosess;
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