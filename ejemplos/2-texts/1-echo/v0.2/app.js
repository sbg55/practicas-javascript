const { Console } = require("./console");

const console = new Console();


const msg = console.readString("Hay eco!!! Escribe algo:"); // Es una constante , en lugar de una variable (let) porque en la ejecucion de ESTE programa, su valor no va a cambiar.  este dato que nos van a dar lo vamos a memorizar y NO lo vamos a cambiar en el resto de la ejecucion del programa ( Si lo ejecutamos difentes veces, el valor claro puede ser diferente, porque nos daran textos diferentes)

console.writeln(`${msg}!!!`);
