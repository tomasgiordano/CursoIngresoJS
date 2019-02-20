/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos;

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

	if(numeroIntento>numeroSecreto)
	{
		alert("Te pasaste...");
		contadorIntentos=(contadorIntentos + 1);
		intentos.value=contadorIntentos;
		numeroIntento="";
		numero.value="";
	}
	else if(numeroIntento<numeroSecreto)
	{
		alert("Falta...");
		contadorIntentos=(contadorIntentos + 1);
		intentos.value=contadorIntentos;
		numeroIntento="";
		numero.value="";
	}
	else
	{
		if(!(contadorIntentos<6 || contadorIntentos>10)){
			contadorIntentos=610;
		}
		switch(contadorIntentos){

			case 1:
					alert("Usted es un Psiquico");
					break;
			case 2:
					alert("Excelente percepcion");
					break;
			case 3:
					alert("Esto es suerte");
					break;
			case 4:
					alert("Excelente tecnica");
					break;
			case 5:
					alert("Usted esta en la media");
					break;
			case 610:
					alert("Falta tecnica");
					break;
			default:
					alert("Afortunado en el amor!!")
					break;

		}

		//Vuelvo todos los valores de variables a 0 para que el usuario pueda volver a jugar si lo desea

		numero.value="";
		intentos.value="";
		numeroSecreto="";
		contadorIntentos=0;
		numeroIntento="";

		alert("Haz click en el boton 'Comenzar' para jugar otra vez!");
	}
	

}