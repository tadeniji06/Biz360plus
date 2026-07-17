import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "cdn.sanity.io",
			},
		],
	},
	typescript: {
		ignoreBuildErrors: true,
	},
	experimental: {
		isrFlushToDisk: false,
	},
};

export default nextConfig;
