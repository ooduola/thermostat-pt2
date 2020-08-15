describe("Thermostat", function () {
	beforeEach(function () {
		thermostat = new Thermostat();
	});

	it("should be 20 degrees", function () {
		expect(thermostat.getCurrentTemp()).toEqual(20);
	});

	it(" increases temperature by 1", function () {
		thermostat.up();
		expect(thermostat.getCurrentTemp()).toEqual(21);
	});

	it(" decreases temperature by 1", function () {
		thermostat.down();
		expect(thermostat.getCurrentTemp()).toEqual(19);
	});

	it(" minimum temperature is 10", function () {
		for (i = 0; i < 10; i++) {
			thermostat.down();
		}
		expect(function () {
			thermostat.down();
		}).toThrow("Minimum temperature reached");
	});
});
