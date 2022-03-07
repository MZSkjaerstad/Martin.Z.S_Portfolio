
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
            tags: [ 'Konseptutvikling', 'Animasjon', 'UX | UI' ],
            description: 'Hardcore Animation is an animated music video of the musical genre hardcore punk. An experimentation of music visulization, the purpose is transcribe the auditory atributes int a visual solution.',
            position: '1',
            },

            {
            title: 'name project number.2',
            navTitle: 'project 2',
            link: 'link',
            image: 'imagelink',
            year: '2016',
            tags: ['Frontend', 'Prototype'],
            description: 'Page is currently not ready.',
            position: '2',
            },

            {
            title: 'name project number.3',
            navTitle: 'project 3',
            link: 'link',
            image: 'imagelink',
            year: '2012',
            tags: ['Konseptutvikling', 'Illustrasjon', 'Prototype'],
            description: 'Page is currently not ready.',
            position: '3',
            },
            
            {
            title: 'name project number.4',
            navTitle: 'project 4',
            link: 'link',
            image: 'imagelink',
            year: '2020',
            tags: ['tag1', 'tag2', 'tag3'],
            description: 'Page is currently not ready.',
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