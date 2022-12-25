import svelte from "rollup-plugin-svelte"
import autoPrepocess from "svelte-preprocess"
import commonjs from "@rollup/plugin-commonjs"
import nodeResolve from "@rollup/plugin-node-resolve"

import { PRODUCTION, DEVELOPMENT, TEST } from "./environments";

export default function(environment = DEVELOPMENT, generalPostPlugins = []) {
	const commonPipeline = [
		svelte({
			"compilerOptions": {
				"dev": environment === DEVELOPMENT || environment === TEST
			},
			"preprocess": autoPrepocess({

			})
		}),
		nodeResolve({
			"browser": environment === PRODUCTION || environment === DEVELOPMENT,
			"exportConditions": [ "svelte" ],
			"extensions": [ ".svelte" ],
			"dedupe": [ "svelte" ]
		}),
		commonjs(),
	]

	return environment === TEST
	? [
		{
			"input": "src/**/*.spec.ts",
			"output": {
				"file": "hidden/index.js",
				"format": "cjs",
				"interop": "auto",
				"name": "tests"
			},
			"plugins": [
				...commonPipeline,
				...generalPostPlugins
			]
		}
	]
	: [
		{
			"input": "src/index.js",
			"output": {
				"file": "dist/index.js",
				"format": "iife",
				"interop": "auto",
				"name": "app"
			},
			"plugins": [
				...commonPipeline,
				...generalPostPlugins
			]
		}
	];
}
