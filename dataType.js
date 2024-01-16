// seven different data type 
/*
undefined , null , boolean , string ,symbol ,number and object 
*/ 

// declaring varaible 
// use semi colon at the end 
//  all are dynamic allocation
var myName = "Dhruv Sharma" ; // can be used in the whole program 
let myCollege= "freeCodeCamp" ;// can be access in the scope of the program
const  pi= 3.14 ;// as name suggest once defined it can tbe changed 

// global variable can be access anywhere
// preference is given to local variable

var myGlobal="Global variable";

function testFunc(){
    myloca="Local variable";
    var myGlobal="Local variable";
    console.log(myGlobal);
    return "dhruv sharma";
}


testFunc();



// function with return type 
// no need to mention return type in function head
function minusSeven(num){
    return num-7;
}








// camel case is prefered to do so 
console.log(myName+" "+myCollege); // statement to show data in console

// + - *  / %
// % is used to find remainder 
var sum=10%12;
sum++;// increamenting number 
sum--;// decreamenting number 
var ourDecimal=24.56;
console.log(sum);




var age=18;
age+=12;
age-=10;
age*=2;
console.log(age);


// String manipulation
// \ escape character for speacial character 
// \n for next line 
// concat can be done by using plus sign 
// string a re immutable
var course="Javascript \"\" \nis ready to launch";
course+="\n in your brwoser $age";

console.log("String length is "+course.length);
console.log(course[0]);
console.log(course.indexOf('t'));

console.log(course.charAt(2));
// console.log(course[course.charAt((course.length)--)]);


//  defining a function
// function is keyword
// function name(argument){body}

function  wordBlanks(myNoun,myAdjective,myVerb,myAdverb){
    //  variables that are deined outside the fucntion is called global scope 
    // inside function called local scope

    var result="";

    result+=myNoun+" ";
    result+=myAdjective+" ";
    result+=myVerb+" ";
    result+=myAdverb+" ";

    return result;

}


console.log(wordBlanks("dog","big","ran","quickly"));

//  array defination 
//  you can have dynamic allocation array
var ourArray=["John",45,"Sharma"];


var studentInfo=[["Dhruv Sharma",19,"Cse Core"],["Dhruv Dosanjh",21,"Cse iot"]];


// for loop
for (let index = 0; index < ourArray.length; index++) {
    console.log(ourArray[index]);
}

studentInfo.push(["Dev sharma",56,"Class 10th"]);// push the element in the array
studentInfo.pop(); // remove the last element of the array
studentInfo.shift(); // remove first element of array
studentInfo.unshift(["Dev sharma",56,"Class 10th"]);// adds the element in the starting of the array


// nested array 
for (let index = 0; index < studentInfo.length; index++) {
    for (let j = 0; j < studentInfo[index].length; j++) {
        if (studentInfo[index][j]=="Cse iot") {
            studentInfo[index][j]="Cse core";
            
        }
        console.log(studentInfo[index][j]);
        
    }
    
}



// shopping list 

var myBag=[["cereal",3],["milk",2],["bananas",3]];











