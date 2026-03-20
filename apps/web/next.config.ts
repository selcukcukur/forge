import type { NextConfig } from "next"

/**
 * The next.js configuration object
 */
const nextConfig: NextConfig = {
    /**
     * Configure gzip compression for static assets
     */
    compress                  : true,

    /**
     * Configure indicators in development environment
     */
    devIndicators             : {
        // Position of the development overlay indicators in the UI
        position: 'bottom-right'
    },

    /**
     * When enabled, React performs additional checks and warnings to highlight potential problems
     */
    reactStrictMode           : true,

    /**
     * Currently left empty, but can be customized for performance improvements
     */
    turbopack                 : {},

    /**
     * TypeScript type errors are present, useful in monorepos where strict typing may block builds
     */
    typescript                : {
        // Disables type checking in production builds
        ignoreBuildErrors : true,
    },

    /**
     * This ensures compatibility for monorepo packages or dependencies that ship uncompiled code
     */
    transpilePackages         : [],

    /**
     * Ensures that specific dependencies are bundled for serverless functions or API routes that rely on them
     */
    outputFileTracingIncludes : {},

    /**
     * A list of packages that should be treated as external in the server build
     */
    serverExternalPackages    : [],

    /**
     * Experimental features that are not yet stable
     */
    experimental              : {
        // reduces bundle size by optimizing
        optimizePackageImports: [],
    },

    /**
     * Defines allowed external domains for the next.js image component
     */
    images                    : {
        remotePatterns: [
            { hostname: "cdn.selcukcukur.me" },
            { hostname: "www.google.com" },
            { hostname: "avatar.vercel.sh" },
            { hostname: "api.dicebear.com" },
            { hostname: "pbs.twimg.com" },
            { hostname: "lh3.googleusercontent.com" },
            { hostname: "avatars.githubusercontent.com" },
            { hostname: "media.cleanshot.cloud" },
        ],
    },

    /**
     * Customizes the Next.js build process by removing console logs and unused react properties
     */
    compiler                  : {
        // Removes console logs from the production build
        removeConsole         : false,

        // Removes unused react properties from the production build
        reactRemoveProperties : true
    },

    /**
     * Enables the Next.js dev server to proxy requests to external APIs
     */
    allowedDevOrigins         : ['selcukcukur.dev', '*.selcukcukur.dev'],

    /**
     * Adds security-related headers to all routes, including
     */
    async headers() {
        return [
            {
                source: "/:path*",
                headers: [
                    { key: "Referrer-Policy", value: "no-referrer-when-downgrade" },
                    { key: "X-DNS-Prefetch-Control", value: "on" },
                    { key: "X-Frame-Options", value: "DENY" }
                ],
            }
        ]
    },

    /**
     * Redirects users based on hostnames to appropriate destinations
     */
    async redirects() {
        return []
    },

    /**
     * Useful for proxying requests without exposing external URLs directly
     */
    async rewrites() {
        return []
    }
}

/**
 * This file must be placed at the root of the project and will
 * be automatically loaded by Next.js during build/runtime
 */
export default nextConfig
