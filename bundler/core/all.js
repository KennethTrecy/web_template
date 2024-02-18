import { DEVELOPMENT, PRODUCTION } from "./environments.js"
import esbuild from "rollup-plugin-esbuild"

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
			"plugins": [
				esbuild({
					"minify": environment === PRODUCTION
				}),
				...generalPostPlugins
			]
		}
	]
}
