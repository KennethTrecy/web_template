import { DEVELOPMENT } from "./environments";

export default function(environment = DEVELOPMENT, generalPostPlugins = []) {
	return [
		{
			"input": "src/index.js",
			"output": {
				"file": "dist/index.js",
				"format": "iife",
				"interop": "auto"
			},
			"plugins": [
				...generalPostPlugins
			]
		}
	];
}
