/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#FD6F00",
          700: "#E60026"
        }
      }
    }
  }
};

module.exports = nextConfig;
