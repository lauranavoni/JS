 var nombre = prompt ('Ingrese el nombre de usuario: ');

 var fecha = new Date();

 var dia = fecha.getDay();

 switch (dia) {
     case 1:
        nombredia = 'Lunes'
        alert ('Hola  '+ nombre +  ' , que tengan un buen  '+ nombredia);
        break;
     case 2:
        nombredia = 'Martes'
        alert ('Hola  '+ nombre +  ' , que tengan un buen  '+ nombredia);
        break;
    case 3:
        nombredia = 'Miercoles'
        alert ('Hola  '+ nombre +  ' , que tengan un buen  '+ nombredia);
        break;
    case 4:
        nombredia = 'Jueves'
        alert ('Hola  '+ nombre +  ' , que tengan un buen  '+ nombredia);
        break;
    case 5:
        nombredia = 'Viernes'
        alert ('Hola  '+ nombre +  ' , que tengan un buen  '+ nombredia);
        break;
    case 6:
        nombredia = 'Sabado'
        alert ('Hola  '+ nombre +  ' , que tengan un buen  '+ nombredia);
        break;
     default:
         alert ('Hola  '+ nombre + )
         break;
 }