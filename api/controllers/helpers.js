function splitArray(input, splitChar) {
	let output;

	if(input && input.length > 0) {
		output = input.split(splitChar);
	} else {
		output = [];
	}

	return output;
}

module.exports = {
	splitArray
}