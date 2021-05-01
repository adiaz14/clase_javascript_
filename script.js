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

//let a = 5;
//let b = 6;
//let suma = a + b;
//console.log("El resultado de la suma es: ",suma);

//b=7
//console.log(b)

//let nombre = "Andrés";
//let nombre2 = nombre;

//nombre2="Carlos";
//console.log("El nombre uno es:", nombre);
//console.log("El nombre dos es:", nombre2);
//Javascript hace copias, por ejemplo phyton hace asignación

//Nombrar variables con camel case
//nombreUno = "Andrés";
//nombreDos = "Jose"
//Los puristas, por así decirlos trabajan en gral en camel case

//Nombrar como underscore
//nombre_uno = "Andrés";
//nombre_dos = "Carlos";
//En lenguajes como phyton / ruby, trabajan en camel case
//Puede ser también un tema de políticas de trabajo

//Nombres no comunes
//let $ = 1;
//let _ = 2; //Sin embargo son válidos

//No puede nombrar variables
//let 1a = 3; No iniciar con numeros
//let primer-nombre; No esta permitido usasr guiones medios
//Puede usarse numeros en las sintaxis permitidas, sin embargo
//no son buenas prácticas

"use strict";
//mensaje="hola mundo";

//Constantes, hacen parte de la última versión

//Buena práctica usar mayuscula sostenida en una constante
//cuyo valor es conocida y no va a cambiar, cuando
//esta será el resultado de una operacion, podría no ser
//necesario el uso de mayuscual sostenida de acuerdo a buenas practicas
//const PI = 3.141624;
//const COLOR_ROJO = "#FFFFF";
/*pi_dos=PI; //Javascript es case sensitive
    pi_dos=7;
    console.log(PI);
    console.log(pi_dos);*/
//const id_account = get_id_account(45);
//Ni en las constantes javascript utiliza referencias, sino copias

//Tipos de datos

//Dinámicamente tipado (no se 'declara' el tipo de dato)
//la variable toma el tipo del valor que se le declare,
//sin embargo siempre tiene un tipo de datod definido

//Tipo de dato number
//let n = 123;
//n= 12.456;
//El tipo number engloba los números (enteros y flotantes),

//Valores numericos especiales, Infinity,-Infinity y NaN

//Infinity: representa el infinito matematico, Es un valor especial que
//es mayor que cualquier número.

//console.log(1/0);
//console.log(Infinity);

//NaN representa un error de calculo. Es el resultado de una operacion
//matematica incorrecta o indefinida

//console.log("no es un número" / 2);

//NaN es pegajoso. Cualquier operación sobre Nan devuelve NaN

//console.log("no es un número" / 2 + 5);

//Tipo de dato BigInt

//Valores enteros mayores que (2^53-1) o menor que -(2^53-1) 9.007.199.254.740.911

//let numero_grande = 123138641613531518183513523831358131358/*n*/;
//console.log(numero_grande);

//Tipo String , es cadena de caracteres, no importa si se tiene en
//javascript comilla simple o doble, no existe el char

//let letra="a"; //Como no existe el char se puede hacer cosas como esta
//let texto = "hola";
//let texto_dos = 'hola';
//let texto_tres = ``;//Sirven para funcionalidad extendida, backticks
//sirven para hacer interpolacion
//let nomb = "Andres";
//console.log("Hola",nomb); //En la concatenacion la coma tiene un espacio, el + no tiene el espacio, no usando la funcion
//sino una concatenacion, estos son los parametros opcionales
/*console.log('Hola',nomb);
    console.log(`Hola`,nomb);
    console.log("Hola ${nomb}");
    console.log('Hola ${nomb}');
    console.log(`Hola ${nomb}`); //Utilizado para los templates*/

//Tipo booleano

//true y false, en miniuscula

//let verdadero = true;
//let falso = false;

//Resultado del producto de una comparacion
//let mayor = 4 > 1; //true

//Tipo de dato nulo null

//Valor especial que no pertenece a ningun tipo de dato anteriormente
//mencionado (no booleano, string, numerico)
//Forma un tipo propio seprado que contiene solo el valor nulo null

