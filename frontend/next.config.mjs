/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
  },
  reactStrictMode: true, // Ensure this is here
  experimental: {}, // Ensure there are no experimental features breaking the build
};

export default nextConfig;
