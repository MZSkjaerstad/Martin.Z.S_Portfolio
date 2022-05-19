import sanityClient from '@sanity/client'

export default sanityClient({
   projectId: 'kwehjbr5',
   dataset: 'production',
   apiVersion: '2022-05-10',
   useCdn: false
})