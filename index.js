var string = "Data String";
var integer = 40;
var boolean = true; //false
var array = [1, "text", 3, 4, 5, 6];

// const mobil = 'ayla'
// const mobil = 'kijang'

// let motor = 'beat'
// let motor = 'vario'

console.log("INI STRING", string);
console.log("INI INTEGER", integer);
console.log("INI BOOLEAN", boolean);
console.log("INI ARRAY", array);

// ARRAY
const cars = ["ayla", "agya", "calya", "sigra", "inova"];
console.log("data mobil:", cars);

const motorBike = ["vario", "beat", "nmax", "adv"];

console.log("Data Mobil:", cars);

//CONCAT
const groupvehicle = cars.concat(motorBike);
console.log(groupvehicle);

console.log("join data cars", cars.join("-"));

console.log("POP data cars", cars.pop());
console.log(cars);

document.getElementById("motorBikeId").innerHTML = motorBike.toString();
document.getElementById("motorBikeId").innerHTML = motorBike.pop();
