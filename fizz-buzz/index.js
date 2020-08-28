/**
 * print out all the number from 1 - 100,
 * with all divisible of 3 printing Fizz,
 * all the divisible of 5 printing Buzz
 * and all divisible of 3 and 5 to print FizzBuzz
 */

 for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
   let strOutput = ""

   const isDivisibleBy = (currentNumber, num) => currentNumber % num === 0

   const isDivisibleBy3 = isDivisibleBy(currentNumber, 3)
   const isDivisibleBy5 = isDivisibleBy(currentNumber, 5)

   if(isDivisibleBy3) strOutput += "Fizz"
   if(isDivisibleBy5) strOutput += "Buzz"

   console.log(strOutput || currentNumber)
 }