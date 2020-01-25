'use strict';

let cars = ['Ford', 'Honda', 'Toyota', 'Nissan'];
console.log(cars.length);

let moreCars = ['Volvo', 'Chevy', 'Audi', 'Honda'];
let totalCars = cars.concat(moreCars);
console.log(totalCars.length);

let x = totalCars.indexOf('Honda');
let y = totalCars.lastIndexOf('Ford');
console.log(x, y);

let stringOfCars = totalCars.join();
console.log(stringOfCars);

totalCars = stringOfCars.split(",");
console.log(totalCars);

let carsInReverse = totalCars.reverse();
console.log(carsInReverse);

carsInReverse.sort();
console.log(carsInReverse);
console.log((carsInReverse.indexOf('Audi')));

let removedCars = carsInReverse.slice(2, 4);
console.log(removedCars);

carsInReverse.splice(1, 2, 'Ford', 'Honda');
console.log(carsInReverse);

carsInReverse.push('Chevy', 'Ford');
console.log(carsInReverse);

console.log(carsInReverse.pop());

console.log(carsInReverse.shift());

console.log(carsInReverse.unshift('BMW'));
console.log(carsInReverse);

let numbers = [23, 45, 0, 2];
for (let i = 0; i < numbers.length; i++){
    numbers[i] += 2;
}
console.log(numbers);

numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34];
numbers.forEach(function(currentValue, index){
    numbers[index] = currentValue + 2;
})
console.log(numbers);
