var boton = document.getElementsByTagName('button');

//alert(boton.length);

for (let i = 0; i < boton.length; i++){
    boton[i].onclick = function (){mostrar(this.innerHTML)};
}

function mostrar(param) {
   //alert('el color es: '+ param); 
   document.getElementById('container').innerHTML = 'el color es: '+ param ;
   switch (param) {
       case 'azul':
           document.getElementById('container').style.backgroundColor = 'blue';
           document.getElementById('container').style.color = 'white';
           break;
           case 'rojo':
            document.getElementById('container').style.backgroundColor = 'red';
            document.getElementById('container').style.color = 'white';
            break;
            case 'verde':
                document.getElementById('container').style.backgroundColor = 'green';
                document.getElementById('container').style.color = 'white';
                break;
           
       default:
        document.getElementById('container').style.backgroundColor = 'pink';
        document.getElementById('container').style.color = 'black';
           break;
   }
}
var total = 0;
var numeros = [1,2,3,4,5];
var numeros =[];
numeros [0]= parseInt(document.getElementById('nro1').value);
numeros [1]= parseInt(document.getElementById('nro2').value);

numeros.forEach(function (param) {
    total+= param
});

document.getElementById(resultado1).innerHTML= total;