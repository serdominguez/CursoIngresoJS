function mostrar()
{
//tomo la edad  
    var mesDelAño;
    mesDelAño = document.getElementById('mes').value;

    switch (mesDelAño) {
        case "Septiembre":  //los CASE que ejecutarian la misma sentencia se pueden juntar
        case "Octubre":
        case "Noviembre":
        case "Diciembre":
            alert("Ya pasamos el frio, ahora calor!!!.");
            break;
        case "Julio":   //los CASE que ejecutarian la misma sentencia se pueden juntar
        case "Agosto":
            alert("Abrigate que hace frio.");
            break;
        default:
            alert("Falta para el invierno.");


    }

    //alert (mesDelAño);




}//FIN DE LA FUNCIÓN