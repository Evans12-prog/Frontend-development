       // 1. implementing a function to accept two numbers and return maximum my way.
//function maximum(num1,num2){
  //  return  num1 >= num2 ? num1:num2;
//}
//let result = maximum(5,9);
//console.log(result);



        //I am writing a code to display a situation using the if statment.
/*function fuzzbucket(num1)
{
  if (num1%3===0 && num1%5===0)
    return 'FizzBuzz';
  else if (num1%3===0)
    return 'Fizz';
else if (num1%5===0)
    return 'Buzz';
else 
    return num1;
}

console.log(fuzzbucket(26));*/

                  ///QUESTION 3
/*function displayEvenNumbers(array){
  for (const number of array)
  {
    if (number%2===0)
      console.log(number);
  }
}

displayEvenNumbers([1,2,3,4,5,6,7,8,9,10]);*/


                  //I WILL MAKE THIS CODE DISPLAY ONLY ODD NUMBERS.
function displayOddNumbers(array){
  for(const number of array)
  {
    if(number%2!=0)
      console.log(number);
  }
}
displayOddNumbers([1,2,3,4,5,6,7,8,9,10]);
