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
 * @param  {[number]} num   [input is a number]
 * @return {[array]}        [where all digits of number are new element]
 */
const getArrayFromNumber = (num) => {
  const newArr = [];
  const stringed = num.toString();
  for (let i = 0; i < stringed.length; i += 1) {
    newArr.push(Number(stringed[i]));
  }
  return newArr;
};


/**
 * doubleEverySecondDigit, from the rightmost (but not last digit, aka arr[-2])
 * @param  {[array]} arr [array of numbers from user input]
 * @return {[type]}     [array of numbers, second from right doubled]
 */
const doubleEverySecondDigit = (arr) => {
  const reversed = [...arr].reverse();
  const doubled = reversed.map((val, i) => {
    if (i % 2 === 1) {
      return val * 2;
    }
    return val;
  });
  return doubled.reverse();
};

/**
 * sumIndividualDigits,
 * If the result of doubling operation is greater
 * than 9 (e.g., 8 × 2 = 16), subtact 9 from the product
 *
 * @param  {[array]} arr [array of numbers where every second digit from the rightmost is doubled]
 * @return {[number]}     [sum of individual digits (see above comment)]
 */
const sumIndividualDigits = (arr) => {
  let count = 0;
  arr.forEach((value) => {
    if (value > 9) {
      count += (value - 9);
    } else {
      count += value;
    }
  });
  return count;
};

/**
 * isModuloOfTen checks if a number is a modulo of 10
 * @param  {[number]}  num [the sum of all individual digits]
 * @return {Boolean}     [returns true if the sum's modulo is 10]
 */
const isModuloOfTen = num => num % 10 === 0;
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
const checkDigit = input => isModuloOfTen(sumIndividualDigits(doubleEverySecondDigit(getArrayFromNumber(input))));

// get number from user; print it result to the console.
// Comment out this line for testing:
const input = process.argv[2];
if (input) {
  console.log(checkDigit(input));
} else {
  console.log('node check.js <number>');
}


/*
 * -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
 * EXPORTS (FOR TESTING)
 * -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
 */

module.exports = {
  checkDigit,
  getArrayFromNumber,
  doubleEverySecondDigit,
  sumIndividualDigits,
  isModuloOfTen,
};
