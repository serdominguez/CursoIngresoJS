/*
Al ingresar una edad solo debemos informar si la persona NO es adolescente.
*/

function mostrar()
{
//tomo la edad  
/*
    var edad;
    edad=document.getElementById('edad').value;

    edad = parseInt(edad);

    if (edad<13 || edad>17)     // Para que se verifique una condicon u otra se usa "||"
    {
        alert("NO es adolescente");
    }
*/

    var precio;
    precio=document.getElementById('edad').value;
    //precio =parseInt(precio);   no es necesario el parseint

    if (precio<25)
    {
        alert ("Barato");
    } else
    { if (precio<75)
        {
            alert("Caro");
        } else
        {
            alert("Bien");
        }
    
    }
    

}//FIN DE LA FUNCIÓN