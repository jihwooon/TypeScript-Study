/** @type {import('next').NextConfig} */
const nextConfig = {
  logging: {
    fetches: {
      fullUrl: true
    }
  },
  images: {
    remotePatterns: [
      {
        hostname: 'shopping-phinf.pstatic.net',
      },
    ],
  },
};

export default nextConfig;
