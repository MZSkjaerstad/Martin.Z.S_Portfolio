export default {
   state() {
      return {
         projects: [
            {
               slug:'hardcore',
               introduction: {
                  title: 'Hardcore animation M.Video',
                  image: 'hardcore_animation/image/banner_image.jpg',
                  subtitle: 'A music visualization',
                  description: 'Hardcore animation is a digital visualization of the music genre hardcore punk. Through the use of animation video the auditory and the visual aspects are merged together to create a holistic expression of the raw, violent, and aggressive energy behind the genre.',
                  year: '2020',
                  tags: ['Consept development', 'Animasjon', 'Music'],
                  contentOverview: [
                     {image: 'hardcore_animation/image/banner_image.jpg', pitch: 'pitch 1'},
                     {image: 'hardcore_animation/image/banner_image.jpg', pitch: 'pitch 2'},
                     {image: 'hardcore_animation/image/banner_image.jpg', pitch: 'pitch 3'},
                  ]
               },
               process: { 
                  title: 'A music visualization',
                  flavourText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Mi ipsum faucibus vitae aliquet. Senectus et netus et malesuada fames ac turpis egestas sed.',
                  links: ['https://youtu.be/UrVc2s0nDOg',],
                  processSections:[
                     {
                        subtitle: 'Research',
                        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Mi ipsum faucibus vitae aliquet. Senectus et netus et malesuada fames ac turpis egestas sed. Ultricies leo integer malesuada nunc. Laoreet id donec ultrices tincidunt. Laoreet sit amet cursus sit. Volutpat est velit egestas dui id. Volutpat lacus laoreet non curabitur gravida arcu ac tortor. Lacinia quis vel eros donec. Arcu dui vivamus arcu felis bibendum. Consequat semper viverra nam libero justo laoreet sit. In hendrerit gravida rutrum quisque non tellus orci. Laoreet id donec ultrices tincidunt arcu non. Felis imperdiet proin fermentum leo vel orci porta non. Ullamcorper velit sed ullamcorper morbi tincidunt. Ornare arcu odio ut sem nulla pharetra diam. Auctor elit sed vulputate mi sit. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Fames ac turpis egestas maecenas pharetra.',
                        images: [
                           {url:'hardcore_animation/gif/distortion.gif', figcaption: 'Distortion exercise'}, 
                           {url:'hardcore_animation/gif/size.gif', figcaption: 'Depth exercise'}, 
                        ],
                     },
                     {
                        subtitle: 'Development',
                        body: 'Vel orci porta non pulvinar. Nisi porta lorem mollis aliquam ut. Eu lobortis elementum nibh tellus molestie nunc non blandit massa. Feugiat in fermentum posuere urna nec tincidunt. Vitae tortor condimentum lacinia quis vel eros donec ac odio. Donec enim diam vulputate ut. Quis commodo odio aenean sed adipiscing diam donec. Ut eu sem integer vitae justo eget magna fermentum. Senectus et netus et malesuada fames ac. Scelerisque in dictum non consectetur. Sagittis purus sit amet volutpat. Aliquam vestibulum morbi blandit cursus. Parturient montes nascetur ridiculus mus mauris vitae. Tortor at auctor urna nunc id cursus metus aliquam eleifend.',
                        images: [
                           {url:'hardcore_animation/gif/development.gif', figcaption: 'First development'}, 
                        ],
                     },
                     {
                        subtitle: 'Production',
                        body: 'Vel orci porta non pulvinar. Nisi porta lorem mollis aliquam ut. Eu lobortis elementum nibh tellus molestie nunc non blandit massa. Feugiat in fermentum posuere urna nec tincidunt. Vitae tortor condimentum lacinia quis vel eros donec ac odio. Donec enim diam vulputate ut. Quis commodo odio aenean sed adipiscing diam donec. Ut eu sem integer vitae justo eget magna fermentum. Senectus et netus et malesuada fames ac. Scelerisque in dictum non consectetur. Sagittis purus sit amet volutpat. Aliquam vestibulum morbi blandit cursus. Parturient montes nascetur ridiculus mus mauris vitae. Tortor at auctor urna nunc id cursus metus aliquam eleifend.',
                        images: [
                           {url:'hardcore_animation/gif/juggling_nodes.gif', figcaption: 'Further production'}, 
                        ],
                     },
                  ]
               }
            },
            {
               slug:'',
               introduction: {
                  title: '',
                  image: '',
                  subtitle: '',
                  description: '',
                  year: '',
                  tags: [''],
                  contentOverview: [
                     {image: '', pitch: ''},
                     {image: '', pitch: ''},
                     {image: '', pitch: ''},
                  ]
               },
               process: { 
                  flavourText: '',
                  processSections:[
                     {
                        subtitle: '',
                        body: '',
                        images: [
                           {url:'', figcaption: ''}, 
                        ],
                     },
                  ]
               }
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