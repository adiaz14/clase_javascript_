//alert("hola mundo");//
//alert("¡Soy JavaScript!");
//console.log("Hola!")

//Hola mundo
//Comentarios
//Comentario de línea
/*Comentario de más 
de una línea*/


//Sentencias

//alert('hola mundo');alert('hola mundo')

//alert('hola');
//alert('hola');

//alert('hola')
//alert('hola')
//javascript interpreta el salto de linea como un punto y coma
//se le llama insercion automatica de punto y coma (linea implicita)
//aunque esto tiene sus excepciones

/*
alert(1+
    3
    +2)

    alert(1+3+2);*/

    /*La documentacion recomienda siempre colocar ; entre sentencias
    independientemente si tenemos saltos implicitos*/


    //Variables

    //let mensaje;
    //mensaje="hola mundo"
    //alert(mensaje)

    /*mensaje="hola mundo 2"
    alert(mensaje)
    No es buena práctica declarar las variables sin el let*/

    //let mensaje;
    //Con let no podemos declarar 2 variables con el mismo nombre

    let a = 5;
    let b = 6;
    let suma = a + b;
    console.log("El resultado de la suma es: ",suma);

    b=7
    console.log(b)

    let nombre = "Andrés";
    let nombre2 = nombre;

    nombre2="Carlos";
    console.log("El nombre uno es:", nombre);
    console.log("El nombre dos es:", nombre2);
    //Javascript hace copias, por ejemplo phyton hace asignación

    //Nombrar variables con camel case
    nombreUno = "Andrés";
    nombreDos = "Jose"
    //Los puristas, por así decirlos trabajan en gral en camel case

    //Nombrar como underscore
    nombre_uno = "Andrés";
    nombre_dos = "Carlos";
    //En lenguajes como phyton / ruby, trabajan en camel case
    //Puede ser también un tema de políticas de trabajo

    //Nombres no comunes
    let $ = 1;
    let _ = 2; //Sin embargo son válidos

    //No puede nombrar variables
    //let 1a = 3; No iniciar con numeros
    //let primer-nombre; No esta permitido usasr guiones medios
    //Puede usarse numeros en las sintaxis permitidas, sin embargo 
    //no son buenas prácticas

    "use strict"
    mensaje="hola mundo";

    //Constantes, hacen parte de la última versión

    //Buena práctica usar mayuscula sostenida en una constante
    //cuyo valor es conocida y no va a cambiar, cuando 
    //esta será el resultado de una operacion, podría no ser 
    //necesario el uso de mayuscual sostenida de acuerdo a buenas practicas
    const PI = 3.141624;
    const COLOR_ROJO = "#FFFFF";
    pi_dos=PI; //Javascript es case sensitive
    pi_dos=7;
    console.log(PI);
    console.log(pi_dos);
    //const id_account = get_id_account(45);
    //Ni en las constantes javascript utiliza referencias, sino copias

    //Tipos de datos

    //Dinámicamente tipado (no se 'declara' el tipo de dato)
    //la variable toma el tipo del valor que se le declare,
    //sin embargo siempre tiene un tipo de datod definido
    
    //Tipo de dato number
    let n = 123;
    n= 12.456;
    //El tipo number engloba los números (enteros y flotantes),
    

    //Valores numericos especiales, Infinity,-Infinity y NaN

    //Infinity: representa el infinito matematico, Es un valor especial que 
    //es mayor que cualquier número.

    console.log(1/0);
    console.log(Infinity);

    //NaN representa un error de calculo. Es el resultado de una operacion
    //matematica incorrecta o indefinida

    console.log("no es un número" / 2);

    //NaN es pegajoso. Cualquier operación sobre Nan devuelve NaN

    console.log("no es un número" / 2 + 5);

    //Tipo de dato BigInt

    //Valores enteros mayores que (2^53-1) o menor que -(2^53-1) 9.007.199.254.740.911

    let numero_grande = 123138641613531518183513523831358131358/*n*/;
    console.log(numero_grande);

    //Tipo String , es cadena de caracteres, no importa si se tiene en 
    //javascript comilla simple o doble, no existe el char

    let letra="a"; //Como no existe el char se puede hacer cosas como esta
    let texto = "hola";
    let texto_dos = 'hola';
    let texto_tres = ``;//Sirven para funcionalidad extendida, backticks
    //sirven para hacer interpolacion
    let nomb = "Andres";
    console.log("Hola",nomb); //En la concatenacion la coma tiene un espacio, el + no tiene el espacio, no usando la funcion
    //sino una concatenacion, estos son los parametros opcionales 
    console.log('Hola',nomb);
    console.log(`Hola`,nomb);
    console.log("Hola ${nomb}");
    console.log('Hola ${nomb}');
    console.log(`Hola ${nomb}`); //Utilizado para los templates


    //Tipo booleano

    //true y false, en miniuscula

    let verdadero = true;
    let falso = false;

    //Resultado del producto de una comparacion
    let mayor = 4 > 1; //true

    //Tipo de dato nulo null

    //Valor especial que no pertenece a ningun tipo de dato anteriormente
    //mencionado (no booleano, string, numerico)
    //Forma un tipo propio seprado que contiene solo el valor nulo null

    let edad = null; 
   console.log(edad);
    //En JS null no significa un objeto no existente,
    //asi como en otro lenguaje, es solo un valor especial que representa,
    //nada, vacio o valor desconocido

    //Valor undefined

    //Valor especial que no pertenece a ningun tipo de dato anterior, al igual que null
    //El significado de undefined es valor no asignado.

    let edad_dos; //No se le define ningun valor
    console.log(edad_dos);

    //El operador typeof o funcion typeof(x)
    //Devuelve el tipo de dato que tiene una variable (si es boolean, number, etc)
    //tambien dice si algo es una funcion

    //Uso como operador
    console.log(typeof undefined); //undefined
    console.log(typeof 0); //number
    console.log(typeof true); //boolean
    console.log(typeof 10n); //bigint
    console.log(typeof "hola"); //string

    console.log(typeof(alert));

    //errores de js
    console.log(typeof(null)); //no es un objeto, y un error de js es que lo arroja como objeto

    console.log(typeof(Math)); //Object, aunque es una clase





