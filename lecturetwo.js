function nextLine(arr,item){

    arr.push(item);
    return arr.shift();
}


var testArr=[1,2,3,4,5];
// json.stringfy converts the array in to the string
console.log("Before: "+JSON.stringify(testArr));
nextLine(testArr,6);
console.log("After: "+JSON.stringify(testArr));


//  boolean either true or false 
//  if else statements takes the binary operations 
if (testArr.length <=5) {
    console.log("test array length is less than or equal to 5");
    
}

var myName="4";
// == only chekc the value of the variables but in case if the data type is different for varaible then == still show equal on the other hand === checks the data type as well as the value 
function equalFunct(myName){
    if (myName===4) {
        console.log("equal");
        
    }
}


equalFunct(myName);

// comapare equality
// != inequality operator
// !== strict inequality checks the data type as well
function compareEquality(a,b){
    if (a===b) {
        // it dont do the type conversion of the data variables 
        console.log("equal type");
        
    }

    if (a==b) {
        // it does the type conversion and then evaluate
        console.log("equal value");

        
    }else if (true) {
        // else if statement 
        
    }else{
        // else statement 

    }

    
}

// ineqaulity functions
function inEquality(a,b){
    if (a!==b) {
        // it  dont do the type conversion
        console.log("not equal type");
        
    }

    if (a!=b) {
        // it does the type conversion and then evaluate 
        console.log("not equal value");

        
    }
}

// > ,<, && AND , || OR , <=,>= boolean operators 
compareEquality(10,10);
inEquality(10,"10");

// golf code 
var names=["Hole-in-Hole!","Eagle","Birdie","Par","Bogey","Double Bogey","Go Home!"];
function golfScore(par,strokes){
    if (strokes==1) {
        return names[0];
        
    }else if(strokes <= par-2){
        return names[1];
    }else if(strokes == par-1){
        return names[2];
    }else if(strokes == par){
        return names[3];
    }else if(strokes == par+1){
        return names[4];
    }else if(strokes == par+2){
        return names[5];
    }else if(strokes >= par+3){
        return names[6];
    }else{
        return "error move";
    }
}
console.log(golfScore(5,3));

// switch statements
var myReg="21BCE0801";
switch (myReg) {
    case "21BCE0703":
        console.log("WELCOME DHRUV SHARMA")
        break;
    
    case "21BCE0699":
        console.log("WELCOME ADITYA IYER")
        break;    


    default:
        console.log("User not found")
        break;
}






