// @vitest-environment jsdom

import { cleanup, render } from "@testing-library/vue";
import { expect, it } from "vitest";

import App from "@/app.vue";

it("can test", () => {
	const { container } = render(App, {
		"props": {}
	});

	const span = container.querySelector("span");

	expect(span.innerHTML).toContain("Hello World!");

	cleanup();
});
