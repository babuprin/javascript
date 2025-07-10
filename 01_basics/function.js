function add(num1,num2){
    //console.log(num1+num2);
}

add(2,3);

function calculate(...num1){
    return num1;
}
console.log(calculate(200.300,400,500,600));


//how to pass object pass in function

const user ={
    username:"Prince",
    price:199
};
function handleobject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
handleobject(user);