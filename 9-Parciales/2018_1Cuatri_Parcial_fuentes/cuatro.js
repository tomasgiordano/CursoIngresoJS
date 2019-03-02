function mostrar()
{
var numero1;
var numero2;
var resultado;
var mensaje;

numero1=prompt("Ingrese el PRIMER numero:");
numero2=prompt("Ingrese el SEGUNDO numero:");

//SI SON IGUALES (SIN PARSEAR)

if(numero1==numero2)
{
 	resultado=numero1+numero2
 	mensaje= "La concatenacion es "+resultado;

}
else
{
	numero1=parseInt(numero1);
	numero2=parseInt(numero2);
}

//CUENTAS CON NUMEROS YA PARSEADOS

if(numero1>numero2)
{
	resultado=numero1-numero2;
	mensaje="La resta es "+resultado;

}
else if(numero1<numero2)
{
	resultado=numero1+numero2;

	if(resultado>10)
	{
		mensaje="La suma es "+resultado+" y supero el 10.";
	}
	else
	{
		mensaje="La suma es "+resultado;
	}

}

alert(mensaje);

}//FIN FUNCION
