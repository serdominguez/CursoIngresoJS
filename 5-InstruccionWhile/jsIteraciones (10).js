/*
Al presionar el botón pedir números hasta que el usuario quiera, mostrar:
1-Suma de los negativos. 2-Suma de los positivos. 3-Cantidad de positivos. 
4-Cantidad de negativos. 5-Cantidad de ceros. 6-Cantidad de números pares. 
7-Promedio de positivos. 8-Promedios de negativos. 
9-Diferencia entre positivos y negativos, (positvos-negativos).
*/
function mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	var numero;
	var negativos=0;
	var positivos=0
	var cantNeg=0;
	var cantPos=0;
	var ceros=0;
	var pares=0;
	var respuesta="si";

	while(respuesta!="no")
	{
		numero = prompt("Ingrese numero");
		numero = parseInt(numero);

		while(isNaN(numero))
		{
			numero = prompt("Dato erronoe, ingrese numero");
			numero = parseInt(numero);
		}

		//CANTIDAD DE CEROS
		if (numero == 0)
		{
			ceros++;
		} else 
		//SUMA DE NEGATIVOS Y CANTIDAD
		if (numero<0)
		{
			negativos = negativos + numero;
			cantNeg ++;
		} else
		//SUMA DE POSITIVOS Y CANTIDAD
		{
			positivos = positivos + numero;
			cantPos ++;
		}
		//CANTIDAD DE PARES
		if (numero % 2 == 0) 
		{
			pares++;
		}

		//pido ingresar otro numero
		respuesta = prompt("desea ingresar otro numero? (si/no)");
		respuesta.toLocaleLowerCase
		while(respuesta!="si" && respuesta !="no" )
		{
			respuesta=prompt("Dato invalido, ingrese si o no")
			respuesta.toLocaleLowerCase;
		}



	
	}

	alert ("suma negativos: " + negativos + ", cantidad de negativos " + cantNeg);
	alert ("Suma positivos: " + positivos + ", cantidad de positivos " + cantPos);
	alert ("Cantidad de ceros: " + ceros + " cantidad de pares: " + pares);
	alert ("Promedio de positivos " + (positivos/cantPos) + ", promedio de negativos: " + (negativos/cantNeg)); 
	alert ("la diferencia entre positivos y negativos es " + (positivos+negativos));


}//FIN DE LA FUNCIÓN