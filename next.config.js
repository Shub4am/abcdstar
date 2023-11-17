/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'm.media-amazon.com',
      'commondatastorage.googleapis.com',
      'upload.wikimedia.org',
      'mango.blender.org',
      'download.blender.org',
      'uhdtv.io',
      'images.unsplash.com',
    ],
  },
};

module.exports = nextConfig;
