// REST PARAMS - 'rest of parameters'

console.log("********");
console.log("REST PARAMETERS");
console.log("********");

let sendCars = (name, ...allCarIds) => {
    console.log(name);
    allCarIds.forEach(id => console.log(id));// returns array of params 
};

sendCars('Keenan', 100,200,500); // can use any amount of arguments for allCarIds

// DESTRUCTURING ARRAYS

console.log("********");
console.log("DESTRUCTURING ARRAYS");
console.log("********");

// let [car1, car2, car3] = carIds;
let carIds = [1,2,5];

let car1, remainingCars;
[car1, ...remainingCars] = carIds; // rest array

console.log(car1, remainingCars); // two final vals returned in array 

// DESTRUCTURING ARRAYS

console.log("********");
console.log("DESTRUCTURING OBJECTS");
console.log("********");

let car = { id: 5000, style: 'convertible' };

let id, style;
({ id, style } = car); // destructuring after declaration needs () as compiler assumes you're starting code block

console.log(id, style);

// SPREAD PARAMS

console.log("********");
console.log("SPREAD PARAMETERS");
console.log("********");

let startCars = (car1, car2, car3) => {
    console.log(car1, car2, car3);
};

let carCodes = [1, 2, 3];
// ... syntax when given as argument to function will "spread" array out to seperate variables
startCars(...carCodes); 