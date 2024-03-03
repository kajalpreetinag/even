// Take a number N from the user as input, and print even numbers up to N.?

const input = require("readline-sync")
let n= input.questionInt("enter the number: ")
let i=1;
while(n>i){
    if(i%2==0){
    console.log(i)}
    i++
}
