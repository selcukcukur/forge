import { loader } from "fumadocs-core/source"
import {
  docsCollection,
  notesCollection,
  postsCollection
} from "@collections/server"

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
  source  : notesCollection.toFumadocsSource()
})

// Load blog posts collection
export const posts = loader({
  // Base path for blog routes
  baseUrl : "/blog",

  // Convert posts collection into fumadocs source format
  source  : postsCollection.toFumadocsSource()
})
