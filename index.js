const sum = (a, b) => {
	if (typeof a !== typeof b) {
		return NaN;
	}
	return a + b;
};

module.exports = sum;
