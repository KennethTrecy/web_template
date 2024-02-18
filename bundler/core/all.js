import { join, dirname } from "path"
import { fileURLToPath } from "url"
import { DEVELOPMENT, PRODUCTION } from "./environments.js"
import esbuild from "rollup-plugin-esbuild"

export const ROOT = join(dirname(fileURLToPath(import.meta.url)), "../..")
export const TYPESCRIPT_CONFIGURATION = join(ROOT, "tsconfig.json")

export default function(environment = DEVELOPMENT, generalPostPlugins = []) {
	return [
		{
			"input": "src/index.ts",
			"output": {
				"file": "dist/index.js",
				"format": "esm",
				"interop": "auto",
				"name": "app"
			},
			"plugins": [
				esbuild({
					"minify": environment === PRODUCTION,
					"tsconfig": TYPESCRIPT_CONFIGURATION
				}),
				...generalPostPlugins
			]
		}
	]
}