/*let edad = null; 
    console.log(edad);*/
//En JS null no significa un objeto no existente,
//asi como en otro lenguaje, es solo un valor especial que representa,
//nada, vacio o valor desconocido

//Valor undefined

//Valor especial que no pertenece a ningun tipo de dato anterior, al igual que null
//El significado de undefined es valor no asignado.

//let edad_dos; //No se le define ningun valor
//console.log(edad_dos);

//El operador typeof o funcion typeof(x)
//Devuelve el tipo de dato que tiene una variable (si es boolean, number, etc)
//tambien dice si algo es una funcion

//Uso como operador
/*console.log(typeof undefined); //undefined
    console.log(typeof 0); //number
    console.log(typeof true); //boolean
    console.log(typeof 10n); //bigint
    console.log(typeof "hola"); //string

    console.log(typeof(alert));*/

//errores de js
//console.log(typeof(null)); //no es un objeto, y un error de js es que lo arroja como objeto

//console.log(typeof(Math)); //Object, aunque es una clase

//Interacciones: alert, prompt, confirm

//alert("hola"); es una ventana modal, bloquea todo hasta que salgamos de esa ventana modal,
//sirve para enviar mensajes

//alert('Hola Mundo');

//prompt

//let nombre_capturado = prompt('Titulo del mensaje', 'Hola'); //Titulo del mensaje y una entrada que es opcional,
//alert(nombre_capturado); //Si se cancela regresa vacio null
//la idea es almacenar lo que regresa

//prompt('Digite el nombre'); //En IE si no se le pasa una entrada, agrega el undefined
//prompt('Digite el nombre','');//Solo IE

//Confirm
//let esHelado = confirm('¿Te gusta el helado?');
//console.log(esHelado); //True si presiona Ok , false si se presiona cancel

//CONVERSION DE TIPOS

//Existen dos tipos de conversiones explícita e implícita

//ToString

//Convertir a String

let valor = true;
console.log(typeof valor);

valor = String(valor); //true
//Se convierten a false, null, undefined o nan si se hace lo siguiente
valor = String(false); //false
valor = String(null); //null
valor = String(undefined); //undefined

console.log(valor);
console.log(typeof valor);

//Convertir a Número

//Las conversiones numéricas ocurren automáticamente en funcines
//matemáticas y expresiones

//alert('6'/'2'); // 3, Conversion implicita, devuelve 3, siempre y cuando
//haya una operacion matematica los string numero pasan a numero
//alert(1 + '2'); //'12'
//alert('1' + 2);//'12'

let cadena = "123";
let num_cad = Number(cadena); //123

console.log(Number("Hola")); //NaN, arroja nan en conversiones de
//numero fallidas, no se genera error en el codigo

/* Tabla de conversiones a numero
    undefined -> NaN
    null -> 0
    true -> 1
    false -> 0
    string -> si es num mas texto es nan, si es vacio es cero '' -> 0
    */

//Convertir a booleano

/* Tabla de conversiones booleana
    undefined -> false
    null -> false
    0 -> false
    '0' -> true
    string '' -> false
    es true, cuando seas un caso diferentes a los mostrados en esta tabla
    '  ' -> true, para tener en cuenta el uso de trims
    */
//console.log(Boolean("hola"));

console.log(Boolean(0));
console.log(Boolean(String(0)));

//OPERADORES BÁSICOS

//  Operadore unarios y binarios

let a, b, res;
a = 5;
b = 2;

//Operaciones binarias
res = a + b;
res = a - b;
res = a * b;
res = a / b;
res = a % b; //mod
res = a ** b; //potencia

//alert('1' + 2); //12
//alert(1 + '2'); //12

//alert(2 + 2 + '1'); //No retorna 221, sino 41, si primero va la operacion la realiza y luego concatena
//alert('1' + 2 + 2); //122, si primero esta la concatenacion, concatena

//alert(2 - '1'); //1, convierte por el signo menos y entiende que es una operacion
//alert('6' / '2'); //3
//alert('6' / '2a'); //NaN, ya que es un error de operacion matematica

