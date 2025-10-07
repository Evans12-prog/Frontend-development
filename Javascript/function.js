//function sayHi() {
  //  console.log('Hi');
//}

//sayHi();

//function add(num1, num2) {
 //   console.log(num1 + num2);
//}

//add(9,8);

//function multiply(num1, num2) {
  //  console.log(arguments);
    //return(num1 * num2);
//}
//console.log(multiply(2,4 ,9));

/*let course = {
  name:'JavaScript for Beginners',
  duration: '3 hours'
};

let newcourse ={
  ...course,
  name: 'Javascript Pro'
};
console.log(newcourse);
*/

//function multiply(multiplier, ...numbers)
//{
 // return numbers.map(number => number* multiplier);
//}

//console.log(multiply(2, 1, 2, 3,4) );

/*function writeCode(language) {
  console.log(`Write code in ${language}`);
}

writeCode('JavaScript');
writeCode('C#');
writeCode();
*/


                  //GETTERS AND SETTERS
/*const course = {
  name:'Javascript for Beginners',
  duration: '3 hours'
};

console.log(`${course.name} is ${course.duration}`);
*/


              //  VAR & LET
//function display() {
  //for ( let i = 0; i < 5; i++  ) {
  //console.log(i);
//}
//}

//display();

function startVideo() {
  console.log(this);
}

startVideo();