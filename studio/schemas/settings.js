export default {
    title: 'Settings',
    name: 'settings',
    type: 'document',
    groups: [
      {
         title: 'Visual Profile',
         name: 'visualProfile'
      }
   ],
    fields: [
      {
         title: 'Colour palette',
         name: 'colourPalette',
         group: 'visualProfile',
         type: 'object',
         fields: [
            {
               title: 'Primary',
               name: 'primary',
               type: 'text'
            },
            {
               title: 'Secondary',
               name: 'secondary',
               type: 'text'
            },
            {
               title: 'Highlight',
               name: 'highlight',
               type: 'text'
            }
         ]
      },
    ]
 }