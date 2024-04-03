/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.imgur.com",
      },
    ],
  },
  env: {
    GOOGLE_CLIENT_ID:
      "905023012050-c3ilcevq8df1acoesrk7oa8purefbs6j.apps.googleusercontent.com",
    GOOGLE_CLIENT_SECRET: "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",
    PINTEREST_ID: "",
    PINTEREST_SECRET: "",
    NEXTAUTH_SECRET: "hRIMXFxrnKEKzRsMY8dAkegqynEbMUmbp+79UC+800Q=",
    NEXTAUTH_URL: "http://localhost:3000",
  },
};

export default nextConfig;
