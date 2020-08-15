class Thermostat {
	constructor() {
		this.temperature = 20;
		this.MINIMUM_TEMPERATURE = 10;
	}

	getCurrentTemp() {
		return this.temperature;
	}
	up() {
		this.temperature = 21;
	}

	down() {
		if (this.temperature === this.MINIMUM_TEMPERATURE) {
			throw "Minimum temperature reached";
		}

		this.temperature--;
	}
}
