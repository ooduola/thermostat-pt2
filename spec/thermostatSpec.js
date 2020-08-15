describe("Thermostat", function () {
	var thermostat = new Thermostat();

	describe("starting temperature", function () {
		it("should be 20 degrees", function () {
			expect(thermostat.temperature()).toEqual(20);
		});
	});
});
