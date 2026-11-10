/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // product photos uploaded in Sanity are served from here
    remotePatterns: [{ protocol: "https", hostname: "cdn.sanity.io" }],
  },
  // /docs → the Swagger "try it out" page in public/docs.html
  async rewrites() {
    return [{ source: "/docs", destination: "/docs.html" }];
  },
};

export default nextConfig;
