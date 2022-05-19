import sanity from '../sanity.js'

export default {
   data() {
      return {
         headerData: null
      }
   },

   methods: {
      async sanityFetch(query, params) {
         this.headerData = await sanity.fetch(query, params);
         console.log(this.headerData);
      },
   }
}