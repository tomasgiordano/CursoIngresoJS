
function mostrar()
{
	var persona1;
	var persona2;
	var edad1;
	var edad2;
	var sumaEdades;

	persona1=prompt("Escriba el nombre de la primera persona: ");
	edad1=prompt("Escriba la edad de "+persona1);
	edad1=parseInt(edad1);
	persona2=prompt("Escriba el nombre de la segunda persona:  ");
	edad2=prompt("Escrba la edad de "+persona2);
	edad2=parseInt(edad2);

	sumaEdades=edad1+edad2;

	alert("Ustedes son "+persona1+" y "+persona2+" sus edades son "+edad1+" y "+edad2+", y la suma de sus edades es: "+sumaEdades);
}	
