/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        // pathname: "/u/**",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "/u/**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        // pathname: "/u/**",
      },
    ],
    // domains: [
    //   "res.cloudinary.com",
    //   "avatars.githubusercontent.com",
    //   "lh3.googleusercontent.com",
    // ],
  },
};

module.exports = nextConfig;
