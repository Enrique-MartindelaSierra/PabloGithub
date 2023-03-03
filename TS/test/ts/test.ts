console.log("HOLA");

let x:number=3;
//x="hola";
let y:number=7;

let cadena:string="HOLA QUE TAL";

cadena=x+"";

let b:boolean;

let j;

b=true;
b=false;

document.write(x.toString());

let z:any="jjaaja";
z=4;

//// ARRAYS

let arrayIndefinido:any[2];


arrayIndefinido[0]=2;
arrayIndefinido[1]="hola";
arrayIndefinido[3]=true;

let arrayNumeros:number[]=[3,4,56,43,1];

arrayNumeros[2]=+"hola";


//// FUNCIONES

function sumar(x: number|string,y: number|string):number|string{
    let resultado:number;
    if(typeof(x)==="string" && typeof(y)==="string")
        return x.concat(y);
    else if(typeof(x)==="string")
        return x;
    else if(typeof(y)==="string")
        return y;
    else
        resultado=x+y;
    return resultado;
}

document.write(sumar(2,4).toString());

document.write(sumar("JAJAJA","JEJEJE")+"");

function conseguirNombre(nombre:string,apellidos?:string|undefined):string{
    if(apellidos==undefined)
        return nombre;
    return nombre+" "+apellidos;
}

document.write(conseguirNombre("Pablo"));


let cuerpo:HTMLElement=document.body;

let elemento:HTMLButtonElement=<HTMLButtonElement>document.getElementById("boton");


