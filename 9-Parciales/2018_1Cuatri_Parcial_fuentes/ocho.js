function mostrar()
{
var numero;
var letra;
var seguir;
var numerosPares=0;
var numerosImpares=0;
var ceros=0;
var acumuladorPositivos=0;
var promedioNumerosPositivos;
var sumaNumerosNegativos=0;
var numeroMax=-1000;
var letraMax;
var numeroMin=1000;
var letraMin;
var contadorPositivos=0;
var contador=0;

do{

	//LETRA Y NUMERO

	letra=prompt("Ingrese una letra:");
	while((!isNaN(letra))||letra.length>1)
	{
		letra=prompt("ERROR. Ingrese una letra válida.");
	}

	numero=prompt("Ingrese un numero del -100 al 100");
	while((numero<-100||numero>100)||isNaN(numero))
	{
		numero=prompt("ERROR. Ingrese un numero válido.");
	}
	numero=parseInt(numero);

	//NUMEROS IMPARES Y PARES

	if(numero % 2 == 0)
	{
		numerosPares=numerosPares+1;
	}
	else
	{
		numerosImpares=numerosImpares+1;
	}

	//CEROS

	if(numero==0)
	{
		ceros=ceros+1;
	}

	//ACUMULADOR POSITIVOS(PARA PROMEDIO) Y SUMA NEGATIVOS

	if(numero>0)
	{
		acumuladorPositivos=acumuladorPositivos+numero;
		contadorPositivos=contadorPositivos+1;
	}
	else if(numero<0)
	{
		sumaNumerosNegativos=sumaNumerosNegativos+numero;
	}

	//MAXIMO Y MINIMO

	if(contador==0){
		numeroMax=numero;
		letraMax=letra;
		numeroMin=numero;
		letraMin=letra;
	}
	else if(numero>numeroMax)
	{
		numeroMax=numero;
		letraMax=letra;
	}
	else if(numero<numeroMin)
	{
		numeroMin=numero;
		letraMin=letra;
	}

	contador=contador+1;

	seguir=confirm("Desea continuar ingrasando letras y numeros?")

}while(seguir==true)

promedioNumerosPositivos=acumuladorPositivos/contadorPositivos;

document.write("a) La cantidad de numeros pares es: "+numerosPares+
	"<br>b) La cantidad de numeros impares es: "+numerosImpares+
	"<br>c) La cantidad de ceros ingresados fue: "+ceros+
	"<br>d) El promedio de todos los numeros positivos ingresados fue: "+promedioNumerosPositivos+
	"<br>e) La suma de todos los numeros negativos es: "+sumaNumerosNegativos+
	"<br>f) El numero maximo y su letra fueron: "+numeroMax+" , "+letraMax+". Y el numero minimo y su letra fueron: "+numeroMin+" , "+letraMin);

}//FIN FUNCION


/*
a) La cantidad de numeros pares es: 4
b) La cantidad de numeros impares es: 2
c) La cantidad de ceros ingresados fue: 2
d) El promedio de todos los numeros positivos ingresados fue: 10
e) La suma de todos los numeros negativos es: -50
f) El numero maximo y su letra fueron: g , 20. Y el numero minimo y su letra fueron: d , -50

*/