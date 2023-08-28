/**
 *
 * Write a Node.js function isPrime(n) that takes an integer n as an argument and returns true if n is a prime number and false otherwise.
 *
 */
function isPrime(n) {
    if (typeof n !== 'number') {
        return 'Invalid Input'
    }

    if (n <= 0) {
        return 'Invalid Number'
    }

    // if (n < 1) {
    //     return 'Invalid' 
    // } 

    if (n == 1) {
        return false 
    } 

    if (n == 2) {
        return true 
    } 

    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            return false;
        } else {
            return true;
        }
    }
}

console.log(isPrime('halo'));
console.log(isPrime(0.5));
console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(10));
console.log(isPrime(43));
console.log(isPrime(100));