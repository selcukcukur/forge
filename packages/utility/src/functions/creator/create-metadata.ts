import type { Metadata } from "next"

import { WEB_DOMAIN, APP_NAME } from "@workspace/utility"

/**
 * Type definition for metadata props used in SEO and social previews
 */
export type MetadataProps = {
  /**
   * Application name or identifier
   */
  app?: string

  /**
   * Domain information (site URL)
   */
  domain?: string

  /**
   * Page title (short version, shown in browser tab or social previews)
   */
  title?: string

  /**
   * Full page title (shown in browser tab and social previews)
   */
  fullTitle?: string

  /**
   * Page description (used in meta tags, Open Graph, Twitter cards)
   */
  description?: string

  /**
   * Page keywords (used in meta tags)
   */
  keywords?: string

  /**
   * Image URL for previews (thumbnail or banner)
   */
  image?: string

  /**
   * Video URL for previews (Open Graph or Twitter player card)
   */
  video?: string

  /**
   * Icons set (favicons, apple-touch-icons, etc.)
   */
  icons?: Metadata["icons"]

  /**
   * Page URL (used in canonical and Open Graph metadata)
   */
  url?: string

  /**
   * Canonical URL (preferred URL for search engines to avoid duplicates)
   */
  canonicalUrl?: string

  /**
   * Flag to disable indexing (true → search engines should not index this page)
   */
  noIndex?: boolean

  /**
   * Manifest file for Progressive Web App (defines icons, colors, install behavior)
   */
  manifest?: string | URL
} & Metadata

/**
 * Utility to construct metadata for search engine optimization and social sharing
 *
 * **Props**
 * - `*` – All standard `metadata` fields (title, description, keywords, openGraph, twitter, icons, etc.)
 *
 * **Usage**
 * ```tsx
 * // Import the metadata type definition
 * import type { Metadata } from "next"
 *
 * // Import the metadata generator function
 * import { generateMetadata } from "@selcukcukur/utility"
 *
 * // Construct metadata for a dashboard page
 * export const metadata: Metadata = generateMetadata({
 *    // Use full page title and shortened title for social previews
 *    title: "Dashboard",
 *
 *    // Use full page title for browser tab title
 *    description: "Manage your company data in real time",
 *
 *    // Use a custom image for social previews
 *    image: "https://cdn.selcukcukur.me/preview/dashboard.png",
 *
 *    // Use a custom video for social previews
 *    url: "https://selcukcukur.me/dashboard",
 *
 *    // Use a custom canonical URL to avoid duplicate content issues
 *    canonicalUrl: "https://selcukcukur.me/dashboard",
 * })
 * ```
 */
