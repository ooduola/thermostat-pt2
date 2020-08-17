// Vanilla JS

document.addEventListener("DOMContentLoaded", function () {
	var thermostat = new Thermostat();
	document.getElementById(
		"current-temp"
	).innerHTML = thermostat.getCurrentTemp();

	document.getElementById("up").addEventListener("click", function () {
		thermostat.up();
		document.getElementById(
			"current-temp"
		).innerHTML = thermostat.getCurrentTemp();
	});

	document.getElementById("down").addEventListener("click", function () {
		thermostat.down();
		document.getElementById(
			"current-temp"
		).innerHTML = thermostat.getCurrentTemp();
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
		document.getElementById(
			"current-temp"
		).innerHTML = thermostat.resetTemperature();
	});
});
