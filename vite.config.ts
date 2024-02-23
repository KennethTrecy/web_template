import { defineConfig } from "vite"
import { sveltekit } from "@sveltejs/kit/vite"

export default defineConfig({
	"plugins": [
		sveltekit()
	],
	"server": {
		"host": true,
		"port": 8000,
		"open": false,
		"watch": {
			"usePolling": true
		}
	},
	"test": {
		"include": [ "t/**/*.ts" ]
	}
})
