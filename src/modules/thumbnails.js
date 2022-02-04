
  export default {
   state() {
      return {
         thumbnails: [
            {
            title: 'name project number.1',
            link: 'link',
            image: 'imagelink',
            year: '2014',
            tags: [ 'tag1', 'tag2', 'tag3' ],
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
            position: '1',
            },

            {
            title: 'name project number.2',
            link: 'link',
            image: 'imagelink',
            year: '2016',
            tags: ['tag1', 'tag2', 'tag3'],
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
            position: '2',
            },

            {
            title: 'name project number.3',
            link: 'link',
            image: 'imagelink',
            year: '2012',
            tags: ['tag1', 'tag2', 'tag3'],
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
            position: '3',
            },
            
            {
            title: 'name project number.4',
            link: 'link',
            image: 'imagelink',
            year: '2020',
            tags: ['tag1', 'tag2', 'tag3'],
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
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