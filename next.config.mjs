/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: process.env.ALLOWED_DEV_ORIGINS
    ? process.env.ALLOWED_DEV_ORIGINS.split(",").map((o) => o.trim())
    : [],
  devIndicators: false,
};

export default nextConfig;
