/*
Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive
*/

function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	var numero;
	numero = Math.floor((Math.random() * 10) + 1);	
	/* 
	Math.random genera numero entre 0 y 1 (con muchos decimales)
	Math.floor redondea el numero para abajo

	la formula es:
	Math.floor(Math.random() * ((numero mayor- numero menor) + 1)))


	*/
	
	/*
		****FORMA LARGA****
	numero = Math.random();
	numero = numero * 10;
	numero = parseInt(numero);
	*/

	alert (numero);

}//FIN DE LA FUNCIÓN