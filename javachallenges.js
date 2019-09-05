/*
console.log("greetings".search("e"));
//gives you the total number of a certain character within the string
console.log("greetings".lastIndexOf("ing"));
//gives you the number of characters until you hit the last specified character in the string
console.log("why are you running?".slice(4));
//removes the specified number of characters from the original sting
console.log("maximum overdrive".substring(3,10));
//gives you the characters within the specified range
console.log("how is one person today".substr(4,13))
//gives you the string starting from on specified character and continueing for a set number of characters
console.log("greetings".replace("t","n"))
//changes a specified character to a new specified character
let age = "20 years"
let name = "Zephran"
console.log(name.concat(age))
//combines 2 possible strings into one
console.log("Great mess of turnips".charAt(8));
//gives you the spesified character only



let space1 = "X"
let space2 = "O"
let space3 = " "
let space4 = "X"
let space5 = "X"
let space6 = " "
let space7 = "O"
let space8 = " "
let space9 = " "

console.log(`   |   |   `);
console.log(` ${space1} | ${space2} | ${space3} `);
console.log(`   |   |   `);
console.log(`-----------`);
console.log(`   |   |   `);
console.log(` ${space4} | ${space5} | ${space6} `);
console.log(`   |   |   `);
console.log(`-----------`);
console.log(`   |   |   `);
console.log(` ${space7} | ${space8} | ${space9} `);
console.log(`   |   |   `);



let password = "bananaman"

if (password.length < 8){
    console.log("Your Password is to short.")
}
else {
    console.log(password)
}



let num = 3
if (Number.isInteger(num / 3) || Number.isInteger(num / 5)){
    console.log("This number is divisible by 3 or 5.")
}
else{
    console.log("This number is not divisible by 3 or 5.")
}



let num = 5
if (Number.isInteger(num / 3) && Number.isInteger(num / 5)){
    console.log("FizzBuzz")
}
else {
    if (Number.isInteger(num / 3)){
        console.log("Fizz")
    }
    else if (Number.isInteger(num / 5)){
        console.log("Buzz")
    }
    else{
        console.log(num)
    }
}



let placeOfWork = "codenation"
let time = "08:00"
let townOfHome = "Manchester"
console.log(`At ${time} I'm at ${placeOfWork}`)

*/

console.log("jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi")

/*

let word = "aaaaaa"
if (){
    console.log("the first letter is the same as the last.")
}
else {
    console.log("the first letter is not the same as the last")
}



let num1 = 21
let num2 = 5

if (Number.isInteger((num1 + num2) / 2)){
    console.log(`${num1} + ${num2} = ${num1 + num2}`)
    console.log(`${num1 + num2} is even`)
}
else {
    console.log(`${num1} + ${num2} = ${num1 + num2}`)
    console.log(`${num1 + num2} is odd`)
}



let num = 10101
if (num == num){
    console.log(`${num} is a palindrome`)
}
else{
    console.log(`${num}is not a palindrome`)
}



let space1 = "O"
let space2 = "X"
let space3 = "O"
let space4 = "X"
let space5 = "X"
let space6 = " "
let space7 = "O"
let space8 = " "
let space9 = " "

console.log(`   |   |   `);
console.log(` ${space1} | ${space2} | ${space3} `);
console.log(`   |   |   `);
console.log(`-----------`);
console.log(`   |   |   `);
console.log(` ${space4} | ${space5} | ${space6} `);
console.log(`   |   |   `);
console.log(`-----------`);
console.log(`   |   |   `);
console.log(` ${space7} | ${space8} | ${space9} `);
console.log(`   |   |   `);

if (space1 == "X" && space2 == "X" && space3 == "X"){
    console.log("player X wins!")
}
else if (space1 == "O" && space2 == "O" && space3 == "O"){
    console.log("player O wins!")
}
else {
    console.log("no winner yet!")
}
*/



let age = 7
let ageRating = 12
if (ageRating >= 18){
    if (age < 18){
    console.log("We cannot allow childeren to watch this film")
    }
    else if (age > 18 && age < 60){
    console.log("An Adult ticket costs £10.95")
    }
    else{
    console.log("An senior ticket costs £7.50")
    }
}
else if (ageRating >= 12 && ageRating < 18) {
    if (age < 18){
    console.log("A child ticket costs £8. Childeren must be acomponied by an Adult.")
    }
    else if (age > 18 && age < 60){
    console.log("An Adult ticket costs £10.95")
    }
    else{
    console.log("An senior ticket costs £7.50")
    }
}
else{
    if (age < 18){
    console.log("A child ticket costs £8")
    }
    else if (age > 18 && age < 60){
    console.log("An Adult ticket costs £10.95")
    }
    else{
    console.log("An senior ticket costs £7.50")
    }
}
