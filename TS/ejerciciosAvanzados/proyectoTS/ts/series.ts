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

    function guardar(){
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

    function listar(){
        //1- ACCEDER AL DIV

        //2- COMPROBAR SI YA HAY UNA ESTRUCTURA HECHA, Y SI LA HAY ELIMINARLA (removeChild)

        //3- OBTENER EL VALOR DEL DESPLEGABLE

        let x:Text=document.createTextNode("sss");

        //4.1- LISTA: CREAR CON EL DOM UNA LISTA UL-LI CON LOS DATOS DEL ARRAY
        //4.2- TABLA: CREAR CON EL DOM UNA TABLA TABLE - TR -TD CON LOS DATOS DEL ARRAY

        //5- Mensaje de error en caso del desplegable vacío
    }

    function arrancar(){
        let boton:HTMLButtonElement=<HTMLButtonElement>document.getElementById("boton");
        boton.addEventListener("click",guardar);
        let desplegable:HTMLSelectElement=<HTMLSelectElement>document.getElementById("modo");
        desplegable.addEventListener("change",listar);
    }

    window.onload=arrancar;
