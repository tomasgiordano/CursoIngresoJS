
function mostrar()
{
var ancho;
var largo;
var perimetro;

ancho=prompt("Ingrese el ancho del rectangulo: ");
ancho=parseInt(ancho);

largo=prompt("Ingrese el largo del rectangulo: ");
largo=parseInt(largo);

perimetro=2*(ancho+largo);

alert("El perimetro de este rectangulo es: "+perimetro);


}
