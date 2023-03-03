	/*	
	function hacerEstructuraBasica(menor,mayor,item1,item2,item3,item4){
		document.write(item1);
		for(let i=1;i<=mayor;i++)
			document.write(item2+menor+"x"+i+"="+(menor*i)+item3);
		document.write(item4);		
	}
	*/
	
	function cambiarEstructura(){
		let f=document.formu;
		let tablaM=f.tabla.value;
		let cantidad=f.cantidad.value;
		
		
		if(this.id=="tabla"){
			hacerLista(tablaM,cantidad);
			document.formu.estructura.value="LISTA";
		}
		else if(this.id=="lista"){
			hacerDesplegable(tablaM,cantidad);
			document.formu.estructura.value="DESPLEGABLE";
		}
		else if(this.id=="desplegable"){
			hacerParrafos(tablaM,cantidad);
			document.formu.estructura.value="PARRAFOS";
		}
		else{
			hacerTabla(tablaM,cantidad);
			document.formu.estructura.value="TABLA";
		
		}
		this.parentNode.removeChild(this);
		
	}
	function cambiarEstructura2(){
		menu();
		document.body.removeChild(document.body.children[0]);	
	}
	
	function hacerLista(tablaMulti,row){
		let lista=document.createElement("ul");
		lista.id="lista";
		lista.onclick=cambiarEstructura;
		let elemento,texto;
		for(let i=1;i<=row;i++){
			elemento=document.createElement("li");
			texto=document.createTextNode(tablaMulti+"x"+i+"="+(tablaMulti*i));
			elemento.appendChild(texto);
			lista.appendChild(elemento);
		}
		let formulario=document.formu;
		document.body.insertBefore(lista,formulario);
	}
	
	
	function hacerParrafos(tablaMulti,row){
		let contenedor=document.createElement("div");
		contenedor.id="parrafos";
		contenedor.onclick=cambiarEstructura;
		contenedor.style.border="1px solid black";
		let elemento,texto;
		for(let i=1;i<=row;i++){
			elemento=document.createElement("p");
			texto=document.createTextNode(tablaMulti+"x"+i+"="+(tablaMulti*i));
			elemento.appendChild(texto);
			contenedor.appendChild(elemento);
		}
		let formulario=document.formu;
		document.body.insertBefore(contenedor,formulario);		
		
	}	
	function hacerDesplegable(tablaMulti,row){
		let despl=document.createElement("select");
		despl.id="desplegable";
		despl.onchange=cambiarEstructura;
		let elemento,texto;
		for(let i=1;i<=row;i++){
			elemento=document.createElement("option");
			elemento.value="opcion"+i;
			texto=document.createTextNode(tablaMulti+"x"+i+"="+(tablaMulti*i));
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
	function hacerTabla(tablaMulti,row){
		let tabla=document.createElement("table");
		tabla.id="tabla";
		tabla.onclick=cambiarEstructura;
		tabla.style.border="1px solid black";
		tabla.style.borderCollapse="collapse";
		let fila;
		
		for(let i=1;i<=row;i++)
		{
			fila=document.createElement("tr");
			
			hacerCelda(fila,tablaMulti+"x"+i);
			hacerCelda(fila,"=");
			hacerCelda(fila,tablaMulti*i);
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
		
		let radios=document.formu.estructura;
		for(let i=0;i<radios.length;i++)
			radios[i].onclick=cambiarEstructura2;

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
	
	function anyadirElemento(){
		let estructuraValor=document.formu.estructura.value;
		let voyPor=++document.formu.cantidad.value;
		let tablaMulti=document.formu.tabla.value;
		let estructura=document.body.children[0];
		
		if(voyPor>10){
			alert("Error no podemos añadir más elementos");
			document.formu.cantidad.value--;
			return;
		}
			
		
		if(estructuraValor=="PARRAFOS"){
			let p=document.createElement("p");
			let texto=document.createTextNode(tablaMulti+"x"+voyPor+"="+(tablaMulti*voyPor));
			p.appendChild(texto);
			estructura.appendChild(p);	
		}
		else if(estructuraValor=="LISTA"){
			let li=document.createElement("li");
			let texto=document.createTextNode(tablaMulti+"x"+voyPor+"="+(tablaMulti*voyPor));
			li.appendChild(texto);
			estructura.appendChild(li);
		}
		else if(estructuraValor=="DESPLEGABLE"){
			let opt=document.createElement("option");
			opt.value="opcion"+voyPor;
			let texto=document.createTextNode(tablaMulti+"x"+voyPor+"="+(tablaMulti*voyPor));
			opt.appendChild(texto);
			estructura.appendChild(opt);			
		}	
		else if(estructuraValor=="TABLA"){
			let fila=document.createElement("tr");
			hacerCelda(fila,tablaMulti+"x"+voyPor);
			hacerCelda(fila,"=");
			hacerCelda(fila,tablaMulti*voyPor);
			estructura.appendChild(fila);
		}	
	}
	
	function quitarElemento(){
		let estructura=document.body.children[0];
		let hijosEstructura=estructura.children;
		if(hijosEstructura.length>0){
			estructura.removeChild(hijosEstructura[hijosEstructura.length-1]);
			document.formu.cantidad.value--;
		}
		else
			alert("Error ya no hay elemento a eliminar");
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
		//OCULTA EL BOTÓN LANZAR
		document.formu.ejecutar.style.display="none";
		
		//<input type="button" name="aumentar" value="+">	
		let aumentar=document.createElement("input");
		aumentar.type="button";
		aumentar.setAttribute("name","aumentar");
		aumentar.value="+";
		aumentar.onclick=anyadirElemento;
		
		//<button type="button" name="reducir">-</button>
		let reducir=document.createElement("button");
		reducir.type="button";
		reducir.name="reducir";
		let textoReducir=document.createTextNode("-");
		reducir.appendChild(textoReducir);
		reducir.addEventListener("click",quitarElemento);
		
		let fieldset=document.querySelector("fieldset");
		fieldset.appendChild(aumentar);
		fieldset.appendChild(reducir);
		
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
	
	

	
	

