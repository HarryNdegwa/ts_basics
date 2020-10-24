let firstName: string = "Harry";
let age: number = 21;
let isUser: boolean = true;
let user;
let lastName = "Mike";

let numString: string = "20";
let num: number = <number>(<any>numString);

console.log(firstName, age, isUser, lastName, numString, num);
console.log(typeof num);
