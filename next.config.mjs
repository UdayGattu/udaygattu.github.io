const isProd = process.env.NODE_ENV === "production";

module.exports = {
  reactStrictMode: true,
  assetPrefix: isProd ? "/udaygattu.github.io" : "",
  basePath: isProd ? "/udaygattu.github.io" : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? "/udaygattu.github.io" : "",
  },
};
