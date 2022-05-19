import S from '@sanity/desk-tool/structure-builder';

export default () =>
   S.list()
      .title('Portfolio content')
      .items(
         [
            S.listItem()
               .title('About me')
               .child(
                  S.document()
                     .schemaType('aboutMe')
                     .documentId('aboutMe')
               ),
            S.divider(),
            ...S.documentTypeListItems().filter(item => !['aboutMe'].includes(item.getId()))
         ]
      )