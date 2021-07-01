/*var dolar = parseFloat (prompt ('Ingrese el valor del dolar'));
/*
if ( dolar > 100 ) {
   document.write ( '<br>');
   document.write ( '<hr>');
   document.write ('es muy caro para mi...');
}
if ( dolar <= 100 ) {
    document.write ( '<br>');
    document.write ( '<hr>');
    document.write ('es un precio razonable...');
 }*/

 // if-else
 
 /*
 if ( dolar > 100 ) {
    document.write ( '<br>');
    document.write ( '<hr>');
    document.write ('es muy caro para mi...');
 }
 else{
    document.write ( '<br>');
    document.write ( '<hr>');
    document.write ('es muy caro para mi...');
} */
// if-else if
/*

 if ( dolar <= 100 ) {
    document.write ( '<br>');
    document.write ( '<hr>');
    document.write ('es barato, compremos...');
 }

 else if ( dolar > 100 & dolar <= 150){
    document.write ( '<br>');
    document.write ( '<hr>');
    document.write ('es un precio razonable...');
}
else{
    document.write ( '<br>');
    document.write ( '<hr>');
    document.write ('carisimo, no llego...');  
}
*/
// if's anidados
/*
 if (dolar > 100 & dolar <=150) {
    document.write ( '<br>');
    document.write ( '<hr>');
    document.write ('es un precio razonable...');   
     if (dolar <= 100) {
        document.write ( '<br>');
        document.write ( '<hr>');
        document.write ('es barato, compremos...');    
    }
}
else{
        document.write ( '<br>');
        document.write ( '<hr>');
        document.write ('carisimo, no llego...');
}
*/

//verificar cual de los 3 numeros ingresados por el usuario es el mayor
/*
var nro1 = parseFloat(prompt('Ingrese el 1° numero'));
var nro2 = parseFloat(prompt('Ingrese el 2° numero'));
var nro3 = parseFloat(prompt('Ingrese el 3° numero'));

if (nro1 == nro2 || nro2 == nro3 || nro1 ==nro3) {
    alert ('Hay numeros iguales, no se puede efectuar la operacion');   
}
else{
if (nro1 > nro2 && nro1 > nro3) {
    alert('El numero 1 es el mayor de los 3');
}

if (nro2 > nro1 && nro2 > nro3) {
    alert('El numero 2 es el mayor de los 3');
}
if (nro3 > nro1 && nro3 > nro2) {
    alert('El numero 3 es el mayor de los 3');
}

}
*/

// ingresar nota de alumno, evaluar el valor aprobado, recupera o promociona

/*var nota = parseFloat (prompt('Ingrese la nota del alumno','valor entre 0 y 10'));
var nota_aprobado = 4;
var nota_promocion = 7;
if (nota >= 0 && nota <= 10 ) {
    if (nota < nota_aprobado){
        alert('recuperatorio');
    }
    else{
        if (nota < nota_promocion){
            alert ('aprobado!!!');
        }
        else{
            alert('promocionado!!!');
        }
    }
}
else{
    alert('valor nota invalido, intente nuevamente!!!');
}*/

