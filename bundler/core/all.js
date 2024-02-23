import svelte from "rollup-plugin-svelte"
import autoPrepocess from "svelte-preprocess"
import commonjs from "@rollup/plugin-commonjs"
import nodeResolve from "@rollup/plugin-node-resolve"

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
				esbuild({
					"minify": environment === PRODUCTION
				}),
				...generalPostPlugins
			]
		}
	]
}
