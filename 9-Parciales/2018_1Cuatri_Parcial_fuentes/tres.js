function mostrar()
{
var precio;
var descuento;
var precioFinal;

precio=prompt("Ingrese el PRECIO del producto:","$$$");
precio=parseInt(precio);

descuento=prompt("Ingrese el porcentaje de DESCUENTO que nesecite aplicar:","%%%");
descuento=parseInt(descuento);

precioFinal=precio-((precio*descuento)/100);
elPrecioFinal.value="$"+precioFinal;

}
