 var rol = prompt('Ingrese su rol de usuario');
 if (rol == 'admin' || rol=='recursos') {
    var password = prompt('Ingrese su clave');

    if (password == '1234') {
        
    var usuario = prompt('Ingrese su nombre de usuario');

        //document.write(' Hola  ' +  usuario + 'Bienvenido a nuestra App');

        document.querySelector('#container').innerHTML = '<h3 style="color:red;"> Hola   '  +  usuario + ' Bienvenido a nuestra App </h3>';

        var contenido_titulo2 = document.getElementById('titulo_acceso');
        contenido_titulo2.innerHTML = '<h2 style="font-family:verdana; color: green">Bienvenidos al curso de JS desde 0- ACCESO PERMITIDO </h2>'


    } else {
        
        alert('Password incorrecta.');

        location.href = 'error.html';
    }
}

else{
    alert('Rol inexistente.');

        location.href = 'error.html';
}