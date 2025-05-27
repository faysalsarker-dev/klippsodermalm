/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['https://img.freepik.com', 'impro.usercontent.one', 'klippsodermalm.com','http://localhost:5000','https://piercing-backend.vercel.app'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'img.freepik.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'impro.usercontent.one',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'klippsodermalm.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'http://localhost:5000',
                port: '5000',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'piercing-backend.vercel.app',
                port: '',
                pathname: '/**',
            },
        ],
      },
};

export default nextConfig;
