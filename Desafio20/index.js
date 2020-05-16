// https://vanillajstoolkit.com/helpers/pick/

var pick = function (obj, props) {

	'use strict';

	// Make sure object and properties are provided
	if (!obj || !props) return;

	// Create new object
	var picked = {};

	// Loop through props and push to new object
	props.forEach(function(prop) {
		picked[prop] = obj[prop];
	});

	// Return new object
	return picked;

};

var lunch = {
	sandwich: 'turkey',
	drink: 'water',
	chips: 'salt and vinegar',
	desert: true
}; 

console.log(pick(lunch, ['sandwich', 'drink']));