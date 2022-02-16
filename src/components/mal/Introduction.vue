<template>
   {{ introductionData.title }}
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