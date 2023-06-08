console.log("hello world");
console.log("Santiago");

// Declaracion de variables

var nombre: string="Santiago";
console.log("Hello, "+ nombre);
console.log("¿Qué tal , ",nombre,"?");
console.log('¿Cómo han ido las vacaciones, ${nombre} ?');

let email="santiago01est@gmail.com"; // variable de tipo local
console.log('El email de ${nombre} es ${email}');

const PI: number= 3.1416;

var apellido : any = "San José"; // Tipo any hace que la variable pueda cambiar de tipo
apellido=3;

var error : boolean;
error= false;

console.log('¿Hay error?: ${error}');

//Instancia múltiple de varaibles

let a:string, b:boolean, c: number; // instancia 3 variables sin valor inicial
a= "TypeScript"
b= true;
c= 8.9;

// BuiltIn Types : number, String, boolean , void , null, undefined

// Tipos más complejos

// Lista de cadenas de texto
let valores: (string | number | boolean)[]= [false,"hola", true, 56];

// Enumerados
enum Estados{
    "Completado"= "C",
    "Incompleto"= "I",
    "Pendiente"="P"
}

enum PuestoCarrera{
    "Primero"=1,
    "Segundo",
    "Tercero"
}

let estadoTarea: Estados= Estados.Completado;
let puestoMaraton: PuestoCarrera= PuestoCarrera.Segundo;

// Interfaces

interface Tarea{
    nombre: string,
    estado: Estados,
    urgencia: number
}

// falta 36min