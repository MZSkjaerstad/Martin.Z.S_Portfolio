export default {
   state() {
      return {
         projects: [
            {
               slug:'hardcore',
               introduction: {
                  title: 'Hardcore animation M.Video',
                  image: 'hardcore_animation/image/banner_image.jpg',
                  subtitle: 'A music visulization',
                  description: 'Hardcore animation is a digital visualization of the music genre hardcore punk. Through the use of animation video the auditory and the visual aspects are merged together to create a holistic expression of the raw, violent, and aggressive energy behind the genre.',
                  year: '2020',
                  tags: ['Konseptutvikling', 'Animasjon', 'UX | UI'],
                  contentOverview: [
                     {image: 'hardcore_animation/image/banner_image.jpg', pitch: 'pitch 1'},
                     {image: 'hardcore_animation/image/banner_image.jpg', pitch: 'pitch 2'},
                     {image: 'hardcore_animation/image/banner_image.jpg', pitch: 'pitch 3'},
                  ]
               },
               exhibition: 'hardcore',
               prosess: {
                  body: 'prosess [ONLINE]',
                  images: []
                  },
            },

            {
               slug:'software',
               introduction: {
                  title: '',
                  subtitle: '',
                  description: '',
                  year: '',
                  tags: [],
                  contentOverview: [
                     {image: '', pitch: ''}
                  ]
               },
               exhibition: 'software',
               prosess: {
                  body: [],
                  images: []
                  },
            },
         ]
      }
   },

   getters: {
      getProjects(state) {
         return state.projects;
      }
   }
}