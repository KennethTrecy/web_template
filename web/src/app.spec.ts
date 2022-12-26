import { expect } from "chai"
import { JSDOM } from "jsdom"
import App from "@/app.svelte"

describe("App", function() {
	describe("Basic", function() {
		it("should say hello to Alice", function() {
			const { window } = new JSDOM()
			const { document } = window
			const container = document.createElement("div")
			document.body.appendChild(container)
			global.window = window
			global.document = document

			const app = new App({
				"target": container,
				"props": {
					"name": "Alice"
				}
			})

			expect(container.querySelector("p")).not.to.null
			expect(container.querySelector("p").innerHTML).to.equal("Hello Alice!")
		});
	});
});
