/* eslint-disable max-lines-per-function */
import { DEVELOPMENT } from "./environments";
import alias from "@rollup/plugin-alias";
import nodeResolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
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
	];
}
