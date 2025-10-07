/*let priceofonion = 20;
let priceofbread = 30;
const total = priceofonion>=priceofbread;
if(total){
    console.log('You are right with your money')
}
else{
    console.log('I guess you are wrong just top up your money.')
}*/
         //SETTING THE TYPE OF FOOD TO HAVE AT A A PARTICULAR TIME.
/*let hour = 12;
if (hour>=6 && hour<12)
console.log('breakfast')
else if(hour>=12 && hour<15)
    console.log('Its time to serve launch')
else 
    console.log('Its time for dinner')*/


              //USING SWITCH AND CASE.
/*let job = 'cloud engineer';
switch(job){
    case 'Software developer':
    console.log('Writes code');// i can use the switch for long if statements.
    break;
    case 'designer':
        console.log('Makes user interface documents');
        break;
        case 'cloud engineer':
            console.log('Manages and deploy clouds serves');
            break;
            default:
                console.log('works directly with costomers');
}*/


           //FOR LOOPS
   let numbers = [1, 2, 3, 4, 5, 6, 7];
    //for (let idx = 0; idx < numbers.length; idx++)
    //{
      //  console.log(numbers[idx]);
   // }
//  for(num = 0; num <100; num++)
//{
  //  console.log(num);
//}


                             //WHILE
// let idx = 0;
// while (idx < numbers.length) {
// console.log(numbers[idx]);
//
//
 //   idx++;
//}

//let sum = 0;
//while (true) {
  //  console.log("loop");
    //sum++;

    //if (sum === 10)
 //break;
//}
                    //DO WHILE
/*let i = 0;
do{
    console.log(i);
    i++;
} while (i < 10);*/


                   // FOR IN LOOP
const course = {
    name: 'Javascript for Beginners',
    duration: 3,
    section: 7
};
//console.log(course.name);
//console.log(course['duration']);
//console.log(course.section);
// I am going to try something short to display all of this at once and i will use the for in loop.
for( const key in course){
    console.log(course[key]);
}