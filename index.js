// utility
function printValue(value){
    console.info(value)
}

// 1.0 FUNCTION DECLARATION
//TODO: create a basic function that adds two random values
function add(){
    const num1 = 19;
    const num2 = 20;
    printValue(num1 + num2);
}
add();

//TODO: create a function that takes in two values and adds them
function AddNums(n1,n2){
    printValue(n1 + n2);
}
AddNums(20,22);
AddNums(43,76);

//TODO: create a function that takes in two values, adds them and returns the value of the addition
function AddNumbers(n3,n4){
    const sum = n3 + n4;
    return sum
}
const summation = AddNumbers(56,76);
printValue(summation);

// 1.0 FUNCTION EXPRESSION
//TODO: create a basic function that adds two random values
const AddExpression = function(){
    printValue(310 + 230);
}
AddExpression();
//TODO: create a function that takes in two values and adds them


//TODO: create a function that takes in two values, adds them and returns the value of the addition


// 1.0 ARROW FUNCTION
//TODO: create a basic function that adds two random values
const AddAnonymous = () => {
    printValue(60 + 90);    
} 
AddAnonymous();

const sayHello = () => printValue("hello");
sayHello();

//TODO: create a function that takes in two values and adds them


//TODO: create a function that takes in two values, adds them and returns the value of the addition