//Operaciones Unarias +
//Realiza una conversion explicita utilizando un operador unario
//El mas es una operacion unaria que convierte cualquier tipo de dato a entero, en los numeros no los afecta
a = 1;
//console.log(+a);
//console.log(-a);

console.log(-a);
a = -1;

console.log(-a);
//El menos niega la asignacion inicial en numeros
/*
    console.log(+true);
    console.log(+false);
    console.log(+NaN);
    console.log(+undefined);
    console.log(+null);
    console.log(+"");

    a="2";
    b="3";

    console.log(+a + + b); //prinmero se hace la operacion unaria y despues la operacion
    console.log(Number(a) + Number(b))*/

console.log(-true);
console.log(-false);

//ASIGNACIONES

let c = 1;
a = 2 + 3;
a = b = c = 2 + 3;
c = 2 + 3;
b = c;
a = b;

//Asignaciones dentro de operaciones

c = 3 - (a = b + 1); //Primero asigna y luego realiza la operacion

//MODIFICACIONES

a = a + 2;
a += 2;
a = a - 2;
a -= 2;

//Incrementos y decremento

//++ Incremento
//-- Decremento

a=2;
a ++;

console.log(a);//3

a=2;
a --;

console.log(a);//1

//Posición del incremento o decremento

a= 1;
b=++ a;
console.log(b); //2

a=1;
b = a ++;
c=a;
console.log(b);//1
console.log(c);//2

//COMPARACIONES

console.log(2 > 1); //true
console.log(2 == 1); //false
console.log(2 != 1); //true

let resultado = 2 > 1;

//Comparaciones entre cadenas
//Js utiliza un diccionario lexicografico para esta.

console.log('Z' > 'A'); //true
console.log('Show' > 'show'); //false, en js las minisculas son mayor que las mayusculas
console.log('casa' > 'casas'); //false, la palabra con mas letras es mayor
console.log('a' > 'A'); //true
console.log('carro' > 'cerro'); //false



//1. La letra miniscula es mayor que la maysucula
//2. La palabra con mas letras despues de pasar la primera condicion
//es mayor que la de menos letras

//Comparacion de diferentes tipos

//Al comparar valores de diferentes tipos, javascript convierte los valores
//a numero

//Toda comparacion con NaN es falso

console.log('*************');

a = 0;
b = '0';

let boolean_a = Boolean(a);
let boolean_b = Boolean(b);

console.log(a == b);


console.log('*************');
console.log('2' > 1); //true
console.log('01' == 1); //true
console.log(true > 0); //true
console.log(false > 0); //true

//NaN
console.log('******* NaN ******');
console.log('hola' > 0); //false
console.log('hola' < 0); //false
console.log('hola' == 0); //false

console.log('****** undefined *******');
//undefined
console.log(undefined > 0); //false
console.log(undefined < 0); //false
console.log(undefined == 0); //false

console.log('****** null *******');
//null
console.log(null > 0); //false
console.log(null < 0); //false
console.log(null >= 0); //true
console.log(null == 0); //false


console.log('****** null y undefined == *******');

//El undefined y el null en las comparaciones se iguales no estrictas
//actuan diferentes: son iguales entre si, pero no a ningun otro valor

console.log(undefined == null); //true
console.log(null == 5); //false
console.log(undefined == 5); //false

console.log('********** no diferencia de 0 de falso **********');
console.log(0 == false); //true
console.log('' == false); //true

//Igualación Estricta
let nombre;

console.log(0 === false); //false
console.log(null === undefined); //false
nombre == null
console.log(nombre === undefined); //false



/* Tabla de conversiones a numero
    undefined -> NaN
    null -> 0
    true -> 1
    false -> 0
    string -> si es num mas texto es nan, si es vacio es cero '' -> 0
    */

//Convertir a booleano

/* Tabla de conversiones booleana
    undefined -> false
    null -> false
    0 -> false
    NaN ->false
    '0' -> true
    string '' -> false
    es true, cuando seas un caso diferentes a los mostrados en esta tabla
    '  ' -> true, para tener en cuenta el uso de trims
    */


/*
    5 > 4 //true
    "apple" >"pineapple" //false
    "2" > "12" //true como son de tipos diferentes no los convierte
    undefined == null //true
    undefined === null //false
    null == "0" //true
    null === +"0" //false
*/

