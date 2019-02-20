function mostrar()
{
	/*
													SWITCH:

		Cada habitacion de un hotel tiene precio , hay promociones segun el tipo de pago si es con tarjeta visa
	un 10%, si es por paypal un 15%, por mercadoPago un 10%, efectivo 20%, cualquier otro medio un 5%.
		Si compraste el paquete "todoIncluido" y pagas con paypal se te suman 10% al descuento.
		Si pagas en efectivo, tenes varias opciones, el paquete "soloDesayunos" te suma un 10% al descuento,
	si el paquete es "todoIncluido" te suma un 15% y para el resto de los paquete no tiene descuento adicional.

	*/
	var mensaje;
	var precioHabitacion;
	var formaDePago;
	var paquete;
	var total;
	var descuento;
	descuento=parseInt(descuento);

	precioHabitacion=prompt("Ingrese el monto de la habitacion: ","$$$");
	precioHabitacion=parseInt(precioHabitacion);
	mensaje="Su habitacion cuesta $"+precioHabitacion;


	formaDePago=prompt("Cual va a ser su forma de pago?","visa/paypal/mercadoPago/efectivo/otro");
	mensaje=mensaje+", su forma de pago es: "+formaDePago;

	paquete=prompt("Que paquete quiere agregar a su compra?","todoIncluido/soloDesayunos/otro");
	mensaje=mensaje+", y llevo el paquete: "+paquete; 


	switch (formaDePago){
		case "visa":
		case "mercadoPago":
			descuento=10;
			mensaje=mensaje+". Por su forma de pago tuvo un "+descuento+"% de descuento.";
			break;
		case "paypal":
			descuento=15;
				switch(paquete){
					case "todoIncluido":
						descuento=descuento+10;
						mensaje=mensaje+". Por su forma de pago y su paquete tuvo un "+descuento+"% de descuento.";
						break;
					default:
					mensaje=mensaje+". Por su forma de pago tuvo un "+descuento+"% de descuento.";
						break;
				}//Cierra SWITCH (paquete) paypal
			break;
		case "efectivo":
			descuento=20;			
				switch(paquete){
					case "todoIncluido":
						descuento=descuento+15;
						mensaje=mensaje+". Por su forma de pago y su paquete tuvo un "+descuento+"% de descuento.";
						break;
					case "soloDesayunos":
						descuento=descuento+10;
						mensaje=mensaje+". Por su forma de pago y su paquete tuvo un "+descuento+"% de descuento.";
						break;
					default:
						mensaje=mensaje+". Por su forma de pago tuvo un "+descuento+"% de descuento.";
						break;
				}//Cierra SWITCH (paquete) efectivo
			break;
		default:
			descuento=5;
			mensaje=mensaje+". Por su forma de pago tuvo un "+descuento+"% de descuento.";
			break;
	}//Cierra SWITCH (formaDePago)

total=((precioHabitacion*descuento)/100)+precioHabitacion;
mensaje=mensaje+" El total a pagar es: "+total+".";
alert(mensaje);

}