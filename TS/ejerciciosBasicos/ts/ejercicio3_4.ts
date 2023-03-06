
//EJERCICIO 3
/*function suma( a, b ){
    return (a + b)
 }*/

 let suma=(a:number,b:number):number=>(a+b);

 //EJERCICIO 4
/*
 var spiderman = {
    nombre: "Peter parket",
    poderes: ["trepar", "fuerza", "agilidad", "telas de araña"]
    };
*/

interface heroes{
    nombre:string;
    poderes:string[];
}

let spiderman:heroes={nombre:"",poderes:[]};

spiderman.nombre="Peter parket";
spiderman.poderes=["trepar", "fuerza", "agilidad", "telas de araña"];






 