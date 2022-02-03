import { CommonInfoBuilder } from "comroconbu";
import { DEVELOPMENT } from "./environments";

export default function(environment = DEVELOPMENT, generalPostPlugins = []) {
	const sourceBuilder = new CommonInfoBuilder("src", "dist", "iife");

	return [
		...sourceBuilder.configureNamedSource(
			"index",
			"index.js",
			[
				...generalPostPlugins
			]
		).toConfigurationArray()
	];
}
