"use strict";
console.log("hello world");
console.log("Santiago");
// Declaracion de variables
var nombre = "Santiago";
console.log("Hello, " + nombre);
console.log("¿Qué tal , ", nombre, "?");
console.log(`¿Cómo han ido las vacaciones, ${nombre} ?`);
let email = "santiago01est@gmail.com"; // variable de tipo local
console.log(`El email de ${nombre} es ${email}`);
const PI = 3.1416;
var apellido = "San José"; // Tipo any hace que la variable pueda cambiar de tipo
apellido = 3;
var error;
error = false;
console.log('¿Hay error?: ${error}');
//Instancia múltiple de varaibles
let a, b, c; // instancia 3 variables sin valor inicial
a = "TypeScript";
b = true;
c = 8.9;
// BuiltIn Types : number, String, boolean , void , null, undefined
// Tipos más complejos
// Lista de cadenas de texto
let valores = [false, "hola", true, 56];
// Enumerados
var Estados;
(function (Estados) {
    Estados["Completado"] = "C";
    Estados["Incompleto"] = "I";
    Estados["Pendiente"] = "P";
})(Estados || (Estados = {}));
var PuestoCarrera;
(function (PuestoCarrera) {
    PuestoCarrera[PuestoCarrera["Primero"] = 1] = "Primero";
    PuestoCarrera[PuestoCarrera["Segundo"] = 2] = "Segundo";
    PuestoCarrera[PuestoCarrera["Tercero"] = 3] = "Tercero";
})(PuestoCarrera || (PuestoCarrera = {}));
let estadoTarea = Estados.Completado;
let puestoMaraton = PuestoCarrera.Segundo;
// falta 36min
