import { add } from "./utility"

const firstNumber: number = 2
const secondNumber: number = 3

let userName: string
userName = "mrspotts"

// display user welcome message                       
function showUser(user: string) {
    return `Welcome, ${user}!`
} 

console.log(add(firstNumber, secondNumber))
console.log(showUser(userName)) 
