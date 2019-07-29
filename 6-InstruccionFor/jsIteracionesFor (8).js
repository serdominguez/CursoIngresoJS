function mostrar()
{
    var num=prompt("ingrese numero");
    var primo=true;

    num = parseFloat(num);

    while (isNaN(num) || !Number.isInteger(num))
    {
        num = prompt("Dato incorrecto, ingrese numero")
        num = parseFloat(num);
    }

    for (i=2;i<num;i++){
        if (num%i==0){
            primo=false;

        }
    }

    if (primo==true){
        alert("el numero "+num+" es primo");
    } else 
    {
        alert("el numero "+num+" NO es primo");
    }



}//FIN DE LA FUNCIÓN