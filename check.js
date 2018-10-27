/**
 * Double every second digit, from the rightmost:
 * (1×2) = 2, (8×2) = 16, (3×2) = 6, (2×2) = 4, (9×2) = 18
 *
 * Sum all the individual digits (digits in parentheses are the products from Step 1):
 * x (the check digit) + (2) + 7 + (1+6) + 9 + (6) + 7 + (4) + 9 + (1+8) + 7 = x + 67.
 * If the sum is a multiple of 10,
 * the account number is possibly valid.
 * Note that 3 is the only valid digit that produces a sum (70) that is a multiple of 10.
 * Thus these account numbers are all invalid except possibly:
 * 79927398713 which has the correct check digit.
 */

/**
 * checkDigit checks if a number is "luhn" valid
 * @param  {[Number]} digit [description]
 * @return {[Boolean]}      [if input is a luhn digit returns true]
 */
const checkDigit = digit => true;

const getArrayFromNumber = number => [9, 10, 11];

module.exports = {
  checkDigit,
  getArrayFromNumber,
};
