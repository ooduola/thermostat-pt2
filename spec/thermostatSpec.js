describe("Thermostat", function () {
	var thermostat = new Thermostat();

	describe("starting temperature", function () {
		it("should be 20 degrees", function () {
			expect(thermostat.temperature()).toEqual(20);
		});
	});

	describe("up", function () {
		it("should increase the temperature by 1", function () {
			expect(thermostat.up()).toEqual(21);
		});

		// it("should increase the temperatur by 2", function () {
		// 	thermostat.up();
		// 	expect(thermostat.up()).toEqual(22);
		// });
	});
});
