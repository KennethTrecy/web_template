import App from "@/app.vue";
import { shallowMount } from "@vue/test-utils";

it("can test", () => {
	const app = shallowMount(App, {
		"props": {}
	});

	const span = app.find("span");

	expect(span.html()).toContain("Hello World!");
});
