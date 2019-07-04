
/*
Al ingresar una edad que sea igual a 15, mostrar el mensaje "niña bonita".
*/


function mostrar()
{
//tomo la edad  

    var edad;

    edad = document.getElementById('edad').value;

    edad = parseInt(edad);

    if (edad==15)       //Valida con doble "="
    {
        alert ("niña bonita");
    }



}//FIN DE LA FUNCIÓN