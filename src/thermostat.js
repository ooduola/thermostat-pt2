class Thermostat {
	constructor() {
		this.temperature = 20;
		this.MINIMUM_TEMPERATURE = 10;
	}

	getCurrentTemp() {
		return this.temperature;
	}

	up() {
		if (this.temperature == 25) {
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

	powerSavingModeOn() {}
}
