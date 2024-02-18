import { DEVELOPMENT, PRODUCTION } from "./environments.js"
import esbuild from "rollup-plugin-esbuild"

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
				esbuild({
					"minify": environment === PRODUCTION
				}),
				...generalPostPlugins
			]
		}
	]
}
