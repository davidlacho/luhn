const {
  assert,
} = require('chai');
const {
  checkDigit,
  getArrayFromNumber,
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
});
