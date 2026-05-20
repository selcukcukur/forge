import {
  defineDocs,
  defineCollections,
  defineConfig
} from "fumadocs-mdx/config"
import { pageSchema, metaSchema } from "fumadocs-core/source/schema"
import z from "zod"

// Create a new docs collection
export const docsCollection = defineDocs({
  dir   : "content/docs",
  docs  : {
    schema      : pageSchema.extend({
      badge       : z.string().optional(),
      authors     : z.array(z.string()).default([]),
      publishedAt : z.coerce.date().optional(),
      tags        : z.array(z.string()).default([]),
      draft       : z.boolean().default(false),
    }),
    postprocess : {
      includeProcessedMarkdown: true
    }
  },
  meta  : {
    schema      : metaSchema.extend({
      badge : z.string().optional(),
    })
  }
})

// Create a new notes collection
export const notesCollection = defineCollections({
  type    : "doc",
  dir     : "content/notes",
  schema  : (ctx) =>
    z.object({
      title       : z.string(),
      description : z.string().optional(),
      author      : z.string(),
      date        : z.coerce.date(),
      cover       : z.string().url().optional(),
      slug        : z.string().default(ctx.path)
    })
})

// Create a new posts collection
export const postsCollection = defineCollections({
  type    : "doc",
  dir     : "content/posts",
  schema  : (ctx) =>
    z.object({
      cover       : z.url().optional(),
      title       : z.string(),
      description : z.string().optional(),
      keywords    : z.array(z.string()),
      author      : z.object({
        avatar  : z.string().default('avatar.png'),
        name    : z.string().default('Selçuk Çukur'),
        url     : z.string().default('https://x.com/selcukcukur'),
      }),

      excerpt     : z.string().optional(),
      category    : z.string(),
      slug        : z.string().default(ctx.path),

      createdAt   : z.string(),
      updatedAt   : z.string().optional(),
      deletedAt   : z.string().optional(),
      publishedAt : z.string().optional(),
    })
})

// Global site configuration for fumadocs
export default defineConfig({
  mdxOptions  : {
    remarkPlugins : [],
    rehypePlugins : []
  }
})