var { expect } = require("chai");
var App = require("./app.svelte")

describe("Operation", function() {
	describe("Addition", function() {
		it("should return 2", function() {
			expect(1+1).to.equal(2);
		});
	});
});
