/*
*/
if (1 == "1"){
    console.log(true);
}
else{
    console.log(false);
}

// and statements
let age = 17;
let country = "UK";

if (age > 17 && country == "UK"){
    console.log("Welcome, how may I serve you?");
}
else if (age > 17 && country != "UK"){
    console.log("my apologies, we are a pub based in the UK and we don't ship drinks overseas");
}
else{
    console.log("Go home kid.");
}

// or statements
let day = "Saturday";

if (day == "Saturday" || day == "Sunday"){
    console.log("It's weekend!");
}
else {
    console.log("When's weekend?");
}