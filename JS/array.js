// Array
/* 
var nombre = 'Ariel';
var nombre1 = 'Gonzalo';
var nombre2 = 'Francisco';

var nombres = 'ariel, gonzalo, francisco';

*/

/*var nombres = ['Ariel', 'Gonzalo', 'Francisco'];
alert ('cantidad de elementos del array nombres []:  '+ nombres.length);
alert('1° elemento: ' + nombres [0]);
alert ('2° elemento: ' + nombres [1]);
alert ('3° elemento: '+ nombres [2]);

nombres[3] = 'Jose';

alert ('cantidad de elementos del array nombres []:  '+ nombres.length);

nombres[8] = 'juan pablo';
alert ('cantidad de elementos del array nombres []:  '+ nombres.length);
nombres [6] = '';

alert ('7° elemento: '+ nombres [6]);

nombres[nombres.length] = 'laura';
alert ('ultimo elemento: '+ nombres [nombres.length - 1]);

alert ('cantidad de elementos del array nombres []:  '+ nombres.length);
*/
// Array vacio
/*
var elementos = [];
elementos [0] = 'laura';
elementos [1] = true;
elementos [2] = 1244;
elementos [3] = 99.99;
*/

/*document.write(elementos [0] + '<br>');
document.write(elementos [1] + '<br>');
document.write(elementos [3] + '<br>');
document.write(elementos [2] + '<br>');*/
//document.getElementById ('contenedor').innerHTML = elementos;


/*elementos [0];
elementos [2];*/


// Array de objetos
/*
var alumnos = [
{nombre:'gonzalo',apellido:'hernando', codigo:'5784525'},
{nombre:'jose',apellido:'perez', codigo:'45612'},
{nombre:'juan',apellido:'gomez', codigo:'14562'},
{nombre:'laura',apellido:'navoni', codigo:''}
];

//document.getElementById ('contenedor').innerHTML = alumnos;

var todos = alumnos [0] .nombre + '  ' + alumnos[0].apellido + '  '+ alumnos[0].codigo +  '<br>';
todos = alumnos [1] .nombre + '  ' + alumnos[1].apellido + '  '+ alumnos[1].codigo +  '<br>';
todos = alumnos [2] .nombre + '  ' + alumnos[2].apellido + '  '+ alumnos[2].codigo +  '<br>';
todos = alumnos [3] .nombre + '  ' + alumnos[3].apellido + '  '+ alumnos[3].codigo +  '<br>';

document.getElementById ('contenedor').innerHTML = todos;
alert('cantidad de alumnos = ' + alumnos.length);
*/

var cursantes = ['Marcela','Laura','Francisco','Gonzalo'];
document.getElementById ('contenedor0').innerHTML = '<h2>' + cursantes + '</h2><br>';

cursantes.sort();
document.getElementById ('contenedor1').innerHTML = '<h2>' + cursantes + '</h2><br>';

var primer_elemento = cursantes[0];
document.getElementById ('contenedor2').innerHTML = '<h2>el valor del 1° elemento es ' + primer_elemento + '</h2><br>';

var ultimo_elemento = cursantes[cursantes.length - 1];
document.getElementById ('contenedor3').innerHTML = '<h2>el valor del ulyimo elemento es ' + ultimo_elemento + '</h2><br>';

cursantes.push('jose')
document.getElementById ('contenedor4').innerHTML = '<h2>' + cursantes + '</h2><br>';

cursantes.pop();
document.getElementById ('contenedor5').innerHTML = '<h2>' + cursantes + '</h2><br>';

cursantes.unshift ('jose');
document.getElementById ('contenedor6').innerHTML = '<h2>' + cursantes + '</h2><br>';

cursantes.shift();
document.getElementById ('contenedor7').innerHTML = '<h2>' + cursantes + '</h2><br>';

cursantes.push('ariel');
cursantes.push('juan pablo');
cursantes.push('jose');
cursantes.push('sebastian');
document.getElementById ('contenedor8').innerHTML = '<h2>' + cursantes + '</h2><br>';

cursantes.splice(1,1,'matias');
document.getElementById ('contenedor9').innerHTML = '<h2>' + cursantes + '</h2><br>';

var recursantes =['Facundo','agustin'];

var todos = cursantes.concat( recursantes);
document.getElementById ('contenedor10').innerHTML = '<h2>' + todos + '</h2><br>';

document.write('cantidad total de elementos= '+ todos.length + '<br>');

//for
/*
for (let cantidad = 0; cantidad < todos.length; cantidad++) {
   document.write( todos[cantidad] + '<br>');  
    //alert(todos[cantidad]);
}

for (let cantidad = 0; cantidad < todos.length; cantidad=cantidad + 1) {
    document.write( todos[cantidad] + '<br>');  
     //alert(todos[cantidad]);
 }
 */

 //while
 var cantidad = 0;
 while (cantidad < todos.length) {
    document.write( todos[cantidad] + '<br>');   
    cantidad++; 
 }
 var valor = todos.length -1;
 while (valor >= 0) {
    document.write( todos[valor] + '<br>');   
    valor--; 
 }
 



