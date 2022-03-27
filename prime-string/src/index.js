const readline = require('readline');

let MOD = 1000000007;

function isPrime(number){
	let num = parseInt(number);
	
	for(let i = 2; i * i <= num; i++)
	{
	if ((num % i) == 0)
		return false;
	}
	return num > 1 ? true : false;
}

function countPrimeStrings(number,i){
	if (i == 0)
		return 1;
		
	let cnt = 0;

	for(let j = 1; j <= 6; j++){
    if (i - j >= 0 &&
      number[i - j] != '0' &&
      isPrime(number.substring(i - j, i)))
    {
      cnt += countPrimeStrings(number,
                    i - j);
      cnt %= MOD;
    }
	}
	
	return cnt;
}

function countingPrime(str) {
	let l = str.length;
	return countPrimeStrings(str, l);
}

function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question('Enter the string of number: ', (string) => {
    console.log(`Split prime result: ${countingPrime(string)}`);
    rl.close();
  });
};

main();