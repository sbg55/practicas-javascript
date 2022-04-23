const { Console } = require("./console");

const console = new Console();
const side = console.readNumber("Dame el lado del cuadrado: ");
const SIDES = 4; // constante en mayusculas, inicilaizada con un numero "mágico"
const perimeter = side * SIDES; // constante en minusculas,  sin nuevo valor (numero magico). Por eso perimeter no se pone en mayusculas
const area = side ** 2; // 2 , 10 y 100  hemos dicho que la constante que inicializan  no se declara en mayusculas ( porque son operaciones "obvias") a pesar de que aqui es una inicializacion con un numero.  PERO si el 2 fuera la inicializacion de por ej la constante "MAXIMO NUMERO DE PROVEEDORES", si se pondrian esta constante en mayusculas
console.writeln(`Perímetro: ${perimeter}
Area: ${area}`);


//  es un poco mas profuso, mas repetitivo , repite por ejemplo perimeter 
// y la v 0.1  , no . 