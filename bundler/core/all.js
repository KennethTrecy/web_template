import { DEVELOPMENT } from "./environments";
import scss from "rollup-plugin-scss";

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
				scss({

				}),
				...generalPostPlugins
			]
		}
	];
}
