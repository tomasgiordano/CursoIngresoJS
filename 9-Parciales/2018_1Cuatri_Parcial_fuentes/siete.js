function mostrar()
{
var nota;
var sexo;
var contador=0;
var mensaje;
var promedio;
var acumuladorNotas=0;
var varonesAprobados=0;
var notaMenor;
var sexoMenor;

while(contador<5)
{

	sexo=prompt("Ingrese el sexo del alumno","f o m");
	while(sexo!=="f" && sexo!=="m")
	{
		sexo=prompt("ERROR. Ingrese un sexo valido.","f o m");
	}

	nota=prompt("Ingrese la nota","0 a 10");
	while(nota<0 || nota>10)
	{
		nota=prompt("ERROR. Ingrese una nota valida","0 a 10");
	}
	nota=parseInt(nota);

	acumuladorNotas=acumuladorNotas+nota;

	if(sexo=="m"&&nota>=6)
	{
		varonesAprobados=varonesAprobados+1;
	}

	if(contador==0)
	{
		notaMenor=nota;
		sexoMenor=sexo
	}
	else if(notaMenor>nota)
	{
		notaMenor=nota;
		sexoMenor=sexo;
	}

	contador=contador+1;
}

promedio=(acumuladorNotas/5);
mensaje="El promedio de las notas totales es de "+promedio+". La nota mas baja fue "+notaMenor+" y su sexo es "+sexoMenor+". Aprobaron "+varonesAprobados+" de los varones que rindieron.";

alert(mensaje);

}//FIN FUNCION
