/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var cantidadLamparas;
 	var descuento;
 	var marcaLamparas;
 	var precioBruto;//La cantidad de lamparas x35
 	precioBruto=parseInt(precioBruto);
 	var descuento;//Porcentaje de descuento
 	var descuentoFinal;//Descuento agregado al precio
 	var precioFinal;//precioBruto - descuentoFinal

 	var ingresosBrutos = 10;
 	ingresosBrutos=parseInt(ingresosBrutos);

 	var precioConIngresosBrutos;

 	cantidadLamparas=Cantidad.value;
 	cantidadLamparas=parseInt(cantidadLamparas);
 	marcaLamparas=Marca.value;
 	precioBruto=cantidadLamparas*35;
 	//console.log(precioBruto);

 	//En el caso de que sea 1 o 2 no se hace nada


 	switch(cantidadLamparas)
 	{	case 1:
 				precioFinal=precioBruto;
 				descuento=0;
 				break;
 		case 2:
 				precioFinal=precioBruto;
 				descuento=0;
 				break;
 		case 3:
 				if(marcaLamparas=="ArgentinaLuz")
 				{
 						descuento=15;
 				}
 				else if(marcaLamparas=="FelipeLamparas")
 				{
 						descuento=10;
 				}
 				else
 				{
 						descuento=5;
 				}			
 					break;			
		case 4:
				if(marcaLamparas=="ArgentinaLuz"|| marcaLamparas=="FelipeLamparas")
				{
					descuento=25;
				}
				else
				{
					descuento=20;
				}
				break;
		case 5:
				if(marcaLamparas=="ArgentinaLuz")
				{
					descuento=40;
				}
				else
				{
					descuento=30;			
 				}
 				break;
 		default:
 				descuento=50;
 				break;									
	}

descuentoFinal=((precioBruto*descuento)/100);
precioFinal=precioBruto-descuentoFinal;
//precioDescuento.value=("$"+precioFinal);

if(precioFinal>=120){
precioConIngresosBrutos=((precioFinal*ingresosBrutos)/100);
precioFinal=precioConIngresosBrutos+precioFinal;
alert("IIBB Usted pago $"+precioConIngresosBrutos+" como impuesto.");
}

precioDescuento.value=("$"+precioFinal);

}