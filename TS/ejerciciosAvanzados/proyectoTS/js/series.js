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
function crearCelda(tr, contenido) {
    let td;
    let texto;
    td = document.createElement("td");
    texto = document.createTextNode(contenido);
    td.appendChild(texto);
    td.style.border = "1px solid black";
    tr.appendChild(td);
}
function listar() {
    //1- ACCEDER AL DIV
    let listadoDiv = document.getElementById("listado");
    //2- COMPROBAR SI YA HAY UNA ESTRUCTURA HECHA, Y SI LA HAY ELIMINARLA (removeChild)
    let hijoDiv = listadoDiv.children.length;
    if (hijoDiv > 0)
        listadoDiv.removeChild(listadoDiv.children[0]);
    //3- OBTENER EL VALOR DEL DESPLEGABLE
    let nodoDesplegable = document.getElementById("modo");
    //let nodoDesplegable:HTMLSelectElement=document.forms["formu"].modo;
    let desplegable = nodoDesplegable.value;
    //4.1- LISTA: CREAR CON EL DOM UNA LISTA UL-LI CON LOS DATOS DEL ARRAY
    if (desplegable == "lista") {
        let ul = document.createElement("ul");
        let li;
        let texto;
        for (let i = 0; i < arraySeries.length; i++) {
            li = document.createElement("li");
            texto = document.createTextNode(arraySeries[i].getSeries() +
                " Capítulos: (" + arraySeries[i].getCapitulos() + ")");
            li.appendChild(texto);
            ul.appendChild(li);
        }
        listadoDiv.appendChild(ul);
    }
    //4.2- TABLA: CREAR CON EL DOM UNA TABLA TABLE - TR -TD CON LOS DATOS DEL ARRAY
    else if (desplegable == "tabla") {
        let tabla = document.createElement("table");
        tabla.style.border = "1px solid black";
        let tr;
        for (let i = 0; i < arraySeries.length; i++) {
            tr = document.createElement("tr");
            crearCelda(tr, arraySeries[i].getSeries());
            crearCelda(tr, "Capítulos: (" + arraySeries[i].getCapitulos() + ")");
            tabla.appendChild(tr);
        }
        listadoDiv.appendChild(tabla);
    }
    //5- Mensaje de error en caso del desplegable vacío
    else {
        alert("Error!, el desplegable no puede quedarse vacío");
        return false;
    }
}
function arrancar() {
    let boton = document.getElementById("boton");
    boton.addEventListener("click", guardar);
    let desplegable = document.getElementById("modo");
    desplegable.addEventListener("change", listar);
}
window.onload = arrancar;