console.log('********** SENTENCIAS **********');
// SENTENCIA IF

if(4 > 5) console.log('mensaje');

if(4>5){
    b=5+3;
    console.log('mensaje');
}

if('45a'/3){
    console.log('No entró');
}

if(4/3){
    console.log('Entró');
}

if(1){
    console.log('entré o no entre?');
}

let edadx;

if(!edadx){
    console.log('Variable definida');
}else{
    console.log('Variable indefinida');
}

//Haga un algoritmo que dado una edad retorne true si es mayor de edad
//false si no lo es.

let edad_usuario = 17;
if(edad_usuario >= 18){
    console.log(true);
}else{
    console.log(false);
}

console.log(edad_usuario>=18);

//Operador ternario
//condicion ? operacion verdadera : operacion falsa;
let x=0;
resultado = edad_usuario >= 18 ? x=5 : x=7;

//Operador lógico

//OR
/*
V OR V = V
V OR F = V
F OR V = V
F OR F = F
*/

console.log('************ Operador OR ************');
console.log(true || true); //true
console.log(true || false); //true
console.log(false || true); //true
console.log(false || false); //false

if(4 == 4 || 2 >5){
    console.log('Verdadero');
}

//resultado = valor_uno || valor_dos || valor_tres; en caso que sean numeros
//pasos del algoritmo
//1. evalua los operandos de izquierda a derecha
//2. por cada operando, convierte el valor a booleano, si el resultado es true
//se detiene y retorna el valor original de ese operando
//3. Si todos los operandos han sido evaluados (todos eran falsos),
//retorna el ultimo operando

let comparacion_booleana = true || false || true; //true
comparacion_booleana = '0' || '0'; //'0'
comparacion_booleana = undefined || null || NaN || ''; //''
comparacion_booleana = undefined || null || 3 || ''; 
comparacion_booleana = undefined || 'hola' || 3 || ''; 
//Resumen: devuelve el primer valor verdadero o el ultimo si todos son falsos

console.log('************ Operador AND ************');
console.log(true && true); //true
console.log(true && false); //false
console.log(false && true); //false
console.log(false && false); //false

if(4 == 4 || 2 >5){
    console.log('Verdadero');
}

//resultado = valor_uno && valor_dos && valor_tres; 
//pasos del algoritmo
//1. evalua los operandos de izquierda a derecha
//2. por cada operando, convierte el valor a booleano, si el resultado es false
//se detiene y retorna el valor original de ese operando
//3. Si todos los operandos han sido evaluados (todos eran verdaderos),
//retorna el ultimo operando

comparacion_booleana = true && false && true; //false
comparacion_booleana = '0' && '0'; //'0'
comparacion_booleana = undefined && null && NaN && ''; //undefined
comparacion_booleana = undefined && null && 3 && ''; //undefined
comparacion_booleana = undefined && 'hola' && 3 && ''; //undefined

/* Tabla de conversiones booleana
    undefined -> false
    null -> false
    0 -> false
    NaN ->false
    '0' -> true
    string '' -> false
    es true, cuando seas un caso diferentes a los mostrados en esta tabla
    '  ' -> true, para tener en cuenta el uso de trims
    */

    //PREVALENCIA U ORDEN ENTRE OR Y AND

    //a && b || c && d = (a && b) || (c && d)

    //Negación

    console.log(!true); //false
    console.log(!false); //true
    console.log(!!undefined); //false == boolean(undefined)

    //Nullish o fusion de nulos

//resultado = valor_uno ?? valor_dos ?? valor_tres; 
//pasos del algoritmo
//1. evalua los operandos de izquierda a derecha
//2. por cada operando, revisa si es null o undefined y regresa el primero que no sea
//ni nulo ni undefined
//3. Si todos los operandos han sido evaluados son nulos u undefined
//regresa el ultimo

a = null ?? undefined ?? undefined ?? null ?? "hola" ?? null ?? 'carlos'; //"hola"
a =   undefined ?? undefined ?? undefined ??  null ?? null ?? null; //null

