/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Les images sont déjà optimisées et servies telles quelles :
  // cela permet un hébergement partout (Vercel, Netlify, export statique...).
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
