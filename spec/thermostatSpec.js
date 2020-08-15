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
});
