

function isPrime(number, primes) {
    // return true or false
    return true;
}

var primesList = [2, 3];
var current = 4;

// to store amount of denominators
var denominatorsCount = 0;

function calculatePrimes() {
    while(primesList.length < 100) {
        if(isPrime(current, primesList)) {
            for(let i = 2; i < current; i++) {
                if(current % i === 0) {
                    denominatorsCount++;
                }
            }
            denominatorsCount === 0 ? primesList.push(current) : denominatorsCount = 0;
            //# add it to primesList if it is prime
        }
        current += 1
    }
    return primesList;
}
console.log(calculatePrimes());
//console.log(primesList.length);
