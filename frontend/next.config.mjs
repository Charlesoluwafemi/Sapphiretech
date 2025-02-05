/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'], // Allow localhost for image sources
  },
  reactStrictMode: true, // Optional: Enforce best practices
};

export default nextConfig;
