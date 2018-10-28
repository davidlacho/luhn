const {
  assert,
} = require('chai');
const {
  checkDigit,
  getArrayFromNumber,
  doubleEverySecondDigit,
} = require('../check');

describe('Luhn Checker', () => {
  describe('checkDigit', () => {
    it('should return true if input is a luhn digit', () => {
      const number = 79927398713;
      const result = checkDigit(number);
      assert.isTrue(result);
    });
  });
});

describe('Helper Functions', () => {
  describe('getArrayFromNumber', () => {
    it('should return an array from a number', () => {
      const number = 79927398713;
      const result = getArrayFromNumber(number);
      assert.isTrue(Array.isArray(result));
    });

    it('should have values that are all of type number', () => {
      const number = 79927398713;
      const result = getArrayFromNumber(number);
      const allNumbers = result.every(val => typeof val === 'number');
      assert.isTrue(allNumbers);
    });

    it('should be the same length as the input', () => {
      const number = 123;
      const inputLength = number.toString().length;
      const result = getArrayFromNumber(number);
      const resultLength = result.length;
      assert.isTrue(inputLength === resultLength);
    });
  });
  describe('doubleEverySecondDigit', () => {
    it('should return an array', () => {
      const result = doubleEverySecondDigit([1, 2, 3]);
      assert.isTrue(Array.isArray(result));
    });
    it('it should not double the most rightmost number (the check digit)(arr[-1]), but should double arr[-2]', () => {
      const input = [5, 2, 111, 4, 1];
      const result = doubleEverySecondDigit(input);
      assert.isTrue(result[4] === 1 && result[3] === 8);
    });
    it('it should double every second digit', () => {
      const input = [1, 5, 2, 111, 4, 0];
      const result = doubleEverySecondDigit(input);
      assert.isTrue(
        result[0] === 2 &&
        result[1] === 5 &&
        result[2] === 4 &&
        result[3] === 111 &&
        result[4] === 8 &&
        result[5] === 0
      );
    });
  });
});
