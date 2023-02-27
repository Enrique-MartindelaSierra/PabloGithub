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
		
		
	}	
	function hacerDesplegable(t,f){
		
		
	}	
	function hacerTabla(menor,mayor){
		document.write("<table style='border:1px solid black; border-collapse:collapse;'>");
		for(let i=1;i<=mayor;i++)
			{
				document.write("<tr>");
				document.write("<td style='border:1px solid black;'>"+menor+"x"+i+"</td>");
				document.write("<td style='border:1px solid black;'>=</td>")>
				document.write("<td style='border:1px solid black;'>"+(menor*i)+"</td>");
				document.write("</tr>");
				
			}
		document.write("</table>");			
		
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
		menu();
		event.preventDefault();
	}
	
	window.onload=function(){
		let f=document.formu;
		f.onsubmit=validar;
	}
	
	

	
	

