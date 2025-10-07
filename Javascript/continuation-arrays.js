//To add a number to an array using 'push'
//const number = [1,2,3,4,5];
//number.push(7,8,9);
//console.log(number);


//ADDING NUMBERS TO THE FRONT
//const numbers = [1, 2, 3, 4, 5, 6];
//numbers.unshift(25,2,5,);
//console.log(numbers);

//ADDING ELEMENT TO THE MIDDLE
//const numbers = [4, 5, 6, 7, 8];
//numbers.splice(2,0,23,22);
//console.log(numbers);

             //AM DEALING WITH INDEX
//const numbers = [5, 4, 3, 2, 1, 3];
//const indexOfThree = numbers.indexOf(3);
 //console.log(numbers[indexOfThree] );


             //FIND
/*const employees = [
    {
        id: 1,
        name: 'jim'
    },
    {
        id:3,
        name:'micheal adams'
    },
   {
    id:5,
    name:'james lake junior'
   },
];

const employee = employees.find((e) => e.name === 'jim'
);
console.log(employee);*/


            // AM DEALING WITH ARROWS FUNCTIONS
            //The arrow function can be used inplace of the return function
//function add(num1, num2){
  //  return num1 + num2
//};
//console.log(add (3,4));

//const add = (num1, num2) => num1 + num2;
//console.log(add (5,4) );

              /// REMOVING ELEMENT FROM AN ARRAY.
/*const element = [1, 2, 3, 4, 5, 6];
const lastElement = element.pop();
console.log(`lastElement: ${lastElement}\n`); 

const firstElement = element.shift();
console.log(`firstElement: ${firstElement}`);

const middleElement = element.splice(1, 1);
console.log(`middleElement: ${middleElement}`);
*/
           // HOW TO DISPLAY A NULL ARRAY.
//const number = [1, 2, 3, 4, 5];
//while (number.length > 0)
  //  number.pop();
//console.log(number);


//COMBINATION OF AN ARRAY.
/*const exampleNumberA = [1, 2, 3, 4];
const exampleNumberB = [5, 6, 7, 8];
let combination = [...exampleNumberA , ...exampleNumberB,9,10];
console.log(combination);*/
//const combinedArray = exampleNumberA.concat(exampleNumberB);
//console.log(combinedArray);

//const firstSlice = combinedArray.slice(0, 4);
//console.log(firstSlice);


     //JOINING AN ARRAYS,I HAVE LEARNT SPLIT TO LEAVE SPACES AND ALSO TO LOWERCASE TO TURN A TEXT TO LOWER CASES.
     // This is how you can put every numbers or characters into a comma or quotation marks.
//const Numbers = [1, 2, 3, 4, 5] 
//const courseName = 'javascript for Beginners';
//const parts = courseName.split(' ');
//console.log(parts);

/*const tryexample = 'javascript course for beginners';
//const output =tryexample.split(' ');
//const loweroutput = tryexample.toLocaleUpperCase();
const combination = tryexample
.toUpperCase()
.split('');
const urlSlug = combination.join('-');
console.log(urlSlug);*/


     //  //SORTING AN ARRAY : Using sort and reverse.
//const alphabet = ['c', 'b', 'e', 'a', 'f'];
//const bet = alphabet.sort(); 
//const bet = alphabet.reverse();
//console.log(bet);

/*let employeees = [
  { id:1 , name :'rex'},
  { id:2 , name :'alex'},
  { id:3, name :'philo'},
  { id:4, name :'suzzy'},
];
employeees.sort;((a,b) =>{
  const lowercaseA = a.name.toLowerCase();
  const lowercaseB = b.name.toLowerCase();

  if (lowercaseA < lowercaseB) return -1;
  if (lowercaseB > lpwercaseA) return 1;
  return 0;
});
console.log(employeees);*/ 

//THE EVERY METHOD WAS SUPPOSE TO SOME AND EVERY METHOD HERE BUT I DIDN'T UNDERSTAND THE PROCEDEURE SO I GUESS IT IS WHAT IT IS.


      // THE FILTER METHOD
//const number = [1,2,3,4,5,6,7,8];
//const num = number.filter(number => number%2===0);
//console.log(num);

/*const employee = [
  {id:1, name:'Rose', role:'Developer'},
  {id:2, name:'Sam', role:'Designer'},
  {id:3, name:'Bob', role:'Manager'},
  {id:4, name:'Philip', role:'Developer'},
  {id:5, name:'Max', role:'Accountant'},
];
const answer = employee.filter(employee => employee.role==='Developer');
console.log(answer);
*/


        //MAPPING METHOD
 //et numbers = [2,4,8,10];
 //et squareNumbers = numbers.map(num => num*num);
 //onsole.log(squareNumbers

//let alpabet = ['a', 'b', 'c', 'd'];
//upperalpabet = alpabet.map(char => char.toUpperCase());
//console.log(upperalpabet)()

    //REDUCE METHOD                                              //NOT COMPLETE
//const numbers = [1, 10, 5, 14];
//const sum = numbers.reduce((accumlator,currentvalue) => {
  //return accumulator + currentvalue;
//} ,0);

//const sum = numbers.reduce((accumulator,currentvValue) => accumulator + currentValue);
//console.log(`The total sum is ${sum}`);
