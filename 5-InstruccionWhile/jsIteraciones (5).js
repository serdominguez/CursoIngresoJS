function mostrar()
{
/*
    var sexo = prompt("ingrese f ó m .");

    sexo=sexo.toLowerCase();

    while (sexo!="f" && sexo!="m")
    {
        sexo = prompt("Valor incorrecto, ingrese f ó m .")
    }

    document.getElementById('Sexo').value=sexo;
*/

    var sexo;

    do{
        sexo=prompt("Ingrese sexo (F o M)");
        sexo=sexo.toUpperCase();

    } while (sexo!="F" && sexo!="M");

    document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN