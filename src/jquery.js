// jquery

// $(document).ready(function () {
// 	var thermostat = new Thermostat();
// 	$("#current-temp").text(thermostat.getCurrentTemp());
// });

// Vanilla JS

document.addEventListener("DOMContentLoaded", function () {
	var thermostat = new Thermostat();
	document.getElementById(
		"current-temp"
	).innerHTML = thermostat.getCurrentTemp();

	document.getElementById("up").addEventListener("click", function () {
		document.getElementById("current-temp").innerHTML = thermostat.up();
	});

	// document.getElementById("down").addEventListener("click", function () {
	// 	document.getElementById("current-temp").innerHTML = thermostat.down();
	// });
});
