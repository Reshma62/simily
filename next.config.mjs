/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Allow next/image to optimize Unsplash stock photos
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
