/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto;
numeroSecreto=parseInt(numeroSecreto); 
var contadorIntentos=0;
//contadorIntentos=parseInt(contadorIntentos);
var numeroIntento;
numeroIntento=parseInt(numeroIntento);

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	 numeroSecreto=Math.floor((Math.random() * 100) + 1);
		//alert(numeroSecreto);
	alert("Numero secreto generado. Que empiece el juego!")

		numero.value="";
		intentos.value="";
		contadorIntentos=0;
		numeroIntento="";
}

function verificar()
{
	numeroIntento=numero.value;

	if(numeroIntento>numeroSecreto){
		alert("Te pasaste...");
		contadorIntentos=(contadorIntentos + 1);
		intentos.value=contadorIntentos;
		numeroIntento="";
		numero.value="";
	}else if(numeroIntento<numeroSecreto){
		alert("Falta...");
		contadorIntentos=(contadorIntentos + 1);
		intentos.value=contadorIntentos;
		numeroIntento="";
		numero.value="";
	}else{

		numero.value="GANASTE!";
		intentos.value="GANASTE!";

		alert("GANASTE!!! y en tan solo: "+contadorIntentos+" intentos.");

		//Vuelvo todos los valores de variables a 0 para que el usuario pueda volver a jugar si lo desea

		//numero.value="";
		//intentos.value="";
		numeroSecreto="";
		contadorIntentos=0;
		numeroIntento="";

		alert("Haz click en el boton 'Comenzar' para jugar otra vez!");
	}
	
}