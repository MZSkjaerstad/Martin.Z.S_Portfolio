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
         const response = await sanity.fetch(query, params);
         try {
				this.handleSanityFetch(response);
			} catch(error) {
				this.error = error.message;
				console.log(this.error);
			}
      },

		async handleSanityFetch(response) {
         if (response != undefined) {
            this.content = response;
				this.loading = false;
         } else {
            throw new Error('Her gikk noe galt med sanity.');
         }
      },

      metaTags(meta) {
			const currentURL = window.location.origin + this.$route.path;
			
			if (meta.title) {
				document.title = meta.title;
			}

			if (meta.description) {
				document.querySelector('meta[name="description"]').setAttribute('content', meta.description);
				document.querySelector('meta[property="og:description"]').setAttribute('content', meta.description);
			}

			if (meta.image) {
				document.querySelector('meta[property="og:image"]').setAttribute('content', meta.image);
			}

			document.querySelector('link[rel="canonical"]').setAttribute('href', currentURL);
			document.querySelector('meta[property="og:url"]').setAttribute('content', currentURL);
		}
   }
}