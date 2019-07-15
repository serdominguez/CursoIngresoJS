/*
Al presionar el botón pedir 5 números e informar 
la suma acumulada y el promedio.
*/

function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;

	acumulador = parseInt(acumulador);
	
	while (contador<5) 
	{
		contador ++;
		numero=prompt("ingrese numero")	;
		numero = parseInt(numero);
		acumulador = acumulador + numero;
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN