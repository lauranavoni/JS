//alert('Bienvenidos a Javascript');

/*Comentarios de Bloque*/
/*alert ('Hoy 9 de Marzo es nuestra primera clase');
alert ('Gonzalo');*/


//alert ('Francisco');

/*Variables*/

var nombre ='Francisco';
alert(nombre);

//console.log(nombre);

const nombre1='Laura';
alert('Alumno/a: '+ nombre1); /*Polimorfismo de un operador*/

// error, intento asignar un nuevo valor a una constante

/*nombre1= 'agustin';
alert ('Alumno/a '+ nombre1);*/

/*var edad;
edad = 47;
alert('edad= '+ edad);
edad= 'Pedro'
alert('edad= '+ edad);
edad= true
alert('edad= '+ edad);
edad= 125.75
alert('edad= '+ edad);*/

var apellido= 'Mercado F.';

document.write( 'jonatan dice que es muy facil declarar las variables');
document.write( '<h2>Laura dice que es muy facil declarar las variables</h2>');
document.write( '<h3 style= "color:blue;">Juan dice que es muy facil declarar las variables</h3>');

//Operadores
// asignacion:=
var numero = 12;// (crear una var)
numero =12; //equivalente a var numero =12;
//op incremento
++numero;
alert('variable numero = ' + numero);
//op decremento
--numero;
--numero;
alert('variable numero= '+ numero);

//operador de asignacion compacta
/*numero+=10;
alert('variable numero= '+ numero);
numero= numero 10;
alert('variable numero= '+ numero);*/

numero-=7;
alert('variable numero= '+ numero);
numero= numero -5;
alert('variable numero= '+ numero);

numero-=7;
alert('variable numero= '+ numero);
numero= numero -5;
alert('variable numero= '+ numero);

numero*=2;
document.writeln('variable numero= '+ numero + '<br>');
numero= numero *3;
document.writeln('variable numero= '+ numero + '<br>');

numero/=5;
document.writeln('variable numero= '+ numero + '<br>');
numero= numero * 3;
document.writeln('variable numero= '+ numero  + '<br>');

numero = numero % 6;
document.writeln('variable numero = '+ numero + '<br>');
/*
var sueldo_basico = 50000;
var antiguedad= 10000;
var titulo = 7500;
var obra_social= 1500;
var jubilacion = 5500;

var sueldo_neto= sueldo_basico + antiguedad+titulo- obra_social-jubilacion;
document.write ('El sueldo a cobrar por el empleador es: ' + sueldo_neto);*/
var sueldo_basico=  prompt ('Ingrese Nombre del empleado: ');

var sueldo_basico= parseInt ( prompt ('Ingrese sueldo del empleado: '));



var antiguedad =  (sueldo_basico) *20/100;
var titulo=  (sueldo_basico) *15/100;
var obra_social = (sueldo_basico) *0.03;
var jubilacion = (sueldo_basico) *0.11;

var sueldo_neto=  (sueldo_basico) + antiguedad+ titulo-obra_social-jubilacion;

document.write ('El sueldo del empleado es: ' + sueldo_neto);

var respuesta = confirm ('El calculo es correcto?');
alert ('respuesta=  '+ respuesta);
