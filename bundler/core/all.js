import { DEVELOPMENT } from "./environments";

export default function(environment = DEVELOPMENT, plugins = []) {
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
