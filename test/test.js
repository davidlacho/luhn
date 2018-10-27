const {
  assert,
} = require('chai');
const {
  checkDigit,
} = require('../check');

describe('Check', () => {
  it('should return true if input is a luhn digit', () => {
    const number = 79927398713;
    const result = checkDigit(number);
    assert.isTrue(result);
  });
});
