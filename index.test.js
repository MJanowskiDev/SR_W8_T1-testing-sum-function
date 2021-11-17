const sum = require('./index');

describe('Sum function tests', () => {
	it('should work with numbers', () => {
		const number1 = 1;
		const number2 = 2;

		const result = sum(number1, number2);
		expect(result).toEqual(3);
	});

	it('should concat strings', () => {
		const string1 = 'string1';
		const string2 = 'string2';

		const result = sum(string1, string2);
		expect(result).toEqual('string1string2');
	});

	it('should treat null as zero', () => {
		const number1 = null;
		const number2 = null;

		const result = sum(number1, number2);
		expect(result).toEqual(0);
	});

	it('should treat undefined as NaN', () => {
		const number1 = undefined;
		const number2 = undefined;

		const result = sum(number1, number2);
		expect(result).toEqual(NaN);
	});

	it('should return NaN when no arguments passed', () => {
		const result = sum();
		expect(result).toEqual(NaN);
	});

	it('should return NaN when mixed argument types passed', () => {
		const number1 = 1;
		const string1 = 'string1';
		const result = sum(number1, string1);
		expect(result).toEqual(NaN);
	});
});
