import { join } from "path"
import esbuild from "rollup-plugin-esbuild-transform"
import { DEVELOPMENT } from "./environments";

const ROOT = join(__dirname, "../..")
const TYPESCRIPT_CONFIGURATION = "tsconfig.json"

export default function(environment = DEVELOPMENT, generalPostPlugins = []) {
	return [
		{
			"input": "src/index.ts",
			"output": {
				"file": "dist/index.js",
				"format": "iife",
				"interop": "auto",
				"name": "app"
			},
			"plugins": [,
				esbuild([
					{
						"loader": "ts",
						"tsconfig": join(ROOT, TYPESCRIPT_CONFIGURATION)
					},
					{
						"loader": "js",
						// "minify": true,
						"output": true
					}
				]),
				...generalPostPlugins
			]
		}
	];
}
