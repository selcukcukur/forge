import { defineDocs, defineConfig } from 'fumadocs-mdx/config'

// Create a new docs collection
export const docsCollection = defineDocs({
  dir: "content/docs"
})

// Create a new notes collection
export const notesCollection = defineDocs({
  dir: "content/notes"
})

// Create a new posts collection
export const postsCollection = defineDocs({
  dir: "content/posts"
})

// Global site configuration for fumadocs
export default defineConfig({
  // ...
})
