/*
Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4
*/

function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 

	var numero;
	numero = Math.floor((Math.random()*10)+1); 	//genera numero random de 1 a 10. Ver detalle en ejercicio anterior.

	if (numero < 4)
	{
		alert ("Vamos, la proxima se puede ");
	} else 
	{
		if (numero>8 )
		{
			alert ("EXCELENTE");
		} else
		{ 
			alert ("APROBO");
		}
	}
	
	

}//FIN DE LA FUNCIÓN