/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'img.freepik.com',
      'impro.usercontent.one',
      'klippsodermalm.com',
      'piercing-backend.vercel.app',
      'testing.pieringsodermalm.com',
      'test.pieringsodermalm.com',
      'localhost'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.freepik.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'impro.usercontent.one',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'klippsodermalm.com',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '5000',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'piercing-backend.vercel.app',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'testing.pieringsodermalm.com',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'test.pieringsodermalm.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
