/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/shop",
        destination: "/store",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
