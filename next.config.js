/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
    dest: "public",
    register: true,
    skipWaiting: true,
    runtimeCaching,
    buildExcludes: [/manifest.json$/],
    disable: !isProd,
});
const nextConfig = {
    reactStrictMode: true,
    compress: true,
    swcMinify: true,
    images: {
        unoptimized: true,
        domains: [""],
        minimumCacheTTL: 60,
    },
    trailingSlash: true,
    assetPrefix: isProd ? process.env.SITE_URL : "./", //static export
    webpack: config => {
        config.resolve.fallback = {fs: false, net: false, tls: false};
        return config;
    },
    i18n: {
        locales: ['en-US', 'zh-CN'],
        defaultLocale: 'en-US',
    },
};


module.exports = withPWA(nextConfig);
