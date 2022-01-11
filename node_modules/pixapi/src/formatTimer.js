'use strict';
module.exports = milliseconds => {
	if (typeof milliseconds !== 'number') {
		throw new TypeError('Expected a number');
	}

	const roundTowardsZero = milliseconds > 0 ? Math.floor : Math.ceil;

	return {
		years: roundTowardsZero(milliseconds / 3.154e+10),
		mouths: roundTowardsZero(milliseconds / 2.628e+9) % 12,
		days: roundTowardsZero(milliseconds / 86400000) % 30,
		daystotal: roundTowardsZero(milliseconds / 86400000),
		hours: roundTowardsZero(milliseconds / 3600000) % 24,
		minutes: roundTowardsZero(milliseconds / 60000) % 60,
		seconds: roundTowardsZero(milliseconds / 1000) % 60,
		milliseconds: roundTowardsZero(milliseconds) % 1000,
		microseconds: roundTowardsZero(milliseconds * 1000) % 1000,
		nanoseconds: roundTowardsZero(milliseconds * 1e6) % 1000
	}
};

