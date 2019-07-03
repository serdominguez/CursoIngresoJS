/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	

    var nombre;     //Inicializo variable
    var edad;       //Inicializo variable

    nombre=document.getElementById('elNombre').value;   //traigo valor del cuadro de texto
    edad=document.getElementById('laEdad').value;       //traigo valor del cuadro de texto

    alert("Usted se llama "+ nombre + " y tiene " + edad + " años")     //Imprimo por pantalla en ventana emergente     
}

