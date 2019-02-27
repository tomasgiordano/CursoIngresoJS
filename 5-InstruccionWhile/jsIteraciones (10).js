function mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	
	//var respuesta="si";
	var respuesta;
	var ingrese;
	respuesta = true;

	while(respuesta==true)
	{	
		ingrese=prompt("Ingrese un numero:");
		ingrese=parseInt(ingrese);
		while(isNaN(ingrese)==true){
			alert("No es un numero.");
			break;
		}

		contador=contador+1;

		respuesta=confirm("Desea continuar ingresando numeros?");

		if(respuesta!=true)
		{
			alert("Usted dejó de ingresar numeros, procesando respuesta...")
			break;
		}
		



	}




}//FIN DE LA FUNCIÓN