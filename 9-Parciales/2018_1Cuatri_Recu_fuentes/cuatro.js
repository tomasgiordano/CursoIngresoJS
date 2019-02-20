function mostrar()
{
/*Sistema que me ingrese 4 importes, mostrar el mayor,
despues decir cuanto es el total, si supera 100$ hacer un descuento
del 10%, si supera los 50$ el descuento es del 5%, en el caso de ser
menos de 50$, hacerle un recargo del 15% */

//INICIALIZO VARIABLES

var valor1;
var valor2;
var valor3;
var valor4;
var total;
var totalFinal;
var mensaje;
var maximo;

//PIDO LOS VALORES DE LOS IMPORTES

valor1=prompt("Ingrese el monto del PRIMER importe: ","$$$");
valor2=prompt("Ingrese el monto del SEGUNDO importe: ","$$$");
valor3=prompt("Ingrese el monto del TERCER importe: ","$$$");
valor4=prompt("Ingrese el monto del CUARTO importe: ","$$$");

//PARSEO A INTEGER

valor1=parseInt(valor1);
valor2=parseInt(valor2);
valor3=parseInt(valor3);
valor4=parseInt(valor4);

//COMPARACION PARA SACAR EL MAYOR

/*
if(valor1>=valor2){//CONDICION DE VALOR 1
	if(valor1>=valor3){
		if(valor1>=valor4){
			mensaje="El monto mayor es $"+valor1;
		}else{//ELSE DE VALOR 4
			if(valor4>=valor2){
				if(valor4>=valor3){
					mensaje="El monto mayor es $"+valor4;
				}
			}
		}
	}else{//ELSE DE VALOR 3
		if(valor3>=valor2){
			if(valor3>=valor4){
				mensaje="El monto mayor es $"+valor3;
			}
		}
	}
}else{//ELSE DE VALOR 2
	if(valor2>=valor3){
		if(valor2>=valor4){
			mensaje="El monto mayor es $"+valor2;
		}
	}
}
*/

/*
OTRA OPCION MAS EFICIENTE Y EFICAZ

maximo=Math.Max(valor1,valor2,valor3,valor4);
mensaje="El monto mayor es $ "+maximo;

*/

if(valor1>=valor2 && valor1>=valor3 && valor1>=valor4 ){
	mensaje="El monto mayor es $"+valor1;

}else{

	if(valor2>=valor1 && valor2>=valor3 && valor2>=valor4){
	mensaje="El monto mayor es $"+valor2;

	}else{

		if(valor3>=valor1 && valor3>=valor2 && valor3>=valor4){
			mensaje="El monto mayor es $"+valor3;

		}else{
			mensaje="El monto mayor es $"+ valor4;

		}
	}
}



//SACAMOS CUANTO VALE EL TOTAL

total=valor1+valor2+valor3+valor4;
mensaje=mensaje+", el total de su compra fue $"+total;

//CALCULAMOS CUANTO DESCUENTO TIENE

if(total>=100)
{
	totalFinal=total-((total*10)/100);
	mensaje=mensaje+", como su compra supero o igualo los $100, tuvo un descuento del 10%, siendo el precio final $"+totalFinal;	
}
else if(total>=50)
{
	totalFinal=total-((total*5)/100);
	mensaje=mensaje+", como su compra supero o igualo los $50, tuvo un descuento del 5%, siendo el precio final $"+totalFinal;
}
else
{
	totalFinal=((total*15)/100)+total;
	mensaje=mensaje+", por el valor de su compra, usted tiene un recargo del 15%, el precio final es $"+totalFinal;	
}

alert(mensaje);

}
