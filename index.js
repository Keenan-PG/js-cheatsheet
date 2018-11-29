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

let startCars = (car1, car2, car3, ...rest) => {
    console.log(car1, car2, car3, rest);
};

let carCodes = [1, 2, 3, 4, 5, 6, 7];
// ... syntax when given as argument to function will "spread" array out to seperate variables
startCars(...carCodes); 


// TYPES


console.log("********");
console.log("TYPEOF");
console.log("********");

console.log(typeof(1));             // number
console.log(typeof(true));          // boolean
console.log(typeof('Hello'));       // string
console.log(typeof(function(){}));  // function
console.log(typeof({}));            // object
console.log(typeof(null));          // object
console.log(typeof(undefined));     // undefined    
console.log(typeof(NaN));           // number.... 
// Not a Number... (means you were expecting one)


// LOOP CONTROL 


console.log("********");
console.log("LOOP CONTROL");
console.log("********");

for (let i=0; i<5; i++) {
    console.log(i);
    if (i === 3) {
        break; // break exits loop
    }
}

for (let i=0; i<5; i++) {
    if (i === 3) {
        continue; // acts as if code has been executed, and continues
    }
    console.log(i);
}