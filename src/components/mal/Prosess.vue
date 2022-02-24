<template>
   <div class="process">
      {{ prosessData.body }}
   </div>
</template>

<script>
export default {
   props: {
      prosessData: {
         type: Object
      }
   },
}
</script>

<style>
   .process {
      height: 100%;
   }
</style>