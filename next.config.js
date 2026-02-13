/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gumon.io",
      },
      {
        protocol: "https",
        hostname: "www.gumon.io",
      },
    ],
  },
  trailingSlash: true,
};

module.exports = nextConfig;
