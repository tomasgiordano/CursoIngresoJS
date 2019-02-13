function mostrar()
{
	var cantidadProductos;
	var precio;
	var formaDePago;
	var precioFinal;
	var mensaje = "Usted realizo una compra de ";

	cantidadProductos=prompt("Ingrese la cantidad de productos que va a comprar: ","1");
	cantidadProductos=parseInt(cantidadProductos);

	precio=prompt("Ingrese el precio total de el/los producto/s: ","$$$");
	precio=parseInt(precio);
	mensaje=mensaje+cantidadProductos+" productos al precio de $"+precio;

	formaDePago=prompt("Escriba la forma de pago en la q le gustaria realizar la compra (efectivo/tarjeta)","efectivo");

		if(cantidadProductos>2&&precio>=2000){

			precioFinal=(precio-(precio*25/100));
			mensaje=mensaje+" por lo tanto tiene un 25% de descuento.";			

		}else if(cantidadProductos>2){

			precioFinal=(precio-(precio*10/100));
			mensaje=mensaje+" por lo tanto tiene un 10% de descuento.";
			

		}else{

			precioFinal=precio;
			mensaje=mensaje+". No tiene ningun descuento.";
		}
	

if(formaDePago=="tarjeta"){
	precioFinal=(precio*10/100)+precio;
	mensaje=mensaje+" Por el abono con tarjeta, se le recarga un 10% a su compra.";
}

alert(mensaje);
elPrecioFinal.value="El precio final es de: $"+precioFinal;

}
