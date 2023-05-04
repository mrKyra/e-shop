/*
5 seguridad minimo

1) longitud
2) si Mayusculas
3) si minusculas
4) si numeros
5) no espacios en blanco

*/

console.log('desde j-registro'); 

$(document).ready(function(){
    $("#f-registro").submit(function(ejole){
        ejole.preventDefault();
        // Variable para ver si esta ok el registro

        let nombrePass = false
        let clavePass = false
        
        

        // validacion nombre sin espacios en blanco

        var realNombre = $("#nombre").val();

        var nombreMsj = ""
        let nombreEnviar = false;
        let nombreContador = 0

        

        for (let i= 0; i < realNombre.length ; i++) {


            let nLetra = realNombre.charAt(i);

            if (nLetra === ' ') {
                nombreContador++

            }
            
        }

        if (nombreContador > 0) {
            nombreMsj += '<br>Nombre Invalido, no puede tener<b> Espacios</b> '
            nombreEnviar = true;
        }
        if (nombreContador === 0) {
            $("#v-nombre").html("Nombre Valido");
            nombrePass = true;
        }

        if(nombreEnviar){
            $("#v-nombre").html(nombreMsj);
            
        }




        
        
        
        // comprobacion password
        var nombre = $("#password").val();
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
        
        if(enviar){
            $("#envioChecker").html(msj);
            // $("#warnings").html(`<p><i>hola ${msj}</i></p>`);
            // $("#botonsito").hide();
            
        }
        
        // let  = 'juan' 
        
        else{
            $("#envioChecker").html("Contraseña Valida");

            clavePass = true;
            
            
            


        }

        // hacer que el boton efectivamente lo lleve hay
        if (nombrePass & clavePass) {
            // registrado
            $('#botonsito').removeAttr('hidden');
            $("#botonsito").attr("hidden",false);
            $("#registrado").html('Registrado');
            $("#cambiar-img").attr('src', './img/comprobado.png');
            $("#my_image").attr("src","second.jpg");

            $("#botonsito").show();

            $("#agregar-nombre").html(`<p>Felicidades, <b>${realNombre}</b>, ya te has registrado</p>`);
            
        }
        
        
    });
    // Toast Trigger
    const toastTrigger = document.getElementById('liveToastBtn')
    const toastLiveExample = document.getElementById('liveToast')

    if (toastTrigger) {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    toastTrigger.addEventListener('click', () => {
        toastBootstrap.show()

    })
    }




});
