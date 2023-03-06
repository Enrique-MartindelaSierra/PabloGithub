"use strict";
class Series {
    constructor(serie, capitulos) {
        this.serie = serie;
        this.capitulos = capitulos;
    }
    getSeries() {
        return this.serie;
    }
    setSeries(serie) {
        this.serie = serie;
    }
    getCapitulos() {
        return this.capitulos;
    }
    setCapitulos(capitulos) {
        this.capitulos = capitulos;
    }
}
let arraySeries = [];
function guardar() {
    //RECUPERAR DATOS DEL FORMULARIO
    let nombreSerie = document.getElementById("serie").value;
    let capitulosSerie = +document.getElementById("capitulos").value;
    //VALIDAMOS LOS DATOS DEL FORMULARIO
    if (nombreSerie.trim() == "" || nombreSerie.length == 0) {
        alert("Error!, el nombre de la serie no puedes quedarse vacío");
        document.getElementById("serie").focus();
        return false;
    }
    if (isNaN(capitulosSerie) || capitulosSerie < 1) {
        alert("El número de capítulos debe ser positivo y obligatorio");
        document.getElementById("capitulos").focus();
        return false;
    }
    //INSTANCIAMOS UN OBJETO DE LA CLASE SERIES
    let serie = new Series(nombreSerie, capitulosSerie);
    //METEMOS EL OBJETO CREADO EN EL ARRAY GENÉRICO DE SERIES
    arraySeries.push(serie);
    //VACIAMOS LOS CAMPOS DEL FORMULARIO
    document.getElementById("serie").value = "";
    document.getElementById("capitulos").value = "";
}
function listar() {
    //1- ACCEDER AL DIV
    //2- COMPROBAR SI YA HAY UNA ESTRUCTURA HECHA, Y SI LA HAY ELIMINARLA (removeChild)
    //3- OBTENER EL VALOR DEL DESPLEGABLE
    let x = document.createTextNode("sss");
    //4.1- LISTA: CREAR CON EL DOM UNA LISTA UL-LI CON LOS DATOS DEL ARRAY
    //4.2- TABLA: CREAR CON EL DOM UNA TABLA TABLE - TR -TD CON LOS DATOS DEL ARRAY
    //5- Mensaje de error en caso del desplegable vacío
}
function arrancar() {
    let boton = document.getElementById("boton");
    boton.addEventListener("click", guardar);
    let desplegable = document.getElementById("modo");
    desplegable.addEventListener("change", listar);
}
window.onload = arrancar;
