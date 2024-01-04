import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import aboutMe from './aboutMe'
import projects from './documents/projects'
import linkAssets from './documents/linkAssets'
import tags from './documents/tags'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    aboutMe,
    projects,
    linkAssets,
    tags,
  ]),
})
