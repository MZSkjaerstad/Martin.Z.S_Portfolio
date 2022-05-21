import tags from "./tags";

export default {
   title: "Projects",
   name: "projects",
   type: "document",
   groups: [
      {
         title: "Introduction",
         name: "introduction"
      },
      {
         title: "Exhibition",
         name: "exhibition"
      },
      {
         title: "Process",
         name: "process"
      },
      {
         title: "Misc",
         name: "misc"
      }
   ],
   fields: [
      {
         title: "Project name",
         name: "projectName",
         group: "introduction",
         description: "Add a title to the project.",
         type: "string"
      },
      {
         title: "Slug",
         name: "slug",
         group: "introduction",
         description: "Write own or generate slug from name for project functionality.",
         type: "slug",
         options: {
            source: "projectName"
         }
      },
      {
         title: "Background Image",
         name: "backgroundImage",
         group: "introduction",
         description: "Add background image for the article introduction.",
         type: "image"
      },
      {
         title: "Publish year",
         name: "publishYear",
         group: "introduction",
         description: "Add the year the project was finished.",
         type: "date",
         options: {
            dateFormat: "YYYY",
            calendarTodayLabel: "Today"
         }
      },
      {
         title: "Subtitle",
         name: "subtitle",
         group: "introduction",
         description: "Add a subtitle to the introduction.",
         type: "string"
      },
      {
         title: "Description",
         name: "description",
         group: "introduction",
         description: "Write the initial description in the article introduction.",
         type: "text",
      },
      {
         title: "Tags",
         name: "tags",
         group: "introduction",
         description: "Add tags for classification and sortement.",
         type: "array",
         of: [
            {
               title: "Tag",
               name: "tag",
               type: "reference",
               to: [{type: "tags"}]
            }
         ]
      },
      {
         title: "Links",
         name: "links",
         group: "introduction",
         description: "Add links to additional project resources.",
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
         title: "Contributors",
         name: "contributors",
         group: "introduction",
         description: "Add additional contributors to the project",
         type: "array",
         of: [
            {
               title: "Contributor",
               name: "contributor",
               type: "object",
               fields: [
                  {
                     title: "Title",
                     name: "title",
                     type: "string"
                  },
                  {
                     title: "Name",
                     name: "name",
                     type: "string"
                  }
               ]
            }
         ]
      },
      {
         title: "Exhibition assets",
         name: "exhibitionAssets",
         group: "exhibition",
         description: "Add all image assets to use in the exhibition.",
         type: "array",
         of: [
            {
               title: "Image asset",
               name: "imageAsset",
               type: "object",
               fields: [
                  {
                     title: "Image file",
                     name: "imageFile",
                     type: "image"
                  },
                  {
                     title: "Image caption",
                     name: "imageCaption",
                     type: "string"
                  }
               ]
            },
            {
               title: " Video asset",
               name: "videoAsset",
               type: "object",
               fields: [
                  {
                     title: "Video url",
                     name: "videoUrl",
                     description: "Make sure to use embeded url",
                     type: "string"
                  },
                  {
                     title: "Video caption",
                     name: "videoCaption",
                     type: "string"
                  }
               ]
            }
         ]
      },
      {
         title: "Prosess subtitle",
         name: "processSubtitle",
         group: "process",
         description: "Add a subtitle for the process article",
         type: "string",
         options: {
            source: "projectName"
         }
      },
      {
         title: "Prosess flavourtext",
         name: "processflavour",
         group: "process",
         description: "Write some flavourtext for the process article.",
         type: "text"
      },
      {
         title: "Process sections",
         name: "processSections",
         group: "process",
         description: "Write and add each section of content for the process article.",
         type: "array",
         of: [
            {
               title: "Section text",
               name: "sectionText",
               type: "object",
               fields: [
                  {
                     title: "Title",
                     name: "sectionTitle",
                     type: "string"
                  },
                  {
                     title: "Content",
                     name: "sectionContent",
                     type: "text"
                  },
               ]
            },
            {
               title: "Section image",
               name: "sectionImage",
               type: "object",
               fields: [
                  {
                     title: "Image file",
                     name: "imageFile",
                     type: "image"
                  },
                  {
                     title: "Image caption",
                     name: "imageCaption",
                     type: "string"
                  }
               ]
            }
         ]
      },
      {
         title: "Thumbnail position",
         name: "position",
         group: "misc",
         description: "Choose which position the thumbnail will have at the frontpage.",
         type: "number"
      },
      {
         title: "Published",
         name: "published",
         group: "misc",
         description: "Toggle to show project on webpage.",
         type: "boolean"
      }
   ]
}