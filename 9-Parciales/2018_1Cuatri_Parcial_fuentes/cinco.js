function mostrar()
{
var mensaje;
var planeta;
planeta=prompt("Ingrese un planeta del sistema solar");

switch(planeta)
{
	case "tierra":
		mensaje="Acá vivimos."
	break;

	case "mercurio":
	case "venus":
		mensaje="Acá hace mas calor.";
	break;

	case "marte":
	case "jupiter":
	case "saturno":
	case "urano":
	case "neptuno":
		mensaje="Acá hace mas frío.";
	break;

	default:
		mensaje="Planeta no válido.";
	break;
}

alert(mensaje);

}
