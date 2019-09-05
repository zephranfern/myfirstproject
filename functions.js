const pressGrindbeans = () => {
    console.log ("Grinding for 20 seconds");
}
pressGrindbeans()

let coffeeIsGrinding = true;



const pressGrindBeans = () => {
    if (coffeeIsGrinding == true) {
        console.log("Stopping the grind");
        coffeeIsGrinding = false;
    }
    else {
        console.log("grinding is about to begin");
        coffeeIsGrinding = true;
    }
}
pressGrindBeans();
pressGrindBeans();



const cashWithdrawal = (amount,acount) => {
    console.log("logging in")
    console.log(`withdraw £${amount} from ${acount}`)
    console.log("withdrawing money")
}
cashWithdrawal(50, 100)



const getCoffeeOrder = (size, drinktype) => {
    console.log(`you have ordered a ${size} ${drinktype}`)
}
getCoffeeOrder("large", "coke cola")



let acountNumber = 1234
const cashWithdrawal = (amount,acount) => {
    console.log("logging in")
    console.log(`withdraw £${amount} from ${acount}`)
    console.log("withdrawing money")
}
cashWithdrawal(50, acountNumber)



const addUp = (num1, num2) => {
    return num1 +num2;
}
console.log(addUp (7,3));
console.log(addUp(2,5));



const multiplyByNineFifths = (celsius) => {
    return celsius * (9/5)
}

const minusThirtyTwo = (fahrenheit) => {
    return fahrenheit - 32
}
const getFahrenheit = (celsius) => {
    return multiplyByNineFifths(celsius) + 32;
}
const getCelsius = (fahrenheit) => {
    return minusThirtyTwo(fahrenheit) * (5/9) ;
}
console.log("RThe temperature is " + getFahrenheit(15) + "°F");
console.log("The temperature is " + getCelsius(getFahrenheit(15)) + "°C")



let orderCount = 0;

const takeOrder = (size, topping, crust) => {
    console.log(`A ${size} ${topping} pizza with ${crust} crust`);
    orderCount++
    console.log(orderCount)
}
takeOrder("small", "pepperoni", "italian")
takeOrder("large", "meat feast", "cheese stuffed")
takeOrder("medium", "cheese", "classic")



let acountNumber = 12345678
let acountPin = 1234
let balance = 1000

const cashWithdrawal = (pin, amount) => {
    if (pin == acountPin){
        if (balance >= amount){
        console.log(`withdraw £${amount} from ${acountNumber}`)
        displayBalance(amount)
        console.log(`Your new balance is £${balance}`)
        }
        else{
        console.log("not enough funds in acount")
        console.log(`Your balance is £${balance}`)
        }
    }
    else{
        console.log("invalid pin entered")
    }

}

const displayBalance = (amount) => {
    return balance = balance - amount 
} 

cashWithdrawal(1254, 100)
cashWithdrawal(1234, 100)
cashWithdrawal(1234, 900)
cashWithdrawal(1234, 100)



let orderCount = 0;

const takeOrder = (filling1, filling2, filling3, filling4, filling5) => {
    console.log(`A ${filling1}, ${filling2}, ${filling3}, ${filling4}, ${filling5} Sandwich`);
    orderCount++
    console.log(orderCount)
}
takeOrder("ham", "cheese","lettuce", "mayo", "english mustard")
takeOrder("bacon", "lettuce", "tomato", "mayo", "brown sauce")
takeOrder("bacon", "ham", "pepperoni", "salami", "jalapeno")