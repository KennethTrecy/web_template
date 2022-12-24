import { join } from "path"
import svelte from "rollup-plugin-svelte"
import autoPrepocess from "svelte-preprocess"
import commonjs from "@rollup/plugin-commonjs"
import nodeResolve from "@rollup/plugin-node-resolve"
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
			"plugins": [
				svelte({
					"preprocess": autoPrepocess({

					})
				}),
				nodeResolve({
					"browser": true,
					"exportConditions": [ "svelte" ],
					"extensions": [ ".svelte" ],
					"dedupe": [ "svelte" ]
				}),
				commonjs(),
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
