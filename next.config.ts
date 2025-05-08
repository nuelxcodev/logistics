import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

// Import the plugin with config path
const withNextIntl = createNextIntlPlugin('./next-intl.config.ts');

// Your Next.js config
const nextConfig: NextConfig = {
  images: {
    domains: ["images.unsplash.com"],
  },
};

// Export wrapped config
export default withNextIntl(nextConfig);