/*

for(i = 10; i < 10; i++){
    console.log(i);
}

for(i = 9; i >= 0; i--){
    console.log(i);
}



let favouriteDrinks = ["Coke", "Fanta", "Tango"]

console.log(favouriteDrinks[0])
console.log(favouriteDrinks[1])
console.log(favouriteDrinks[2])


let favouriteDrinks = ["Coke", "Fanta", "Tango"]
for(n = 0; n < favouriteDrinks.length ; n++){
console.log(favouriteDrinks[n])
}


let favouriteFilms = ["Avengers", "Lord of the rings", "Ghostbusters", "Star Wars"]

favouriteFilms.push("Alien", "how to train your dragon")

for(n = 0; n < favouriteFilms.length ; n++){
    console.log(favouriteFilms[n])
    }

const checkForFilm = (requestedFilm) => {
    if (favouriteFilms[2] == requestedFilm){
        console.log(`Yay it’s ${requestedFilm}`)
    }
    else{
        console.log(`Booo, we want ${requestedFilm}`)
    }
}
checkForFilm("Ghostbusters")

*/

let number = 50;
let currentNumber = 0;

while(currentNumber != number){
 console.log(currentNumber);
 currentNumber = Math.floor(Math.random() * 51);
}
console.log(currentNumber);