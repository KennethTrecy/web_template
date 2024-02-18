import { PRODUCTION } from "../core/environments.js"
import all from "../core/all.js"
import esbuild from "rollup-plugin-esbuild"

export default all(PRODUCTION, [
	esbuild({
		"minify": true
	})
])
