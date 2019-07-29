function mostrar()
{

    var repetciones = prompt("ingrese el número de repeticiones");
    repetciones=parseInt(repetciones);

    while(isNaN(repetciones))
    {
        repetciones = prompt("dato invalido. Ingrese el número de repeticiones");
    }
 
    for (i=1;i<=repetciones;i++){
        console.log("Hola UTN FRA" + i);
    }


}//FIN DE LA FUNCIÓN