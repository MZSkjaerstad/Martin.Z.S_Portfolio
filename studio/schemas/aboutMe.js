export default {
   title: "About me",
   name: "aboutMe",
   type: "document",
   fields: [
      {
         title: "Full name",
         name: "fullName",
         type: "string"
      },
      {
         title: "Working title",
         name: "workingTitle",
         type: "string"
      },
      {
         title: "Profile picture",
         name: "profilePicture",
         type: "image"
      },
      {
         title: "Description",
         name: "description",
         type: "array",
         of: [{type: "block"}]
      },
      {
         title: "Email address",
         name: "emailAddress",
         type: "string"
      },
      {
         title: "Social links",
         name: "socials",
         type: "array",
         of: [
            {
               title: "Link",
               name: "link",
               type: "object",
               fields: [
                  {
                     title: "Link type",
                     name: "linkType",
                     type: "reference",
                     to: [{type: "linkAssets"}]
                  },
                  {
                     title: "Url",
                     name: "url",
                     type: "string"
                  }
               ]
            }
         ]
      },
      {
         title: "Software Skills",
         name: "softwareSkill",
         type: "array",
         of: [
            {
               name: "software",
               type: "string"
            }
         ]
      },
      {
         title: "Code laguanges",
         name: "codeLanguages",
         type: "array",
         of: [
            {
               name: "language",
               type: "string"
            }
         ]
      }
   ]
}