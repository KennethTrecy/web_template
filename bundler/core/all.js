/* eslint-disable max-lines-per-function */
import { CommonInfoBuilder } from "comroconbu";
import { DEVELOPMENT } from "./environments";
import alias from "@rollup/plugin-alias";
import nodeResolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";

export default function(environment = DEVELOPMENT, generalPostPlugins = []) {
	const sourceBuilder = new CommonInfoBuilder("src", "dist", "iife");
	const thirdPartyBuilder = new CommonInfoBuilder("third-party", "dist/third-party", "iife");

	return [
		...sourceBuilder.configureNamedSource(
			"index",
			"index.js",
			[
				alias({
					"entries": {
						"@": resolve(__dirname, "../../src")
					}
				}),
				vue({

				}),
				...generalPostPlugins
			],
			[
				thirdPartyBuilder.importExternalPackage(
					"vue",
					"Vue",
					"vue.js",
					[
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
				)
			]
		).toConfigurationArray()
	];
}
