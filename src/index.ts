import App from "@/app.svelte"

var app = new App({
	"target": document.body,
	"props": {
		"name": "world"
	}
})

export default app
