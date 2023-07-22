/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn.shopify.com',
          port: '',
          pathname: '/s/files/1/0777/1199/9271/**',
        },
      ],
    },
}
// (https://cdn.shopify.com/s/files/1/0777/1199/9271/files/Main.jpg?v=1686821317)
module.exports = nextConfig