// leer 2 numeros, si el nro1 > nro2 (sumar y restar), sino (producto y division)
/*var nro1 = parseFloat(prompt('Ingrese el 1° numero'));
var nro2 = parseFloat(prompt('Ingrese el 2° numero'));

if (nro1 > nro2 ) {
    var suma = nro1 + nro2;
    var resta = nro1 - nro2;
    alert (' suma =  '+ suma);
    alert (' resta =  '+ resta);
}
else {
    var producto = nro2 * nro1;
    alert (' multiplicacion =  '+ producto);
    
    if (nro1 == 0){
        alert('ERROR!!! NO SE PUEDE DIVIDIR POR CERO.');
    }

    else{
        var division = nro2 / nro1;
        alert (' division =  '+ division); 
    }
}
*/
//leer 2 numeros, elegir que operacion realizar (suma,resta,multiplicacion o division)
/*var nro1 = parseFloat(prompt('Ingrese el 1° numero'));
 var nro2 = parseFloat(prompt('Ingrese el 2° numero'));

 var operacion = parseInt(prompt('Seleccione la operacion:', '1-suma 2-resta 3-multiplicacion 4 division'));

 if (operacion >= 1 && operacion <= 4){
    if(operacion == 1){
      var suma = nro1 + nro2;
      alert ('Suma =  '+ suma);  
    }
    if(operacion == 2){
     var resta = nro1 - nro2;
      alert ('resta =  '+ resta);   
    }
    if(operacion == 3){
     var producto = nro1 * nro2;
      alert ('multiplicacion =  '+ producto);   
    }
    if(operacion == 4){
        if(nro2 == 0){
           alert ('no se puede dividir por cero. ERROR!!!'); 
        }
        else{
        var division = nro1 / nro2;
        alert ('division =  '+ division);
        }
         
    }
 }
 else{
     alert('ERROR!!! OPERACION NO PERMITIDA, INTENTE NUEVAMENTE');
 }

// sentencias condicionales multiples
//switch con rangos
//segundo ejemplo
/*var nro1 = parseFloat(prompt('Ingrese el 1° numero'));
  var nro2 = parseFloat(prompt('Ingrese el 2° numero'));
  var operacion = parseInt(prompt('Seleccione la operacion:', '1-suma 2-resta 3-multiplicacion 4 division'));

 if (operacion >= 1 && operacion <= 4){
     switch(operacion) {
         case 1:
           var suma = nro1 + nro2;
           alert ('Suma =  '+ suma);
           break;
        case 2:
            var resta = nro1 - nro2;
            alert ('resta =  '+ resta);
           break;
        case 3:
            var producto = nro1 * nro2;
            alert ('multiplicacion =  '+ producto);
           break;
        default;
         if(nro2 == 0){
           alert ('no se puede dividir por cero. ERROR!!!'); 
        }
        else{
        var division = nro1 / nro2;
        alert ('division =  '+ division);
        }
            break;
     }
     alert ('operacion realizada con exito');
 }
 else{
     alert('ERROR!!! OPERACION NO PERMITIDA, INTENTE NUEVAMENTE');
 }
//tercer ejemplo
/*var nro1 = parseFloat(prompt('Ingrese el 1° numero'));
  var nro2 = parseFloat(prompt('Ingrese el 2° numero'));
  var operacion = parseInt(prompt('Seleccione la operacion:', '1-suma 2-resta 3-multiplicacion 4 division'));

 if (operacion >= 1 && operacion <= 4){
     switch(operacion) {
         case 1:
           var suma = nro1 + nro2;
           alert ('Suma =  '+ suma);
           alert ('operacion realizada con exito');
           break;
        case 2:
            var resta = nro1 - nro2;
            alert ('resta =  '+ resta);
            alert ('operacion realizada con exito');
           break;
        case 3:
            var producto = nro1 * nro2;
            alert ('multiplicacion =  '+ producto);
            alert ('operacion realizada con exito');
           break;
        case 4: 
            if(nro2 == 0) {
            alert ('no se puede dividir por cero. ERROR!!!'); 
        }
        else{
        var division = nro1 / nro2;
        alert ('division =  '+ division);
        }
        alert ('operacion realizada con exito');
        break;
        default;
          alert('ERROR!!! OPERACION NO PERMITIDA, INTENTE NUEVAMENTE');
            break;
     }
     

//var nota = parseFloat (prompt('Ingrese la nota del alumno','valor entre 0 y 10'));
/*
switch (nota) {
    case 0:
    case 1:
        case 2:
            case 3:
        alert ('recuperatorio');
        break;
        case 4:
            case 5:
                case 6:
                    alert ('Aprobado');
                    case 7:
                        case 8:
                            case 9:
                                case 10: 
                                alert ('promocionado');

    default:
        alert ('EROR!! valor de nota no valido, intente nuevamente');
        break;
}
*/
/*if ( nota >=0 && nota <=10) {
    
}
switch (nota) {
    case 0:
    case 1:
    case 2:
    case 3:
    alert ('recuperatorio');
    break;
    case 4:
    case 5:
    case 6:
    alert ('Aprobado');
    default:
    alert ('promocionado');
    break;
}
}      
else { 
    alert ('ERROR!!! VALOR DE NOTA INVALIDO! INTENTE NUEVAMENTE');
}
*/

//USUARIO INGRESE EL VALO DEL MES Y YO LE INDICO
var mes = prompt ('ingrese el nombre del mes').toUpperCase();
switch (mes) {
    case 'ENERO':
        case 'FEBRERO':
            case 'MARZO':
                alert ('el mes esta en el 1° trimestre');      
    break;
    case 'ABRIL':
        case 'MAYO':
            case 'JUNIO':
                alert ('el mes esta en el 2° trimestre');      
    break;
    case 'JULIO':
        case 'AGOSTO':
            case 'SEPTIEMBRE':
                alert ('el mes esta en el 3° trimestre');      
    break;
    case 'OCTUBRE':
        case 'NOVIEMBRE':
            case 'DICIEMBRE':
                alert ('el mes esta en el 4° trimestre');      
    break;
    default:
        alert('Error!!! no es un nombre de mes valido');
        break;
}