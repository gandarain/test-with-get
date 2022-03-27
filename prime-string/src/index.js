const readline = require('readline');

const MOD = 1000000007;

const isPrime = (number) => {
  const num = parseInt(number);
	
	for(let i = 2; i * i <= num; i++){
    if ((num % i) == 0)
      return false;
  }

	return num > 1 ? true : false;
}

const countingPrime = (strNumber, i) => {
  if (i == 0) return 1;

	let cnt = 0;

	for(let j = 1; j <= 6; j++){
    if (i - j >= 0 &&
      strNumber[i - j] != '0' &&
      isPrime(strNumber.substring(i - j, i))
    ){
      cnt += countingPrime(strNumber,
                    i - j);
      cnt %= MOD;
    }
	}
	
	return cnt;
}

const countPrimeStrings = (str) => {
  const l = str.length;
	return countingPrime(str, l);
}

function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question('Enter the number: ', (string) => {
    console.log(`Count prime string result: ${countPrimeStrings(string)}`);
    rl.close();
  });
};

main();