import { resolve } from "path"
import adapter from "@sveltejs/adapter-cloudflare"

/** @type {import("@sveltejs/kit").Config} */
const configuration = {
	"kit": {
		"adapter": adapter(),
		"alias": {
			"@/*": resolve("./src"),
			"~/*": resolve("./t")
		}
	}
}

export default configuration
