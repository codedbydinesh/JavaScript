// Check if a number is prime

function isPrime(n){
    if(n < 2) return false;

    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n%i == 0) return false
    }

    return true;
}

// Sum of squares of prime numbers in an array
const sum = (arr) => {
    let sum = 0
    for (const value of arr) {
        if(isPrime(value)){
            sum += value*value;
        }
    }
    return sum
}

// Example usage
const ar = [1,2,3,4,5,6];

console.log(sum(ar));