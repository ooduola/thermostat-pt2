class Thermostat {
	constructor() {
		this.temperature = 20;
		this.MINIMUM_TEMPERATURE = 10;
		this.MAXIMUM_TEMPERATURE = 25;
	}

	getCurrentTemp() {
		return this.temperature;
	}

	up() {
		if (this.temperature === this.MAXIMUM_TEMPERATURE) {
			throw "Maximum temperature reached";
		}

		this.temperature++;
	}

	down() {
		if (this.temperature === this.MINIMUM_TEMPERATURE) {
			throw "Minimum temperature reached";
		}

		this.temperature--;
	}

	powerSavingModeOn() {
		this.MAXIMUM_TEMPERATURE = 25;
	}

	powerSavingModeOff() {
		this.MAXIMUM_TEMPERATURE = 32;
	}
}
