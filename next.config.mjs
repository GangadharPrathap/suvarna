/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // ensures static local images and Vercel export/deployment works without any domain restrictions
  },
};

export default nextConfig;
