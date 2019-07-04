/*
Al ingresar una edad debemos informar si la persona es 
adolescente, edad entre 13 y 17 años (inclusive) .
*/

function mostrar()
{
//tomo la edad  

    var edad;

    edad = document.getElementById('edad').value;
    edad = parseInt(edad);

    if (edad >= 13 && edad <= 17)   //se agregan comparaciones con "&&"
    {
        alert ("tiene entre 13 y 17 años");
    }

}//FIN DE LA FUNCIÓN