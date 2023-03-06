"use strict";
console.log("HOLA");
let x = 3;
//x="hola";
let y = 7;
let cadena = "HOLA QUE TAL";
cadena = x + "";
let b;
let j = "hola";
b = true;
b = false;
document.write(x.toString());
let z = "jjaaja";
z = 4;
//// ARRAYS
let arrayIndefinido;
arrayIndefinido[0] = 2;
arrayIndefinido[1] = "hola";
arrayIndefinido[3] = true;
let arrayNumeros = [3, 4, 56, 43, 1];
arrayNumeros[2] = parseInt("hola");
//// FUNCIONES
function sumar(x, y) {
    let resultado;
    if (typeof (x) === "string" && typeof (y) === "string")
        return x.concat(y);
    else if (typeof (x) === "string")
        return x;
    else if (typeof (y) === "string")
        return y;
    else
        resultado = x + y;
    return resultado;
}
document.write(sumar(2, 4).toString());
document.write(sumar("JAJAJA", "JEJEJE") + "");
function conseguirNombre(nombre, apellidos) {
    if (apellidos == undefined)
        return nombre;
    return nombre + " " + apellidos;
}
document.write(conseguirNombre("Pablo"));
let cuerpo = document.body;
let elemento = document.getElementById("boton");
let elemento2 = document.getElementById("jejeje");
let titulo = "El Quijote";
let descripcion = "Un libro de Cervantes...";
function imprimeLibro2(x, y) {
    document.write(x + " " + y);
}
imprimeLibro2(titulo, descripcion);
function imprimeLibro(libro) {
    document.write(libro.titulo + " " + libro.descripcion);
}
let libro1 = { titulo: "El Quijote", descripcion: "Un libro de Cervantes..." };
imprimeLibro(libro1);
class Cliente {
    constructor(name, email, edad) {
        this.name = name;
        this.email = email;
        this.edad = edad;
    }
    setName(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    registrar() {
        document.write(this.name + " Registrado correctamente");
    }
    imprimirPadre() {
        console.log(this.name + " " + this.email + " " + this.edad);
    }
}
let usu1 = new Cliente("Pablo", "a@a.es", 20);
usu1.registrar();
let x2 = usu1.getName();
usu1.setName("DIEGO");
console.log(usu1.getName());
usu1.email = "pablo@iessanvicente.com";
class ClienteVip extends Cliente {
    constructor(name, email, edad, numVip) {
        super(name, email, edad);
        this.numVip = numVip;
    }
    registrar() {
        super.registrar();
    }
    imprimirHijo() {
        console.log(this.getName() + " " + this.email + " " + this.edad + " " + this.numVip);
    }
}
let cliente2 = new ClienteVip("Pilar", "zzz@zzz.es", 30, 1);
cliente2.registrar();
cliente2.imprimirHijo();
cliente2.imprimirPadre();
