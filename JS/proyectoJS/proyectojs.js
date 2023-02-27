	/*	
	function hacerEstructuraBasica(menor,mayor,item1,item2,item3,item4){
		document.write(item1);
		for(let i=1;i<=mayor;i++)
			document.write(item2+menor+"x"+i+"="+(menor*i)+item3);
		document.write(item4);		
	}
	*/
	function hacerLista(t,f){
		let lista=document.createElement("ul");
		let elemento,texto;
		for(let i=1;i<=f;i++){
			elemento=document.createElement("li");
			texto=document.createTextNode(t+"x"+i+"="+(t*i));
			elemento.appendChild(texto);
			lista.appendChild(elemento);
		}
		let formulario=document.formu;
		document.body.insertBefore(lista,formulario);
	}
	
	
	function hacerParrafos(t,f){
		let contenedor=document.createElement("div");
		contenedor.style.border="1px solid black";
		let elemento,texto;
		for(let i=1;i<=f;i++){
			elemento=document.createElement("p");
			texto=document.createTextNode(t+"x"+i+"="+(t*i));
			elemento.appendChild(texto);
			contenedor.appendChild(elemento);
		}
		let formulario=document.formu;
		document.body.insertBefore(contenedor,formulario);		
		
	}	
	function hacerDesplegable(t,f){
		let despl=document.createElement("select");
		let elemento,texto;
		for(let i=1;i<=f;i++){
			elemento=document.createElement("option");
			elemento.value="opcion"+i;
			texto=document.createTextNode(t+"x"+i+"="+(t*i));
			elemento.appendChild(texto);
			despl.appendChild(elemento);
		}
		let formulario=document.formu;
		document.body.insertBefore(despl,formulario);		
		
	}	
	
	function hacerCelda(row,cadena){
		let celda,texto;
		celda=document.createElement("td");
		celda.style.border="1px solid black";
		texto=document.createTextNode(cadena);
		celda.appendChild(texto);
		row.appendChild(celda);					
	}	
	function hacerTabla(menor,mayor){
		let tabla=document.createElement("table");
		tabla.style.border="1px solid black";
		tabla.style.borderCollapse="collapse";
		let fila;
		
		for(let i=1;i<=mayor;i++)
		{
			fila=document.createElement("tr");
			
			hacerCelda(fila,menor+"x"+i);
			hacerCelda(fila,"=");
			hacerCelda(fila,menor*i);
			tabla.appendChild(fila);
		}
		let formulario=document.formu;
		document.body.insertBefore(tabla,formulario);	
	}
	
	function menu(){
		let f=document.formu;
		let opcionElegida,modo;
		modo=f.estructura.value;
		let tabla,filas;
		if(modo!="SALIR"){
			tabla=f.tabla.value;
			filas=f.cantidad.value;
		}

		switch(modo){
			case "LISTA":
							hacerLista(tabla,filas);
							//hacerEstructuraBasica(tabla,filas,"<ul>","<li>","</li>","</ul>");
							break;
			case "PARRAFOS":
							hacerParrafos(tabla,filas);
							//hacerEstructuraBasica(tabla,filas,"<div style='border:1px solid black;'>","<p>","</p>","</div>");
							break;		
			case "TABLA":
							hacerTabla(tabla,filas);
							break;
			case "DESPLEGABLE":
							hacerDesplegable(tabla,filas);
							//hacerEstructuraBasica(tabla,filas,"<select>","<option>","</option>","</select>");
							break;	
			case "SALIR":
							alert("Hasta luego");
		}
	}

	function validar(){
		let f=document.formu;
		if(f.tabla.value==""){
			alert("Error el campo de la tabla debe rellenarse");
			return false;
		}
		if(f.cantidad.value==""){
			alert("Error el campo de la cantidad debe rellenarse");
			return false;
		}
		if(f.estructura.value==""){
			alert("Error debe marcar una estructura");
			return false;
		}		
		menu();
		event.preventDefault();
	}
	
	function validarNumeros(nodo,campo){
		if(isNaN(nodo.value) || nodo.value<1 || nodo.value>10)
			nodo.setCustomValidity("Error el campo "+campo+" debe ser numérico");
		else
			nodo.setCustomValidity("");
	}
	
	window.onload=function(){
		let f=document.formu;
		f.onsubmit=validar;
		
		f.tabla.oninput=function(){
			validarNumeros(this,"tabla");
		};
		f.cantidad.addEventListener("blur",function(){
									validarNumeros(this,"cantidad");
									});
	}
	
	

	
	

