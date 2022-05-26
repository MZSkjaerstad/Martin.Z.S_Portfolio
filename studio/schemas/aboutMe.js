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
         title: "Background",
         name: "background",
         description: "Add sections to the Background textblock.",
         type: "array",
         of: [
            {
               title: "Section",
               name: "section",
               type: "object",
               fields: [
                  {
                     title: "Section name",
                     name: "sectionName",
                     type: "string"
                  },
                  {
                     title: "Section content",
                     name: "sectionContent",
                     type: "text"
                  }
               ]
            }
         ]
      },
      {
         title: "Strengths",
         description: "Add sections to the Strengths textblock.",
         name: "strengths",
         type: "array",
         of: [
            {
               title: "Section",
               name: "section",
               type: "object",
               fields: [
                  {
                     title: "Section name",
                     name: "sectionName",
                     type: "string"
                  },
                  {
                     title: "Section content",
                     name: "sectionContent",
                     type: "text"
                  }
               ]
            }
         ]
      },
      {
         title: "Email address",
         name: "emailAddress",
         type: "string"
      },
      {
         title: "Social links",
         name: "socials",
         description: "Add a link icon to the socials display.",
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
         title: "Adobe softwares",
         name: "adobeSoftware",
         description: "Add an item to the software display.",
         type: "array",
         of: [
            {
               name: "software",
               type: "string"
            }
         ]
      },

      {
         title: "Web-design tools",
         name: "webdesignTools",
         description: "Add an item to the webdesign display.",
         type: "array",
         of: [
            {
               name: "tool",
               type: "string"
            }
         ]
      },
      {
         title: "Code laguanges",
         name: "codeLanguages",
         description: "Add an item to the language display.",
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