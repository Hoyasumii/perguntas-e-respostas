import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	env: {
		DB_HOST: process.env.DB_HOST,
		DB_NAME: process.env.DB_NAME,
	},
	async headers() {
		return [
			{
				source: "/(.*)",
				headers: [
					{
						key: "X-Frame-Options",
						value: "DENY",
					},
					{
						key: "Content-Security-Policy",
						value: "frame-ancestors 'none';",
					},
				],
			},
		];
	},
};

export default nextConfig;
