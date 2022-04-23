const { Console } = require("./console");

const console = new Console();


const msg = console.readString("Hay triple eco!!! Escribe algo:");
// es una contante porque una vez nos han dado el dato, NO lo vamos a cambiar en toda la ejecucion)
console.writeln(
`${msg}, ${msg}, ${msg}!!!
${msg}, ${msg}!!!
${msg}!!!
`);
