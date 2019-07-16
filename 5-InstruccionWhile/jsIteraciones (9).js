/*
Al presionar el botón pedir números hasta que el usuario quiera, 
mostrar el número máximo y el número mínimo ingresado.
*/
function mostrar()
{
	// declarar variables
	var contador=0;
	var num;
	var max;
	var min;
	var respuesta='si';
	

	while(respuesta!='no')
	{
		num=prompt("ingrese numero");
		num=parseInt(num);

		while(isNaN(num))		//bucle para testear que sea numero
		{
			num=prompt("dato erroneo, ingrese numero");
			num=parseInt(num);
		}
		if (contador == 0) 	//verifico que sea el primer ingreso de datos
		{					//si lo es, da al minimo y maximo el valor ingresado
			max = num;
			min = num;
		}

		if (num > max)	//verifico que le numero ingresado sea el mayor
		{				//de ser true lo toma como mayor
			max = num;
		}

		if (num < min)	//verifico que el numero ingresado sea el menor
		{				//de ser true lo toma como menor
			min = num;
		}

		contador ++;

			//pregunto por nuevos numeros
		respuesta = prompt("Desea ingresar otro numero? (si/no)");
		respuesta.toLocaleLowerCase;

		while (respuesta!="si" && respuesta!="no")
		{	//validoq ue la respuesta sea correcta
			respuesta = prompt("Dato invalido, ingrese otro numero");
			respuesta.toLocaleLowerCase;
		}

	
	}
	//muestro en pantalla
	document.getElementById('maximo').value=max;
	document.getElementById('minimo').value=min;



}//FIN DE LA FUNCIÓN