/*
Al ingresar una edad solo debemos informar si la persona NO es adolescente.
*/

function mostrar()
{
//tomo la edad  
    var edad;
    edad=document.getElementById('edad').value;

    edad = parseInt(edad);

    if (edad<13 || edad>17)     // Para que se verifique una condicon u otra se usa "||"
    {
        alert("NO es adolescente");
    }

}//FIN DE LA FUNCIÓN