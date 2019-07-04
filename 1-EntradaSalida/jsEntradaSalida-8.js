/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
    var divisor;
    var dividendo;
    //var resultado;
    var resto;

    dividendo = document.getElementById('numeroDividendo').value;
    divisor = document.getElementById('numeroDivisor').value;

    divisor = parseInt(divisor);
    dividendo = parseInt(dividendo);

    //resultado = dividendo / divisor;
    //resultado = parseInt(resultado);
    // resto = dividendo - (resultado * divisor);

    resto = dividendo % divisor;    //El operador '%' determina directamente el resto
    
    alert ("El resto es " + resto);


}
