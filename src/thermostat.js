class Thermostat {
	constructor() {
		this.temperature = 20;
	}
	getCurrentTemp() {
		return this.temperature;
	}
	up() {
		this.temperature = 21;
	}

	down() {
		this.temperature--;
	}
}
