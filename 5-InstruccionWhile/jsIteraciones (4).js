/*
al presionar el botón pedir un número entre 0 y 9 inclusive.
*/

function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 9.");
	numero = parseInt(numero);	//convierto a numero entero - da NaN si no es numero

	while(isNaN(numero))	//valido que se haya ingresado un numero
	{
		numero = prompt("Es letra, ingrese un número entre 0 y 9.");
		numero = parseInt(numero);
	}
	
	while (numero>=10 || numero<0)	//Valido que el numero este entre cero y diez
	{
		numero = prompt("Numero incorrecto, ingrese un número entre 0 y 9.");
	}
	
	document.getElementById('Numero').value="el numero ingresado fue "+numero;


}//FIN DE LA FUNCIÓN