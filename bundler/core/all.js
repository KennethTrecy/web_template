import { join } from "path"
import scss from "rollup-plugin-scss";
import alias from "@rollup/plugin-alias"
import svelte from "rollup-plugin-svelte"
import autoPrepocess from "svelte-preprocess"
import commonjs from "@rollup/plugin-commonjs"
import nodeResolve from "@rollup/plugin-node-resolve"
import esbuild from "rollup-plugin-esbuild-transform"

import { PRODUCTION, DEVELOPMENT, TEST } from "./environments";

const ROOT = join(__dirname, "../..")
const TYPESCRIPT_CONFIGURATION = "tsconfig.json"

export default function(environment = DEVELOPMENT, generalPostPlugins = []) {
	const commonPipeline = [
		esbuild([
			{
				"loader": "ts",
				"tsconfig": join(ROOT, TYPESCRIPT_CONFIGURATION)
			}
		]),
		svelte({
			"compilerOptions": {
				"dev": environment === DEVELOPMENT || environment === TEST
			},
			"preprocess": autoPrepocess({
				"typescript": {
					"tsconfigDirectory": ROOT,
					"tsconfigFile": TYPESCRIPT_CONFIGURATION
				}
			})
		}),
		scss({
			"fileName": "index.css"
		}),
		alias({
			"entries": [
				{ find: /^@(\/|$)/, replacement: `${ROOT}/src/` }
			]
		}),
		nodeResolve({
			"browser": environment === PRODUCTION || environment === DEVELOPMENT,
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
				"output": true
			}
		])
	]

	return environment === TEST
	? [
		{
			"input": "src/app.spec.ts",
			"output": {
				"file": "hidden/t/app.spec.js",
				"format": "cjs",
				"interop": "auto",
				"name": "tests"
			},
			"external": [ "jsdom" ],
			"plugins": [
				...commonPipeline,
				...generalPostPlugins
			]
		}
	]
	: [
		{
			"input": "src/index.ts",
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
