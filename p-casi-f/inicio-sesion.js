/*
5 seguridad minimo

1) longitud
2) si Mayusculas
3) si minusculas
4) si numeros
5) no espacios en blanco

*/

console.log('Ta funcionando la pass'); 
console.log('desde inicion sesion'); 

$(document).ready(function(){
    $("#ininicio-sesion").submit(function(ejole){
        ejole.preventDefault();
        
        var nombre = $("#password").val();
        var correo = $("#email").val();


        var msj = "";
        let enviar = false;

        // 1) dejo el espacio y no se contabiliza
        if(nombre.length < 6 || nombre.length > 10){
            msj += "La password debe tener entre 6 y 10 caracteres";
            enviar = true;
        }

        let largo = nombre.length;
        let contadorMayus = 0;
        let contadorNumeros = 0;
        let contadorMinus = 0
        let contadorVacio = 0
        
        for (let j = 0; j < largo; j++){            
            let letra = nombre.charAt(j);
            if (isNaN(letra)) {
                let mayus = letra.toUpperCase();
                let minus = letra.toLowerCase()
                if (letra === mayus) {
                    contadorMayus++
                }
                if (letra === minus) {
                    contadorMinus++
                }
            }
            // contador numeros
            else{
                // console.log('Es un numero la letra: '+ letra);
                contadorNumeros++

            }
            
        }

        // 2) si Mayuscula

        if (contadorMayus < 1) {
            msj += '<br>Debe tener almenos una letra <b>Mayuscula</b>'
            enviar = true;
        }

        // 3) si minusculas
        // console.log(nombre.toLowerCase());

        if (contadorMinus < 1) {
            msj += '<br>Debe tener almenos una letra <b>Minuscula</b> '
            enviar = true;
        }

        // 4) si es un numero

        if (contadorNumeros < 1) {
            msj += '<br>Debe tener almenos un <b>Numero</b> '
            enviar = true;
        }

        
        // 5) no espacios en blanco

        for (let i = 0; i < nombre.length; i++) {
            let cambio = nombre.charAt(i);
            if (cambio == ' ') {
                contadorVacio ++
            }
            
        }
        if (contadorVacio >= 1) {
            msj += '<br>No puede haber espacios en <b>Blanco</b>'
            enviar = true;
        }
        


        // Acumulacion mensajes
        
        let clavePass = false
        if(enviar){
            $("#envioChecker").html(msj);
            
        }
        
        
        else{
            $("#envioChecker").html("");
            
            clavePass = true

        }
        



        if ((correo === 'tucorreo@dominio.com') & (nombre === 'tuCorreo1') & clavePass) {

            $("#iniciar-sesion").attr('href', 'ya-registrado.html');

            
        }
        
    });
    




});
