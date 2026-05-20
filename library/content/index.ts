import { loader } from "fumadocs-core/source"
import { toFumadocsSource } from "fumadocs-mdx/runtime/server"
import {
  docsCollection,
  notesCollection,
  postsCollection
} from ".source/server"

// Load documentation collection
export const docs = loader({
  // Base path for documentation routes
  baseUrl : "/docs",

  // Convert docs collection into fumadocs source format
  source  : docsCollection.toFumadocsSource()
})

// Load notes collection
export const notes = loader({
  // Base path for notes routes
  baseUrl : "/notes",

  // Convert notes collection into fumadocs source format
  source  : toFumadocsSource(notesCollection, [])
})

// Load blog posts collection
export const posts = loader({
  // Base path for blog routes
  baseUrl : "/blog",

  // Convert posts collection into fumadocs source format
  source  : toFumadocsSource(postsCollection, [])
})

export type DocsEntry = typeof docs['$inferPage']
export type DocsMeta = typeof docs['$inferMeta']
export type NoteEntry = typeof notes['$inferPage']
export type PostEntry = typeof posts['$inferPage']
