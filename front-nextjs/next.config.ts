import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  i18n: {
    locales:["en-US", "en", "ko"],
    defaultLocale: "ko"
  }
};

export default nextConfig;
