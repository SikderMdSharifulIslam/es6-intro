/*** default values:
 * string --> ''
 * number --> 0,1
 * boolean --> false
 * object --> null
 * array --> []
 * function --> function(){}
 */

function sum(num1, num2=0){
    return (num1+num2);
}

console.log(sum(10)); //output 10+0=10 ashbe
console.log(sum(10,20)); //output 10+20=30 ashbe

function product(num1=1, num2=1){
    return (num1*num2);
}
console.log(product(5)); //output 5*1=5 ashbe
console.log(product(5,2)); //output 5*2=10 ashbe

function fullName(first, second=''){
    console.log(first+' '+second);
}
fullName('sikder'); //output sikder
fullName('sikder','shariful'); //output sikder shariful