// https://vanillajstoolkit.com/helpers/getmonths/

var getMonths = function (month, short) {

	// Create month names
	var format = short ? 'short' : 'long';
	var monthNames = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(function (mon) {
		return new Date(2000, mon).toLocaleString('pt-BR', {month: format});
	});

	// Return month name (or all of them)
	if (month) {
		return monthNames[(month - 1)];
	}
	return monthNames;

};