export function createMetadata({
  app = APP_NAME,
  domain,
  title,
  fullTitle,
  description,
  keywords,
  image = "https://cdn.selcukcukur.me/branding/opengraph/thumbnail.jpg",
  video,
  icons = [
    {
      rel   : "apple-touch-icon",
      sizes : "32x32",
      url   : "https://cdn.selcukcukur.me/branding/manifest/apple-touch-icon.png",
    },
    {
      rel   : "icon",
      type  : "image/svg+xml",
      sizes : "any",
      url   : "https://cdn.selcukcukur.me/branding/favicon/favicon.svg",
    },
    {
      rel   : "icon",
      type  : "image/png",
      sizes : "16x16",
      url   : "https://cdn.selcukcukur.me/branding/favicon/favicon-16x16.png",
    },
    {
      rel   : "icon",
      type  : "image/png",
      sizes : "32x32",
      url   : "https://cdn.selcukcukur.me/branding/favicon/favicon-32x32.png",
    },
    {
      rel   : "icon",
      type  : "image/png",
      sizes : "48x48",
      url   : "https://cdn.selcukcukur.me/branding/favicon/favicon-48x48.png",
    },
    {
      rel   : "icon",
      type  : "image/png",
      sizes : "96x96",
      url   : "https://cdn.selcukcukur.me/branding/favicon/favicon-96x96.png",
    },
    {
      rel   : "icon",
      type  : "image/png",
      sizes : "128x128",
      url   : "https://cdn.selcukcukur.me/branding/favicon/favicon-128x128.png",
    },
    {
      rel   : "icon",
      type  : "image/png",
      sizes : "256x256",
      url   : "https://cdn.selcukcukur.me/branding/favicon/favicon-256x256.png",
    },
    {
      rel   : "icon",
      type  : "image/png",
      sizes : "512x512",
      url   : "https://cdn.selcukcukur.me/branding/favicon/favicon-512x512.png",
    },
  ],
  url,
  canonicalUrl,
  noIndex = false,
  manifest,
  authors,
  pagination,
  creator,
  publisher,
  appLinks
}: MetadataProps = {}): Metadata {
  return {
    // Title configuration: default and template
    title         : fullTitle || (title ? `${title} - ${app}` : `${app} — Selcuk Cukur's Digital Laboratory`),

    // Page description: use provided or fallback
    description   : description || 'A digital workshop where code meets curiosity. Experiments, prototypes, and open-source artifacts by Selcuk Cukur.',

    // Page keywords: use provided or fallback
    keywords      : keywords || 'software engineering,web development,next.js,react,typescript,ai,machine learning,systems programming,code experiments,senior software engineer,open source projects,prototypes,scalable systems,cloud development,devops,software architecture',

    // Open Graph metadata for social platforms (Facebook, LinkedIn, etc.)
    openGraph     : {
      // Website type: website, article, profile, etc.
      type        : 'website',

      // Website name: used in social previews and link previews
      siteName    : app,

      // Title shown in social link previews
      title       : title,

      // Description text for social previews
      description : description,

      // Add preview image if provided
      ...(image && { images: image }),

      // Page URL used in link previews
      url         : url,

      // Add preview video if provided
      ...(video && { videos: video }),
    },

    // Twitter metadata for link previews
    twitter       : {
      // Title displayed in the Twitter card
      title       : title,

      // Description text shown in the card
      description : description,

      // Add large image card if an image is provided
      ...(image && { card: "summary_large_image", images: [image] }),

      // Add video player card if a video is provided
      ...(video && { player: video }),

      // Twitter account associated with the content
      site        : "@selcukcukur",

      // Creator of the content, usually the same as site
      creator     : "@selcukcukur",
    },

    // Use provided or default favicons and touch icons
    icons         : icons,

    // Define the base site URL for resolving relative metadata links
    metadataBase  : domain,

    // Set canonical URL so search engines know the official page link
    ...((url || canonicalUrl) && {
      alternates  : { canonical : url || canonicalUrl }
    }),

    // Block search engines if noIndex is true
    ...(noIndex && {
      robots  : { index: false, follow: false },
    }),

    // Include manifest for Progressive Web App support
    ...(manifest && { manifest }),

    // Application name metadata
    applicationName : app,

    // Apple-specific web app settings
    appleWebApp     : {
      capable         : true,
      title           : app,
      statusBarStyle  : 'black',
    },

    // Configure automatic format detection
    formatDetection : {
      telephone : false,
      email     : false,
      address   : false,
      url       : false,
      date      : false,
    },

    // App links for mobile deep linking
    appLinks        : appLinks || {
      ios     : { url : "selcukcukur://login", app_store_id: "1602225583" },
      android : { url : "selcukcukur://login", package: "com.selcukcukur.app" },
      web     : { url : WEB_DOMAIN },
    },

    // Author information (defaults to app name if not provided)
    authors         : authors || [{ name: app, url: "https://selcukcukur.me" }],

    // Pagination metadata (prev/next links for multi-page content)
    pagination      : pagination || {},

    // Creator of the document (defaults to app name)
    creator         : creator || app,

    // Publisher of the document (defaults to app name)
    publisher       : publisher || app,
  }
}
