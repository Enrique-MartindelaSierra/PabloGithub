    class Series{
        constructor(private serie:string,private capitulos:number){}

        getSeries():string{
            return this.serie;
        }
        setSeries(serie:string){
            this.serie=serie;
        }
        getCapitulos():number{
            return this.capitulos;
        }
        setCapitulos(capitulos:number){
            this.capitulos=capitulos;
        }    


    }

    let arraySeries:Series[]=[];

    function guardar():void|boolean{
        //RECUPERAR DATOS DEL FORMULARIO
        let nombreSerie:string=(<HTMLInputElement>document.getElementById("serie")).value;
        let capitulosSerie:number=+(<HTMLInputElement>document.getElementById("capitulos")).value;
    
        //VALIDAMOS LOS DATOS DEL FORMULARIO
        if(nombreSerie.trim()=="" || nombreSerie.length==0){
            alert("Error!, el nombre de la serie no puedes quedarse vacío");
            (<HTMLInputElement>document.getElementById("serie")).focus();
            return false;
        }

        if(isNaN(capitulosSerie) || capitulosSerie<1){
            alert("El número de capítulos debe ser positivo y obligatorio");
            (<HTMLInputElement>document.getElementById("capitulos")).focus();
            return false;
        }

        //INSTANCIAMOS UN OBJETO DE LA CLASE SERIES
        let serie:Series=new Series(nombreSerie,capitulosSerie);

        //METEMOS EL OBJETO CREADO EN EL ARRAY GENÉRICO DE SERIES
        arraySeries.push(serie);

        //VACIAMOS LOS CAMPOS DEL FORMULARIO
        (<HTMLInputElement>document.getElementById("serie")).value="";
        (<HTMLInputElement>document.getElementById("capitulos")).value="";
    
    }

    function crearCelda(tr:HTMLTableRowElement, contenido:string):void{
        let td:HTMLTableCellElement;
        let texto:Text;
        
        td=document.createElement("td");
        texto=document.createTextNode(contenido);
        td.appendChild(texto);
        td.style.border="1px solid black";
        tr.appendChild(td);
    }

    function listar():void|boolean{
        //1- ACCEDER AL DIV
        let listadoDiv:HTMLDivElement=<HTMLDivElement>document.getElementById("listado");

        //2- COMPROBAR SI YA HAY UNA ESTRUCTURA HECHA, Y SI LA HAY ELIMINARLA (removeChild)
        let hijoDiv:number=listadoDiv.children.length;
        if(hijoDiv>0)
            listadoDiv.removeChild(listadoDiv.children[0]);

        //3- OBTENER EL VALOR DEL DESPLEGABLE
        let nodoDesplegable:HTMLSelectElement=<HTMLSelectElement>document.getElementById("modo");
        //let nodoDesplegable:HTMLSelectElement=document.forms["formu"].modo;
        let desplegable:string=nodoDesplegable.value;

        //4.1- LISTA: CREAR CON EL DOM UNA LISTA UL-LI CON LOS DATOS DEL ARRAY
        if(desplegable=="lista"){
            let ul:HTMLUListElement=document.createElement("ul");
            let li:HTMLLIElement;
            let texto:Text;

            for(let i:number=0;i<arraySeries.length;i++){
                li=document.createElement("li");
                texto=document.createTextNode(arraySeries[i].getSeries()+
                    " Capítulos: ("+arraySeries[i].getCapitulos()+")");
                li.appendChild(texto);
                ul.appendChild(li);
            }
            listadoDiv.appendChild(ul);

        }
               
        //4.2- TABLA: CREAR CON EL DOM UNA TABLA TABLE - TR -TD CON LOS DATOS DEL ARRAY
        else if(desplegable=="tabla"){
            let tabla:HTMLTableElement=document.createElement("table");
            tabla.style.border="1px solid black";

            let tr:HTMLTableRowElement;

            for(let i:number=0;i<arraySeries.length;i++){
                tr=document.createElement("tr");

                crearCelda(tr,arraySeries[i].getSeries());     
                crearCelda(tr,"Capítulos: ("+arraySeries[i].getCapitulos()+")");  
                tabla.appendChild(tr);      
            }
            listadoDiv.appendChild(tabla);  

        }
        //5- Mensaje de error en caso del desplegable vacío
        else
        {
            alert("Error!, el desplegable no puede quedarse vacío");
            return false;
        }
    }

    function arrancar(){
        let boton:HTMLButtonElement=<HTMLButtonElement>document.getElementById("boton");
        boton.addEventListener("click",guardar);
        let desplegable:HTMLSelectElement=<HTMLSelectElement>document.getElementById("modo");
        desplegable.addEventListener("change",listar);
    }

    window.onload=arrancar;
