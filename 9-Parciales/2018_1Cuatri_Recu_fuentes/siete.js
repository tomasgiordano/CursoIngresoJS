function mostrar()
{
	var nota;
	var sexo;
	var mNotaAprobada=0;
	var mensaje;
	var sexoNotaMasBaja;
	var contador=0;
	var sumaNotas=0;
	var notaMenor=100;
	var promedio;

	while(contador<5)
	{
		sexo=prompt("Ingrese el sexo del alumno:","f o m");
		while(sexo!="m" && sexo!="f")
		{
			sexo=prompt("Error, ingrese un sexo valido por favor.","f o m");
		}
		nota=prompt("Ingrese la nota del alumno:");
		while(isNaN(nota)==true || (nota<0 || nota>10))
		{
			nota=prompt("Error, ingrese una nota valida:");
		}

		//PARA EL PROMEDIO
		nota=parseInt(nota);
		sumaNotas=sumaNotas+nota;

		mensaje="El promedio de todas las notas es ";

		//NOTA MENOR Y SU SEXO
		if(nota<notaMenor)
		{
			notaMenor=nota;
			sexoNotaMasBaja=sexo;
		}
	
		//CANTIDAD DE VARONES APROBADOS
		if(sexo="m"&&nota>=6)
		{
			mNotaAprobada=mNotaAprobada+1;
		}

		contador=contador+1;
	}

	promedio=sumaNotas/5;
	mensaje=mensaje+promedio+", la nota mas baja fue "+notaMenor+" y su sexo es "+sexoNotaMasBaja+". Aprobaron "+mNotaAprobada+" varones de los que rindieron."
	alert(mensaje);

}
