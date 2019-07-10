/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio 
de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un 
descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o 
“FelipeLamparas” se hace un descuento del 25 % y si es de otra 
marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  
el descuento es del 15%, si es  “FelipeLamparas” se hace un 
descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe 
sumar un 10% de ingresos brutos en informar del impuesto con el 
siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{

    var cantidadLamparas;   //defino variables
    var precio;
    var marca;
    var precioIBrutos;

    cantidadLamparas = document.getElementById('Cantidad').value;   //traigo datos
    cantidadLamparas=parseInt(cantidadLamparas);    //transformo a numero

    marca=document.getElementById('Marca').value;   //traigo datos

    precio=cantidadLamparas*35  //calculo cantidad de lampras por precio unitario
    

    if (cantidadLamparas>=6)    //para mas de 6 lamparas
    {
        precio=precio-(precio*50/100);
    }
    
    if (cantidadLamparas==5 && marca=="ArgentinaLuz")   //para 5 lamparas
    { 
        precio=precio-(precio*40/100);  
    } else if (cantidadLamparas==5)
    {
        precio=precio-(precio*30/100);
    }

    if ((cantidadLamparas==4 && marca=="ArgentinaLuz") ||
     (cantidadLamparas==4 && marca=="FelipeLamparas"))  //para 4 lamparas
     {
        precio=precio-(precio*25/100);
     } else if (cantidadLamparas==4)
     {
        precio=precio-(precio*20/100);
     }

    
    if (cantidadLamparas==3 && marca=="ArgentinaLuz")   //para 3 lamparas
    {
        precio=precio-(precio*15/100);
    }else if (cantidadLamparas==3 && marca=="FelipeLamparas")
    {
        precio=precio-(precio*10/100);
    }else if (cantidadLamparas==3)
    {
        precio=precio-(precio*5/100);
    }
    
    if (precio>=120)    //para valores superiores a 120
    {
        precioIBrutos=(precio*10/100);      //calculo Ingresos brutos
        precio=precio+precioIBrutos;        //los sumo al total
        alert("Usted pago "+precioIBrutos+" de IIBB.");    //muestro en ventana emergente lo que se paso de IIBB
        
    }

    document.getElementById('precioDescuento').value=precio; //muestro total en cuadro de texto


}
