
   // prime function 
   function primeNums (num){
    // number only divisible by 1 & itself
    if (num < 2) return false;
    // identify if the number is dividble by itself return false
    // for loop to increment up until greater than the number
    for (let i = 2; i < num; i++) {
        // if divisble by self - return false
        if (num % i === 0) {
            return false;
        }
    }
    return true;
    }

console.log(num)

function choosePrimes(nums){
    // new array 
    let numsArray = [];
    // loop thru each number to see if its a prime number
    for (i = 0; i < nums.length; i++){
    // variable to identify each number
    let numbr = nums[i]
    // check each number and see if its a prime
    if(primeNums(numbr)){
    // push to numsArray
        numsArray.push(numbr)
    
        }
    
    }
      return numsArray
}


