const age = 30;
const firstName = 'Sarah';
const totalAmount = 100;

if (age >= 18 && age <= 25) {
    console.log("Je krijgt 50% korting!");
} else {
    console.log("Helaas geen korting");
}

if (firstName === 'Sarah' || firstName === 'Abraham') {
    console.log("U krijgt een gratis biertje");
} else {
    console.log("Gewoon betalen");
}

if (totalAmount > 25 && totalAmount <= 50) {
    console.log("gratis (vega)bitterballen");
} else if (totalAmount > 50 && totalAmount < 100) {
    console.log("gratis portie nachos");
} else if (totalAmount => 100) {
    console.log("gratis flesje champagne");
}


