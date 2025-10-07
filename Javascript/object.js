                 //I AM DEALING WITH OBJECTS .
//const anotherDog = {
  //  name:'Marley',
    //breed:'Dachshund',
    //age:5,
    //weightInPounds:12,
    //eat: function()
    //{
      //  console.log("Woof!");
    //},
    //bark()
    //{
      //  console.log('Chomp');
    //}
//}

                            //FACTORY FUNCTION
/*function getDog(name,breed, age, weightInPounds){
    return{
    name,
    breed,
    age,
    weightInPounds,
    eat() {
        console.log('champ!');
    },
    bark()
    {
        console.log('Woof!');
    }
    }
}
const anotherDog = getDog('Marley','Dachshund',3, 60 );
console.log(anotherDog);*/


                    //OBJECTS ARE DYNAMIC
                    //THIS MEANS THAT IT CAN CHANGE.
/*const person = {
    name:'Alfred'
};
//console.log(person.name)

person.favoritefood = 'tacos';
//console.log(person);

person['favoriteIceCream'] = 'chocolate';
//console.log(person);

delete person.favoriteIceCream;
//console.log(person)

person.eat = function() {
    console.log('start eating');
}

person.eat();*/

                  //SOMETHING SMALL
function add(num1,num2) {
return num1 + num2
};

//const n = add;
//console.log(n(2,3));

//console.log(add.constructor);


//let numbers = [1, 2, 3, 4, 5];
//for (const elements of numbers)
//{
  //console.log(elements);
//}


//let arrays = [1,2,3,4,5,6,7,8,9,10];
//for (const elements of arrays){
  //console.log(elements);
//}


/*let dog = {
  name: 'max',
  age: 5,
  eyeColor:'Blue'
};
for (const key in dog){
  console.log(dog[key]);
}*/


          //CLONNING OF AN OBJECT
//let a = {value: 10};
//let b = a;

//b.value = 20;

//console.log(a);
//console.log(b);

//FOR MORE STRINGS I HAVE TO CONSULT DEVELOPER.MOZILLA.ORG FOR MORE FOR INSTANCE IF I WANT A TYPED STRING TO CHANGE TO LOWERCASE OR UPPERCASE OR TO MAKE CHANGES TO MY STRING.


let firstName = 'Evans';
let LastName = 'Menyah';
//let fullName =  firstName +  " "  + LastName;

let fullName = `${firstName} ${LastName}`;
console.log(fullName);
