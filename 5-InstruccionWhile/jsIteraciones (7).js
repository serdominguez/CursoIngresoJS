/*
Al presionar el botón pedir números hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{

	var numero;		//declaro variables
	var contador=0;
	var acumulador=0;
	var respuesta='si';

	do					//armo bucle para cuando se desea ingresar un nuevo numero
	{					//se da valor 'si' por defecto para que se ingrese el primer numero
		
		numero = prompt("ingrese numero") //pido numero y lo parseo
		numero= parseInt(numero);

		while (isNaN(numero))	//valino que se haya ingresado un numero
		{
			numero = prompt ("valor incorrecto, ingrese numero");
			numero= parseInt(numero);
		}
		contador ++;	//aumento contador (se necesita para el promedio)

		acumulador = acumulador + numero;	//aumento acumulador (para promedio y suma)

		respuesta = prompt ("desea ingresar un nuevo numero? (si/no)"); //pido nuevo dato
		respuesta.toLocaleLowerCase;

		while (respuesta!="si" && respuesta!="no")	//Valido que la respuesta sea valida
		{
			respuesta = prompt("dato invalido, ingrese si o no");
			respuesta.toLocaleLowerCase;
		}



	} while (respuesta=='si');




document.getElementById('suma').value="La suma es: "+acumulador;		//calculo suma
document.getElementById('promedio').value="El promedio es: "+acumulador/contador;	//calculo promedio

}//FIN DE LA FUNCIÓN