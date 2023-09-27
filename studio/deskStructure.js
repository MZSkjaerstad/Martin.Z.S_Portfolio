import S from '@sanity/desk-tool/structure-builder';

export default () =>
   S.list()
      .title('Portfolio content')
      .items(
         [
            S.listItem()
               .title('Settings')
               .child(
                  S.document()
                     .schemaType('settings')
                     .documentId('settings')
               ),
            S.listItem()
               .title('About me')
               .child(
                  S.document()
                     .schemaType('aboutMe')
                     .documentId('aboutMe')
               ),
            S.divider(),
            ...S.documentTypeListItems().filter(item => !['aboutMe', 'settings'].includes(item.getId())),
         ]
      )