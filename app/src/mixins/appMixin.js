import sanity from '../sanity.js'

export default {
   data() {
      return {
         headerData: null
      }
   },

   methods: {
      async sanityFetch(query, params) {
         const response = await sanity.fetch(query, params);
         try {
            this.handleSanityFetch(response)
         } catch(error) {
            this.error = error.message;
            console.log(this.error)
         }
      },

      async handleSanityFetch(response) {
         if (response != undefined) {
            this.headerData = response;
         } else {
            throw new Error('Her gikk noe galt med sanity.');
         }
      }
   }
}