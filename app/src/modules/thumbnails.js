
  export default {
   state() {
      return {
         thumbnails: [
            {
            title: 'Hardcore animation M.Video',
            navTitle: 'hardcore',
            slug: 'hardcore',
            image: 'imagelink',
            year: '2020',
            tags: [ 'Consept development', 'Animasjon', 'Music'],
            description: 'Hardcore Animation is an animated music video of the musical genre hardcore punk. An experimentation of music visulization, the purpose is transcribe the auditory atributes int a visual solution.',
            position: '1',
            },

            {
            title: 'Hallingdal Kraftnett profile',
            navTitle: 'Hallingdal',
            slug: 'unavailable',
            image: 'imagelink',
            year: '2016',
            tags: ['Consept development', 'Animation'],
            description: '',
            position: '2',
            },

            {
            title: 'alan ecommerce computer',
            navTitle: 'alan',
            slug: 'unavailable',
            image: 'imagelink',
            year: '2012',
            tags: ['Consept development', 'Prototype'],
            description: '',
            position: '3',
            },
            
            {
            title: 'sphere animation project',
            navTitle: 'sphere',
            slug: 'unavailable',
            image: 'imagelink',
            year: '2020',
            tags: ['Animation'],
            description: '',
            position: '1',
            },
         ],
      }
   },

   getters: {
      getThumbnails(state) {
         return state.thumbnails;
      }
   }
}