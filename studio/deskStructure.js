export default (S) =>
  S.list()
    .title('Portfolio Content')
    .items([
      S.listItem()
        .title('Settings')
        .child(
          S.editor()
            .id('settings')
            .schemaType('settings')
            .documentId('settings')
        ),
      S.listItem()
        .title('About me')
        .child(
          S.editor()
            .id('aboutMe')
            .schemaType('aboutMe')
            .documentId('aboutMe')
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(listItem => !['settings', 'aboutMe'].includes(listItem.getId())),
    ]);