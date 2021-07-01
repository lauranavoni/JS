//paso 1

var edad = prompt( 'Ingrese su edad: ');
var nombre = prompt( 'Ingrese su nombre: ');
var apellido = prompt( 'Ingrese su apellido: ');

//paso2

alert (' El usuario es ' + nombre + ' ' + apellido + ' , y tiene  '+ edad+ '  años.');

// ejecicio 4

document.write('<h3> Nombre: ' + nombre + '</h3>');
document.write('<h3> Apellido: ' + apellido + '</h3>');
document.write('<h3> Edad: ' + edad + ' años</h3>');



//laboratorio 5

var sueldo = parseFloat (prompt ('Ingrese el monto de su sueldo: '));
var bonus = prompt ('ahora ingrese el monto de bonus: ');

alert (' El sueldo total  es de $ ' + parseFloat (sueldo + parseFloat(bonus))) ; 
document .write('<h3 style= "color;green;"> Sueldo total: $  '+ parseFloat (sueldo+ parseFloat (bonus)) + '</h3>'); 


