/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{

    var numeroUno;      //Defino variables
    var numeroDos;
    var resultado;

    numeroUno = document.getElementById('numeroUno').value;     // cargo datos del cuadro de texto
    numeroDos = document.getElementById('numeroDos').value;

    numeroUno = parseInt(numeroUno);    //transformo dato en numerico
    numeroDos = parseInt(numeroDos);

    resultado = numeroUno + numeroDos;  //realizo la suma

    alert ("La suma es " + resultado);  //imprimo por pantalla en cuadro emergente

}

