/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes, interval) {
//check for right parameters 
// if (0 <= Number(hours)) && (Number(hours) <= 23) && (0 <= Number(minutes)) && (Number(minutes) <= 59):
	var minutes2 = (minutes + interval) % 60;
	
	var hours2 = (hours + Math.floor((minutes + interval)/ 60)) % 24;

	hours = String(hours2);
	if (hours2 < 10) {
		hours = '0' + hours;
	}

	minutes = String(minutes2);
	if (minutes2 < 10) {
		minutes = '0' + minutes;
	}

	return hours + ":" + minutes


};
