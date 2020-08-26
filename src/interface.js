// Vanilla JS. Added to understand what's going on under the hood of jQuery.

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
		thermostat.resetTemperature();
		document.getElementById(
			"current-temp"
		).innerHTML = thermostat.getCurrentTemp();
	});

	// Ajax request made using jQuery
	// $.get(
	// 	"http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=71df5b3a7fbe60b520fbd45ec0c57c74&units=metric",
	// 	function (data) {
	// 		$("#city-temperature").text(data.main.temp);
	// 	}
	// );
	displayWeather("london");

	$("#city-name").submit(function (e) {
		var city = $("#city").val();

		displayWeather(city);

		// $.get(
		// 	"http://api.openweathermap.org/data/2.5/weather?q=" +
		// 		city +
		// 		"&appid=71df5b3a7fbe60b520fbd45ec0c57c74&units=metric",
		// 	function (data) {
		// 		$("#city-temperature").text(data.main.temp);
		// 		$("#current-city").text(data.name);
		// 	}
		// );
		e.preventDefault();
	});
});

function displayWeather(city) {
	var url = "http://api.openweathermap.org/data/2.5/weather?q=";
	var token = "&appid=71df5b3a7fbe60b520fbd45ec0c57c74";
	var metric = "&units=metric";

	$.get(url + city + token + metric, function (data) {
		$("#city-temperature").text(data.main.temp);
		$("#current-city").text(data.name);
	});
}
