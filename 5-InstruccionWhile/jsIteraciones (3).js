function mostrar()
{
/*
    var clave = prompt("ingrese el número clave.");
    while(clave!="utn750")
    {
        alert("clave incorrecta");
        clave=prompt("ingrese el número clave.");
    }

    alert("clave correcta");
*/

    var clave;
    var mensaje ="Ingrese clave";

    do {
        clave=prompt(mensaje);
        mensaje="Clave incorrecta";
        
    } while (clave!="utn750");

    alert ("clave correcta");
}//FIN DE LA FUNCIÓN
