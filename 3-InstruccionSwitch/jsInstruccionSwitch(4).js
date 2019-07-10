function mostrar()
{
    var mesDelAño;
    mesDelAño = document.getElementById('mes').value;

    switch(mesDelAño){
        case "Febrero":
            alert("Tiene 28 dias");
            break;
        case "Abril":   //los CASE que ejecutarian la misma sentencia se pueden juntar
        case "Junio":
        case "Septiembre":
        case "Noviembre":
            alert("Tiene 28 y 30 dias");
            break;
        default:
            alert("Tiene 28, 30 y 31 dias");
    }
	
	



}//FIN DE LA FUNCIÓN