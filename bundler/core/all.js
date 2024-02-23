/* eslint-disable max-lines-per-function */
import { fileURLToPath } from "url"
import { resolve, join, dirname } from "path"

import alias from "@rollup/plugin-alias"
import nodeResolve from "@rollup/plugin-node-resolve"
import replace from "@rollup/plugin-replace"
import vue from "@vitejs/plugin-vue"
import esbuild from "rollup-plugin-esbuild"

import { DEVELOPMENT, PRODUCTION } from "./environments.js"

export const ROOT = join(dirname(fileURLToPath(import.meta.url)), "../..")

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
						"@": resolve(ROOT, "src")
					}
				}),
				vue({

				}),
				esbuild({
					"minify": environment === PRODUCTION
				}),
				...generalPostPlugins
			]
		},
		{
			"input": "third-party/vue.js",
			"output": {
				"file": "dist/third-party/vue.js",
				"format": "iife",
				"interop": "auto",
				"name": "Vue"
			},
			"plugins": [
				nodeResolve({
					"browser": true
				}),
				replace({
					"preventAssignment": false,
					"values": {
						"__VUE_OPTIONS_API__": "false",
						"__VUE_PROD_DEVTOOLS__": `${environment === DEVELOPMENT}`,
						"process.env.NODE_ENV": `"${environment}"`
					}
				}),
				...generalPostPlugins
			]
		}
	]
}
