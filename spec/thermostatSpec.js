"use strict";

describe("Thermostat", function () {
	var thermostat;
	var i;
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
		for (i = 0; i < 11; i++) {
			thermostat.down();
		}
		expect(thermostat.getCurrentTemp()).toEqual(10);
	});

	it(" max temperature is 25 when powering saving mode is on", function () {
		thermostat.powerSavingModeOn();
		for (i = 0; i < 6; i++) {
			thermostat.up();
		}
		expect(thermostat.getCurrentTemp()).toEqual(25);
	});

	it(" maximum temperature is 32 when power saving mode is off", function () {
		thermostat.powerSavingModeOff();
		for (i = 0; i < 13; i++) {
			thermostat.up();
		}
		expect(thermostat.getCurrentTemp()).toEqual(32);
	});

	it(" power saving mode is on by default", function () {
		expect(thermostat.isPowerSavingModeOn()).toEqual(true);
	});

	it(" power saving mode can be turned off", function () {
		thermostat.powerSavingModeOff();
		expect(thermostat.isPowerSavingModeOn()).toEqual(false);
	});

	it(" power saving mode can be switched back on", function () {
		thermostat.powerSavingModeOff();
		thermostat.powerSavingModeOn();
		expect(thermostat.isPowerSavingModeOn()).toEqual(true);
	});

	it(" resets the temperature to 20 after increased", function () {
		thermostat.up();
		thermostat.resetTemperature();
		expect(thermostat.getCurrentTemp()).toEqual(20);
	});

	it(" returns medimum energy usage at default", function () {
		expect(thermostat.getEnergyUsage()).toEqual("medium-usage");
	});

	it(" returns low energy usage below 18 degrees", function () {
		for (i = 0; i < 3; i++) {
			thermostat.down();
		}
		expect(thermostat.getEnergyUsage()).toEqual("low-usage");
	});

	it(" returns high energy usage above 25 degrees", function () {
		thermostat.powerSavingModeOff();
		for (i = 0; i < 6; i++) {
			thermostat.up();
		}
		expect(thermostat.getEnergyUsage()).toEqual("high-usage");
	});
});
