export default function(plugins = []) {
	return [
		{
			"input": "src/index.js",
			"output": {
				"file": "dist/index.js",
				"format": "iife",
				"interop": "auto"
			},
			"plugins": [
				...plugins
			]
		}
	];
}
