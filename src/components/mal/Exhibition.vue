<template>
   <Hardcore v-if="projectName === 'hardcore'" />
   <Software v-if="projectName === 'software'" />
   
</template>

<script>
import Hardcore from '../exhibitions/Hardcore.vue';
import Software from '../exhibitions/Software.vue'

export default {
   components: {
      Hardcore,
      Software,
   },

   props: {
      projectName: String
   },
}
</script>