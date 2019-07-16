/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
    var edad;
    var sexo;
    var estadoCivil;
    var sueldo;
    var legajo;
    var nacionalidad;
 
    //EDAD
    edad = prompt ("ingrese endad entre 18 y 80");
    edad = parseInt(edad);

    while ((edad<18 || edad>80) || isNaN(edad))
    {
        edad = prompt ("Dato erroneo, ingrese endad entre 18 y 80");
        edad = parseInt(edad);
    }

    //SEXO
    sexo = prompt ("ingrese sexo (M o F)")
    sexo = sexo.toUpperCase();

    while (sexo!="M" && sexo!="F")
    {
        sexo = prompt ("Dato erroneo, ingrese sexo (M o F)");
        sexo = sexo.toUpperCase();
    }

    //ESTADO CIVIL
    estadoCivil = prompt("Ingrese: 1.Para SOLTERO/A 2.Para CASADO/A 3.Para DIVORCIADO/A 4.Para VIUDO/A");
    estadoCivil = parseInt(estadoCivil);
    while (isNaN(estadoCivil) || estadoCivil>5)
    {
        estadoCivil = prompt("ERROR - Ingrese: 1.Para SOLTERO/A 2.Para CASADO/A 3.Para DIVORCIADO/A 4.Para VIUDO/A");
        estadoCivil = parseInt(estadoCivil);

    }
    estadoCivil = estadoCivil.toString();
    switch(estadoCivil){
        case "1":
        estadoCivil="SOLTERO/A";
        break;
        case "2":
        estadoCivil="CASADO/A";
        break;
        case "3":
        estadoCivil="DIVORCIADO/A";
        break;
        case "4":
        estadoCivil="VIUDO/A";
    }

    //SUELDO
    sueldo = prompt ("Ingrese sueldo bruto (mayor a 8000)");
    sueldo = parseInt(sueldo);

    while(isNaN(sueldo) || sueldo < 8000)
    {
        sueldo = prompt ("ERROR. Ingrese sueldo bruto (mayor a 8000)");
        sueldo = parseInt(sueldo);
    }

    //LEGAJO
    legajo = prompt("ingrese legajo (numerico de cuatro cifras)");
    legajo = parseInt(legajo);

    while(isNaN(legajo) || legajo > 10000)
    {
        legajo = prompt("ERROR. ingrese legajo (numerico de cuatro cifras)");
        legajo = parseInt(legajo);
    }

    //NACIONALIDAD
    nacionalidad = prompt ("ingrese nacionalidad: A-Argenito, E-Extranjero, N-Nacionalizado");
    nacionalidad = nacionalidad.toUpperCase();
    while (nacionalidad!="A" && nacionalidad!="N" && nacionalidad!="E")
    {
        nacionalidad = prompt ("ERROR. ingrese nacionalidad: A-Argenito, E-Extranjero, N-Nacionalizado");
        nacionalidad = nacionalidad.toUpperCase();
    }
    switch(nacionalidad){
        case "A":
        nacionalidad="ARGENTINO";
        break;
        case "E":
        nacionalidad="EXTRANJERO";
        break;
        case "N":
        nacionalidad="NACIONALIZADO";
        break;
    }

    //muestro en pantalla
    document.getElementById('Edad').value = "Edad: " + edad;
    document.getElementById('Sexo').value = "Sexo " + sexo;
    document.getElementById('EstadoCivil').value = "Estado civil: " + estadoCivil;
    document.getElementById('Sueldo').value = "Sueldo "+sueldo;
    document.getElementById('Legajo').value = "Legajo " +legajo;
    document.getElementById('Nacionalidad').value = "Nacionalidad "+nacionalidad;
}
