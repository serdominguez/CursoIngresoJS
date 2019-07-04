/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var numeroUno;      //Defino variables
    var numeroDos;
    var resultado;

    numeroUno = document.getElementById('numeroUno').value;     // cargo datos del cuadro de texto
    numeroDos = document.getElementById('numeroDos').value;

    numeroUno = parseInt(numeroUno);    //transformo dato en numerico
    numeroDos = parseInt(numeroDos);

    resultado = numeroUno + numeroDos;  //realizo la operacion

    alert ("La suma es " + resultado);  //imprimo por pantalla en cuadro emergente

}

function restar()
{
    var numeroUno;      //Defino variables
    var numeroDos;
    var resultado;

    numeroUno = document.getElementById('numeroUno').value;     // cargo datos del cuadro de texto
    numeroDos = document.getElementById('numeroDos').value;

    numeroUno = parseInt(numeroUno);    //transformo dato en numerico
    numeroDos = parseInt(numeroDos);

    resultado = numeroUno - numeroDos;  //realizo la operacion

    alert ("La resta es " + resultado);  //imprimo por pantalla en cuadro emergente

	
}

function multiplicar()
{ 
    var numeroUno;      //Defino variables
    var numeroDos;
    var resultado;

    numeroUno = document.getElementById('numeroUno').value;     // cargo datos del cuadro de texto
    numeroDos = document.getElementById('numeroDos').value;

    numeroUno = parseInt(numeroUno);    //transformo dato en numerico
    numeroDos = parseInt(numeroDos);

    resultado = numeroUno * numeroDos;  //realizo la operacion

    alert ("La miltiplicacion es " + resultado);  //imprimo por pantalla en cuadro emergente

	
}

function dividir()
{
    var numeroUno;      //Defino variables
    var numeroDos;
    var resultado;

    numeroUno = document.getElementById('numeroUno').value;     // cargo datos del cuadro de texto
    numeroDos = document.getElementById('numeroDos').value;

    numeroUno = parseInt(numeroUno);    //transformo dato en numerico
    numeroDos = parseInt(numeroDos);

    resultado = numeroUno / numeroDos;  //realizo la operacion

    alert ("La division es " + resultado);  //imprimo por pantalla en cuadro emergente

	
}

