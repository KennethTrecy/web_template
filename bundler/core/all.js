import { DEVELOPMENT } from "./environments";
import vue from "@vitejs/plugin-vue";

export default function(environment = DEVELOPMENT, generalPostPlugins = []) {
	return [
		{
			"input": "src/index.js",
			"output": {
				"file": "dist/index.js",
				"format": "iife",
				"interop": "auto",
				"name": "app"
			},
			"plugins": [
				vue({

				}),
				...generalPostPlugins
			]
		}
	];
}
