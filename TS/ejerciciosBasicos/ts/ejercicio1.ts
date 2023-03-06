console.log("funciona");

//EJERCICIO 1

    //VERSIÓN 1
    let nombre:string;
    nombre = "Pablo";
    let edad:number;
    edad = 30;
    const PERSONAJE:object = {
        nombre: nombre,
        edad: edad
    };

    //VERSIÓN 2
    interface PERSONAJE2{
        nombre:string;
        edad:number;
    }

    let p2:PERSONAJE2={nombre:"Pablo",edad:30};

//EJERCICIO 2

    class Rombo{
        /*
        public diagonalVertical:number;
        public diagonalHorizontal:number;

        constructor(diagonalVertical:number, diagonalHorizontal:number){
            this.diagonalVertical=diagonalVertical;
            this.diagonalHorizontal=diagonalHorizontal;
         }
         */

        constructor(public diagonalVertical:number,public diagonalHorizontal:number){}

        calcularArea():number{
            return this.diagonalHorizontal*this.diagonalVertical;
        }

    }

    let r1:Rombo=new Rombo(10,20);
    document.write("El área del Rombo es:"+r1.calcularArea());