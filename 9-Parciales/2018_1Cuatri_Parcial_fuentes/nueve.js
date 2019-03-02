function mostrar()
{	
var marca;
var peso;
var temperatura;
var seguir;
var temperaturasPares=0;
var marcaMasPesado;
var productosMenosCeroGrados=0;
var promedioPesoProductos;
var acumuladorPesoProductos=0;
var pesoMax;
var pesoMin;
var contador=0;

do{
	marca=prompt("Ingrese la marca del producto:");

	peso=prompt("Ingrese el peso del producto:","1 a 100");
	while((peso>100||peso<1)|| isNaN(peso))
	{
		peso=prompt("ERROR. Ingrese un peso valido");
	}
	peso=parseInt(peso);

	temperatura=prompt("Ingrese la temperatura de almacenamiento del producto:","-30 a 30");
	while((temperatura>30 || temperatura<-30) || isNaN(temperatura))
	{
		temperatura=prompt("ERROR. Ingrese una temperatura valida");
	}

	//TEMPERATURAS PARES

	if(temperatura%2==0)
	{
		temperaturasPares=temperaturasPares+1
	}

	//PESO MAXIMO Y MINIMO

	if(contador==0)
	{
		pesoMin=peso;
		pesoMax=peso;
		marcaMasPesado=marca;
	}
	else if(peso>pesoMax)
	{
		pesoMax=peso;
		marcaMasPesado=marca;
	}
	else if(peso<pesoMin)
	{
		pesoMin=peso;
	}

	//PRODUCTOS A MENOS DE 0 GRADOS

	if(temperatura<0)
	{
		productosMenosCeroGrados=productosMenosCeroGrados+1;
	}

	//ACUMULADOR PESO PARA PROMEDIO

	acumuladorPesoProductos=acumuladorPesoProductos+peso;

	contador=contador+1;
	seguir=confirm("Desea continuar ingresando productos?");

}while(seguir==true)

promedioPesoProductos=acumuladorPesoProductos/contador;

document.write("a) Cantidad de temperaturas pares: "+temperaturasPares+
	"<br> b) Marca del producto mas pesado: "+marcaMasPesado+
	"<br>c) Cantidad productos a menos de 0 grados: "+productosMenosCeroGrados+
	"<br>d) El promedio del peso de todos los productos: "+promedioPesoProductos+
	"<br>f) Peso maximo: "+pesoMax+". Peso minimo: "+pesoMin+".");
}//FIN FUNCION


/*
a) Cantidad de temperaturas pares: 3
b) Marca del producto mas pesado: pepito
c) Cantidad productos a menos de 0 grados: 3
d) El promedio del peso de todos los productos: 30
f) Peso maximo: 50. Peso minimo: 10.
*/