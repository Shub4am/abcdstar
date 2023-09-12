/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'commondatastorage.googleapis.com',
      'upload.wikimedia.org',
      'mango.blender.org',
      'download.blender.org',
      'uhdtv.io',
    ],
  },
};

module.exports = nextConfig;
