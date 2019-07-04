/*Al ingresar una edad debemos informar si la persona es mayor de edad,
 si no, informar que es un menor de edad.
*/

function mostrar()
{
//tomo la edad  
    var edad;

    edad = document.getElementById('edad').value;
    edad = parseInt(edad);

    if (edad >= 18) 
    {
        alert ("Es mayor de edad");
    } 
    else
    {
        alert ("Es menor de edad");
    }

}//FIN DE LA FUNCIÓN