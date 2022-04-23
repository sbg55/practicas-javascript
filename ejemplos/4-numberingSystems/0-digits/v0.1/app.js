const { Console } = require("./console");
const console = new Console();

let number = console.readNumber(`Dame un número entero: `);

// ej 65
const ones = number % 10; // 65 % 10 = 5
number -= ones; // 65 -5 = 60
number /= 10; // 60 / 10 = 6
const tens = number % 10; // 6 % 10 = 6
number -= tens; 
number /= 10; 
const hundreds = number % 10;
console.writeln(
`Unidades: ${ones}
Decenas: ${tens}
Centenas: ${hundreds}\n`);
