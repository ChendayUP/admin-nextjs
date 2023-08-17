/**
 * @type {import('next').NextConfig}
 */
//  const path = require('path')
 import path from 'path'
 const nextConfig = {
  basePath: "/admin-one-react-tailwind",
  async redirects() {
    return [
      {
          source: '/',
          destination: '/admin-one-react-tailwind',
          basePath: false,
          permanent: false
      }
    ]
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.justboil.me',
      },
    ],
  },
  // webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
  //   config.resolve.alias = {
  //     ...config.resolve.alias,
  //     '@': path.resolve(__dirname, 'src'),
  //     // 其他别名
  //   };

  //   return config;
  // }
}

export default nextConfig