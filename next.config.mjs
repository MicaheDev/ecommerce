/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "assets.adnradio.cl",
        port: "",
      },
      {
        protocol: "https",
        hostname: "hmchile.vtexassets.com",
        port: "",
      }
    ],
  },
};

export default nextConfig;
