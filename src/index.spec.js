const chai = import("chai");

describe("Operation", function() {
	describe("Addition", function() {
		it("should return 2", async function() {
			const { expect } = await chai
			expect(1+1).to.equal(2);
		});
	});
});
