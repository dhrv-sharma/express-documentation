// import other java script files
// import { funciton name } from "./filename.js"
// ./ when file is note in the same folder but same directory
// import * as objectReference from "./filename.js" // importing everthing




// do while loop
"use strict";
var age=0;
do {
    console.log(age);
    age++;
    
} while (age<0);


// profile coding questions
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];

  function lookUpProfile(name,prop){
    for (let index = 0; index < contacts.length; index++) {
        if ((contacts[index]["firstName"])==name) {
            return contacts[index][prop] || "No Such property found";

            
        }
        
    }
    return "No contact Found";
  }

var outcome=lookUpProfile("Sherlock","likes");
console.log(outcome);


//  random function
function randomfunction(){
    var num=Math.floor(Math.random()*20);// give random number between 0 and 9 
    // return Math.random(); // give random number between 0 and 1
    return Math.floor(Math.random()*10);// return random number between 0 and 9 


}

function randomRange(myMin,myMax){
    // floor rounds up the number to the greatest number 
    return Math.floor(Math.random()*(myMax-myMin+1))+myMin;

};

// parsing function
function convertToInteger(str){
    return parseInt(str);// convert the string into integer 
};

// parsing function
function convertToInteger(str){
    return parseInt(str,2);// converting string(bool) into integer 2 is the base number
}


// ternary operator
// condition ? statemnet-if-true : statement-if-false
function checkEqual(a,b){
    return a==b ? true : false;

};


var tie=checkEqual("Dhruv","Dhruv");
console.log(tie);



function checkSign(num){
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
};

console.log(checkSign(-10));


// var let const 
// let remove the multiple declaration of same varaible
// let is limited to the block access of the code
// var has global scope and local declaration can change the global value
// const keyword let the varaible immutable

const s =[5,7,2];
//  you can edit reassign the array items 
s[0]=2;
s[1]=3;
s[3]=4;
s.push(34);


// when we use const with objrct then still it can be changeable
//  that why we use Object.freeze();
function freezeObj(){
  "use strict";
  const MATH_CONSTANTS={
    PI:3.14
  };

  Object.freeze(MATH_CONSTANTS);


  try {
    MATH_CONSTANTS.PI=99;// IF WE DONT USE FREEZE IT IS CHANGEBLE
    
  } catch (error) {
    console.log(error);
    
  }

  return MATH_CONSTANTS.PI;

}
// arrow anonymous function
// only have a return type no body
// arrow function always have a return type
var num = function(){
  return new Date();
}

var test = () => new Date();

// arrow function with pass arguments
// it is returning an concatenated array 
// arrow function without body and return statemnt
var myConcat= (arr1,arr2) => arr1.concat(arr2); 
const concatList=myConcat([12,23],[34,56]);
console.log(concatList);

//  arrow function with body 
const realNumberArray = [4,5.6,-9.8,3.14,42,6,8.34,-2];
const squareList = (arr) => {
  // filter function takes a function as an argument which we have given as arrow function with condition then map function which also have function argument
  const squaredIntegers = arr.filter((num) => Number.isInteger(num) && num > 0).map(x => x*x);
  return squaredIntegers;
}

console.log(squareList(realNumberArray));


//  default argument
const increment=() => (number,value=1)=> {
  return number +value;
};

// rest args
function sum(...args){
  return args.reduce((a,b)=> a+b,0);
}
//  if you want to copy the whole array 
const arr1=['JAN','FEB','MAR','APR','MAY'];
let arr2;
arr2=arr1;// create the same memory link to the address
arr2=[...arr1]; // copy the whole elemnts spread function


sum(1,32,43);
const person={
  firstName:"Dhruv",
  lastName:"Sharma"
};
// Template illetereals need to use to back tick
const  nname=`My Name is ${person.firstName}`;
console.log(nname);


const createPerson = (pname,page,pgen) =>{
  //  returning an object from the arrow back option
  return {
    name:pname,
    age:page,
    gender:pgen
  };
};
console.log(createPerson("Dhruv sharma",45,"male"));

class spaceShuttle {
  constructor (targetPlanet){
    this.targetPlanet=targetPlanet;

  }
}

var earth=new spaceShuttle("earth");
console.log(earth);

function makeClass(){
  class vegeTable{
    constructor(name){
      this.name=name; // this.name become  a varaible of class
    }

    get writer(){
      return this.name;
    }

    set writer(updateName){
      this.name=updateName;
    }


  }

  return vegeTable;
}

const  vegeTable = makeClass();
const carrot =new vegeTable('carrot');
carrot.writer="lemon";// set function
console.log(carrot.writer);// get function


// we can export the function from the js file so that another js can import it 
export{ makeClass };
export var testVar= "hello";// exporting the var 














