/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['https://img.freepik.com', 'impro.usercontent.one', 'klippsodermalm.com'],
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
        ],
      },
};

export default nextConfig;
