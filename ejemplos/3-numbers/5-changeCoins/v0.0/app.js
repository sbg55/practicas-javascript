const { Console } = require("./console");
const console = new Console();

let amount = console.readNumber("Dame la cantidad de céntimos: ");
// si nos dan 123 :
let remainder50 = amount % 50; // 123 % 50 = 23           Declaracion con inicializacion
let amount50 = amount - remainder50;  // 123-23 = 100   Declaracion con inicializacion  
let coins50 = amount50 / 50; // 100/50 = 2     Declaracion con inicializacion   

amount = amount - amount50; // 123-100 =23     Asignacion NUEVA  - cambio el 123 a 23 
let remainder20 = amount % 20; // 23 % 20 = 3
let amount20 = amount - remainder20; // 23-3 = 20
let coins20 = amount20 / 20;  // 20/20 = 1

amount = amount - amount20; // 23-20=3
let remainder10 = amount % 10; // 3 % 10 = 3
let amount10 = amount - remainder10; // 3-3= 0
let coins10 = amount10 / 10;   // 0/10 = 0

amount = amount - amount10; // 3-0= 3
let remainder5 = amount % 5; // 3 % 5 = 3
let amount5 = amount - remainder5; // 3-3 =0
let coins5 = amount5 / 5;  // 0/5 = 0

amount = amount - amount5; //  3-0 = 3
let remainder2 = amount % 2; // 3 % 2= 1
let amount2 = amount - remainder2; // 3-1 = 2
let coins2 = amount2 / 2; //  2/2=1

amount = amount - amount2; // 3-2 = 1


console.writeln(`${coins50} moneda(s) de 50
${coins20} moneda(s) de 20 
${coins10} moneda(s) de 10 
${coins5} moneda(s) de 5
${coins2} moneda(s) de 2
${amount} moneda(s) de 1`);
