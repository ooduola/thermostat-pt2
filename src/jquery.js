// Vanilla JS

$(document).ready(function () {
	var thermostat = new Thermostat();
	$("#current-temp").text(thermostat.getCurrentTemp());
});
