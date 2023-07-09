// @vitest-environment jsdom

import { cleanup, render } from "@testing-library/svelte";
import { expect, it } from "vitest";

import App from "@/routes/+page.svelte";

it("can test", () => {
	const { container } = render(App, {
		"props": {}
	});

	const span = container.querySelector("span");

	expect(span.innerHTML).toContain("Hello World!");

	cleanup();
});
