function mostrar()
{
  var recargo;
  var precioEfectivo;
  var precioFinal;

  precioEfectivo=prompt("Ingrese el precio del producto: ","$$$");
  precioEfectivo=parseInt(precioEfectivo);

  recargo=(precioEfectivo*10)/100;
  recargo=parseInt(recargo);
  precioFinal=parseInt(precioFinal);
  precioFinal=recargo+precioEfectivo;

  elNombre.value=("Precio en efectivo: "+precioEfectivo);
  laLocalidad.value=("Precio con tarjeta: "+precioFinal);

}
