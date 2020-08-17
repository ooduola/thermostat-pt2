class Thermostat {
	constructor() {
		this.DEFAULT_TEMPERATURE = 20;
		this.temperature = this.DEFAULT_TEMPERATURE;
		this.MINIMUM_TEMPERATURE = 10;
		this.MAXIMUM_TEMPERATURE = 25;
		this.powerSavingMode = true;
		this.MAX_TEMP_PSM_ON = 25;
		this.MAX_TEMP_PSM_OFF = 32;
		this.HIGH_USAGE_TEMP_LIMIT = 25;
		this.LOW_USAGE_TEMP_LIMIT = 18;
	}

	getCurrentTemp() {
		return this.temperature;
	}

	up() {
		if (this.isMaximumTemperature()) {
			return;
		}
		return this.temperature++;
	}

	down() {
		if (this.isMinimumTemperature()) {
			return;
		}
		return this.temperature--;
	}

	powerSavingModeOn() {
		this.powerSavingMode = true;
		this.MAXIMUM_TEMPERATURE = this.MAX_TEMP_PSM_ON;
	}

	powerSavingModeOff() {
		this.powerSavingMode = false;
		this.MAXIMUM_TEMPERATURE = this.MAX_TEMP_PSM_OFF;
	}

	resetTemperature() {
		this.temperature = this.DEFAULT_TEMPERATURE;
	}

	getEnergyUsage() {
		if (this.temperature > this.HIGH_USAGE_TEMP_LIMIT) {
			return "high-usage";
		} else if (this.temperature < this.LOW_USAGE_TEMP_LIMIT) {
			return "low-usage";
		}
		return "medium-usage";
	}

	isMinimumTemperature() {
		return this.temperature === this.MINIMUM_TEMPERATURE;
	}

	isMaximumTemperature() {
		if (this.isPowerSavingModeOn() === true) {
			return this.temperature === this.MAX_TEMP_PSM_ON;
		}
		return this.temperature === this.MAX_TEMP_PSM_OFF;
	}

	isPowerSavingModeOn() {
		return this.powerSavingMode === true;
	}
}
