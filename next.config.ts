import type { NextConfig } from "next";
// import withBundleAnalyzer from "@next/bundle-analyzer"

// const withAnalyzer = withBundleAnalyzer({ enabled: process.env.ANALYZE === "true" })
const nextConfig: NextConfig = {
	/* config options here */

	images: {
		remotePatterns: [
			{
				protocol: "https" as const,
				hostname: "lh3.googleusercontent.com",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https" as const,
				hostname: "res.cloudinary.com",
				port: "",
				pathname: "/**",
			},
		],
	},
};
export default nextConfig;
// export default withAnalyzer(nextConfig)

// MDX
// const withMDX = createMDX({
//   extension: /\.mdx?$/,
//   options: {
//     remarkPlugins: [remarkGfm],
//   },
// })

// export default withMDX(nextConfig)
