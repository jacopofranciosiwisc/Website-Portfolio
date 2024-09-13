const nextConfig = {
	webpack: (config, { isServer }) => {
		// Fixes npm packages that depend on `fs` module for client-side
		if (!isServer) {
			config.resolve.fallback = {
				fs: false,
			};
		}

		// Grab the existing rule that handles SVG imports
		const fileLoaderRule = config.module.rules.find((rule) =>
			rule.test?.test?.('.svg')
		);

		// Apply the existing rule, but only for svg imports ending in ?url
		config.module.rules.push(
			{
				...fileLoaderRule,
				test: /\.svg$/i,
				resourceQuery: /url/, // *.svg?url
			},
			// Convert all other *.svg imports to React components
			{
				test: /\.svg$/i,
				issuer: fileLoaderRule.issuer,
				resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
				use: ['@svgr/webpack'],
			}
		);

		// Modify the file loader rule to ignore *.svg, since we have it handled now.
		fileLoaderRule.exclude = /\.svg$/i;

		return config;
	},
};

export default nextConfig;
