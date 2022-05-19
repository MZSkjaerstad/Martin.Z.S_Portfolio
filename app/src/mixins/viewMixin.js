import sanity from '../sanity.js'

export default {
   data() {
      return {
         loading: true,
         content: null
      }
   },

   methods: {
      async sanityFetch(query, params) {
         this.content = await sanity.fetch(query, params);
         this.loading = false;
         console.log(this.content);
      }
   }
}