import { CommonInfoBuilder } from "comroconbu";
import { DEVELOPMENT } from "./environments";
import scss from "rollup-plugin-scss";

export default function(environment = DEVELOPMENT, generalPostPlugins = []) {
	const sourceBuilder = new CommonInfoBuilder("src", "dist", "iife");

	return [
		...sourceBuilder.configureNamedSource(
			"index",
			"index.js",
			[
				scss({

				}),
				...generalPostPlugins
			]
		).toConfigurationArray()
	];
}
