//Named Function

function add(){

    console.log("Adding two numbers");
    
}

add();

//Call a function to execute the code inside the function block 
function addWithParameters(a,b){

    c=a+b;
    console.log("Addition of two numbers after parameterisation is " + c);
    
}

addWithParameters(10,20);

//Call a function to execute the code inside the function block and return the value 

function addTwoNumbersWithReturn(a,b){

    c=a+b;
    return c;
}

console.log("Addition of two numbers with return value is " + addTwoNumbersWithReturn(10,40));


