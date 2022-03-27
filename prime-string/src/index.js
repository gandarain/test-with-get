const readline = require('readline');

/**
 * 
 * @param {string} str - str
 * @returns {number} split prime number
 */
const countPrimeStrings = (str) => {
  const splitPrime = 0;
  
  return splitPrime;
}

function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question('Enter the string of number: ', (string) => {
    console.log(`Split prime result: ${countPrimeStrings(string)}`);
    rl.close();
  });
};

main();