import { DEVELOPMENT } from "./environments";
import alias from "@rollup/plugin-alias";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";

export default function(environment = DEVELOPMENT, generalPostPlugins = []) {
	return [
		{
			"external": [
				"vue"
			],
			"input": "src/index.js",
			"output": {
				"file": "dist/index.js",
				"format": "iife",
				"globals": {
					"vue": "Vue"
				},
				"interop": "auto",
				"name": "app"
			},
			"plugins": [
				alias({
					"entries": {
						"@": resolve(__dirname, "../../src")
					}
				}),
				vue({

				}),
				...generalPostPlugins
			]
		}
	];
}
