/*
Al presionar el botón pedir números hasta que el usuario quiera, 
sumar los que son positivos y multiplicar los negativos.
*/
function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	var respuesta;

	do
	{
		numero = prompt("Ingrese numero");
		numero = parseInt(numero);

		while(isNaN(numero))
		{
			numero = prompt("Dato incorrecto, ingrese numero");
			numero = parseInt(numero);
		}

		if (numero>0)
		{
			positivo = positivo + numero;
		} else
		if (numero<0)
		{
			negativo = negativo * numero;
		}

		respuesta = prompt("desea ingresar otro numero? (si/no)");
		respuesta = respuesta.toLocaleLowerCase();
		while(respuesta!="si" && respuesta!="no")
		{
			respuesta=prompt("Dato incorrecto, ingrese si o no");
			respuesta = respuesta.toLocaleLowerCase();
				}
	} while(respuesta=='si');


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN