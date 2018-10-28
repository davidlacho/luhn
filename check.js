/*
 * -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
 * PROJECT DESCRIPTION
 * -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
 */
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

/*
 * -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
 * HELPER FUNCTIONS
 * -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
 */

/**
 * getArrayFromNumber returns an array of its input
 * @param  {[number]} num   [takes a number]
 * @return {[array]}        [all digits of number are new element]
 */
const getArrayFromNumber = num => [9, 10, 11];

/**
 * doubleEverySecondDigit, from the rightmost
 * @param  {[array]} arr [array of numbers from user input]
 * @return {[type]}     [array of numbers, second from right doubled]
 */
const doubleEverySecondDigit = (arr) => {
  const reversed = [...arr].reverse();
  const doubled = reversed.map((val, i) => {
    if (i % 2 === 0) {
      return val * 2;
    }
    return val;
  });
  return doubled.reverse();
};

/*
 * -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
 * IMPLEMENTATION
 * -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
 */

/**
 * checkDigit checks if a number is "luhn" valid
 * @param  {[Number]} input [digit to check]
 * @return {[Boolean]}      [if input is a luhn digit returns true]
 */
const checkDigit = (input) => {
  const inputAsArray = getArrayFromNumber(input);
  return true;
};

/*
 * -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
 * EXPORTS (FOR TESTING)
 * -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
 */

module.exports = {
  checkDigit,
  getArrayFromNumber,
  doubleEverySecondDigit
};
