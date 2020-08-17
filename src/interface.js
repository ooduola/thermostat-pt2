// Vanilla JS

document.addEventListener("DOMContentLoaded", function () {
	var thermostat = new Thermostat();
	getUpdatedTemperature();

	document.getElementById("up").addEventListener("click", function () {
		thermostat.up();
		getUpdatedTemperature();
	});

	document.getElementById("down").addEventListener("click", function () {
		thermostat.down();
		getUpdatedTemperature();
	});

	document.getElementById("PSM-off").addEventListener("click", function () {
		thermostat.powerSavingModeOff();
		document.getElementById("power-saving-mode").innerHTML = "Off";
	});

	document.getElementById("PSM-on").addEventListener("click", function () {
		thermostat.powerSavingModeOn();
		document.getElementById("power-saving-mode").innerHTML = "On";
	});

	document.getElementById("reset").addEventListener("click", function () {
		thermostat.resetTemperature();
		getUpdatedTemperature();
	});
});

var getUpdatedTemperature = function () {
	document.getElementById(
		"current-temp"
	).innerHTML = thermostat.getCurrentTemp();
};
