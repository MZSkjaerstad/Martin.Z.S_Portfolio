export default {
   state() {
      return {
         projects: [
            {
               slug:'hardcore',
               introduction: {
                  title: 'introduction [ONLINE]',
                  image: '',
                  subtitle: '',
                  description: '',
                  year: '',
                  tags: [],
                  contentOverview: [
                     {image: '', pitch: ''}
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