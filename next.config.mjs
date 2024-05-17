/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: "/",
                destination: "/welcome",
                permanent: true,
            },
        ];
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "upload.wikimedia.org",
                port: "",
                pathname: "/wikipedia/**",
            },
        ],
    },
    webpack(webpackConfig) {
        return {
            ...webpackConfig,
            optimization: {
                minimize: false,
            },
        };
    },
};

export default nextConfig;
