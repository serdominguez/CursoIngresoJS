/*
al presionar el botón pedir un número entre 0 y 9 inclusive.
*/

function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 9.");
	while (numero>=10)
	{
		alert("numero erroneo");
		numero = prompt("ingrese un número entre 0 y 9.");
	}
	
	document.getElementById('Numero').value="el numero ingresado fue "+numero;


}//FIN DE LA FUNCIÓN