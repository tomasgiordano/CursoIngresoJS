function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
var mensaje;
//alert (mesDelAño);
switch(mesDelAño){
	case "Febrero":
		mensaje="tiene 28 días.";
		break;
	case "Abril":
	case "Junio":
	case "Septiembre":
	case "Noviembre":
		mensaje="tiene 30 días.";
		break;
	default:
		mensaje="tiene 31 días.";
}	
	
alert(mensaje);


}//FIN DE LA FUNCIÓN