/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      
      'klippsodermalm.com',
      'piercing-backend.vercel.app',
      'testing.pieringsodermalm.com',
      'test.pieringsodermalm.com',
      'localhost',
      'backend.piercingsodermalm.se'
    ],
    remotePatterns: [
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
      {
        protocol: 'https',
        hostname: 'backend.piercingsodermalm.se',
        pathname: '/**',
      }
    ],
  },
};

export default nextConfig;
