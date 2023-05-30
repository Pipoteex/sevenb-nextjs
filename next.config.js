/** @type {import('next').NextConfig} */
const nextConfig = {
    module: {
        rules: [
            {
                test: /\.json$/,
                use: "json-loader",
            },
        ],
    },
};

module.exports = nextConfig;
