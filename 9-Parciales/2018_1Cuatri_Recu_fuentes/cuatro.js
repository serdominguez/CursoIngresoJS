/*
Bienvenidos. 
(IF)Pedir dos números y mostrar el resultado: 
Si son iguales los muestro concatenados. 
Si el primero es mayor, los divido, 
de lo contrario los sumo. 
Si la suma es menor a 50 ,además de mostrar el resultado, muestro el mensaje 
"la suma es xxx y es menor a 50".
*/

function mostrar()
{
    var numero1;    //Declaro variables
    var numero2;
    var suma;

    numero1=prompt("ingrese primer numero");    //traigo datos por prompt
    numero2=prompt("ingrese segundo numero");

    if (numero1==numero2)   //verifico primera condicion del enunciado
    {
        alert(numero1+numero2);
    } 
    numero1=parseInt(numero1);  //paso a numero los valores
    numero2=parseInt(numero2);
    suma=numero1+numero2;       
    
    if (numero1>numero2)    //verifico la segunda condición
    {        
        alert(numero1/numero2);
    } else                  //valido la negativa
    {
        alert(suma);
    }

    if (suma<50)        //verifico tercera condicion
    {
        alert("La suma es "+suma+" y es menor a 50");
    }

    
}
