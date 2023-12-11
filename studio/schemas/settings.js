import {CogIcon} from '@sanity/icons'

export default {
    title: "Settings",
    name: "settings",
    type: "document",
    icon: CogIcon,
    groups: [
      {
         title: "Design",
         name: "design"
      },
    ],
    fields: [
      {
         title: 'Colour Pallette',
         name: 'colourPalette',
         group: 'design',
         type: 'object',
         fields: [
            {
               name: 'Primary',
               title: 'primaryColor',
               type: 'color',
            },
            {
               name: 'Secondary',
               title: 'secondaryColor',
               type: 'color',
            },
            {
               name: 'Highlight',
               title: 'highligtColor',
               type: 'color',
            },
         ]
      },
    ]
 }