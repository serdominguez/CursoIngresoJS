function mostrar()
{

    var numero=prompt("ingrese numero");
    var contador=0;

    for (i=1;i<=numero;i++){
        if (numero%i==0){
            console.log(i);
            contador++;
        }
    }

    console.log("cantidad de divisores: "+contador);


}//FIN DE LA FUNCIÓN