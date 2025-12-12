import withPWAInit from "next-pwa";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {},
};

// ⚡ next-pwa setup
const withPWA = withPWAInit({
  dest: "public", // where the service worker is generated
  register: true,
  skipWaiting: true,
  // disable: process.env.NODE_ENV === "development", // disable in dev mode
});

// 🧩 Combine both wrappers
export default withPWA(nextConfig);
