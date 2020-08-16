class Thermostat {
	constructor() {
		this.temperature = 20;
		this.MINIMUM_TEMPERATURE = 10;
		this.MAXIMUM_TEMPERATURE = 25;
		this.powerSavingMode = true;
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

	resetTemperature() {
		this.temperature = 20;
	}

	getEnergyUsage() {
		if (this.temperature > 25) {
			return "high-usage";
		} else if (this.temperature < 18) {
			return "low-usage";
		}
		return "medium-usage";
	}
}
