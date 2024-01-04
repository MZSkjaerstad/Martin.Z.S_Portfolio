import { defineConfig } from "sanity";
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import schemas from './schemas/schema'
import deskStructure from './deskStructure'
import {colorInput} from '@sanity/color-input'

export default defineConfig({
  title: "Martin.Z.S_portfolio",
  projectId: "kwehjbr5",
  dataset: "production",
  plugins: [
    deskTool({
      structure: deskStructure
    }),
    visionTool(),
    colorInput()
  ],
  tools: (prev, context) => {
    const isAdmin = context.currentUser.roles
      .find(({ name }) => name === 'administrator')
    if (isAdmin) {
      return prev
    }
    return prev.filter((tool) => tool.name !== 'vision')
  },
  schema: {
    types: schemas,
  },
  document: {
    newDocumentOptions: (prev, { creationContext }) => {
      if (creationContext.type === 'global') {
        return prev.filter((templateItem) => templateItem.templateId != 'settings')
      }
      return prev
    },
    actions: (prev, { schemaType }) => {
      if (schemaType === 'settings') {
        return prev.filter(({ action }) => !['unpublish', 'delete','duplicate'].includes(action))
      }
      return prev
    },
  },
});