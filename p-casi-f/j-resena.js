/*
5 seguridad minimo

1) longitud
2) si Mayusculas
3) si minusculas
4) si numeros
5) no espacios en blanco

*/

console.log('desde resenas'); 

$(document).ready(function(){
    $("#resena").submit(function(ejole){
        ejole.preventDefault();
        // Variable para ver si esta ok el registro

        let nombrePass = false
        let clavePass = false
        
        // https://

        // validacion nombre sin espacios en blanco

        var realNombre = $("#linkCompra").val();
        var precio = $("#precio").val();
        let precioPass = false;

        if (precio > 0) {
            precioPass = true;
            $("#v-precio").html("Precio Valido");

        }else{
            $("#v-precio").html("Precio Invalido, tine que se<b> mayor a 0</b>");
        }

        let link = ''

        var nombreMsj = ""
        let nombreEnviar = false;
        let nombreContador = 0
        let comprobar = 'https://'
        

        for (let i= 0; i < 8 ; i++) {


            let letra = realNombre.charAt(i);

            link += letra
            if (letra === ' ') {
                nombreContador++
            }

            
            
        }
        console.log(link)

        if (link === comprobar) {
            $("#v-linkCompra").html("Link Valido");
            // nombreMsj = "Link Valido"
            nombrePass = true;

            
        }else{
            nombreMsj += '<br>Link Invalido, no es <b> https:// </b>'
            nombreEnviar = true;

        }

        let otroContador = 0


        for (let i= 0; i < realNombre.length ; i++) {


            let letra = realNombre.charAt(i);

            link += letra
            if (letra === ' ') {
                otroContador++
            }

            
            
        }



        if (otroContador > 0) {
            nombreMsj += '<br>Link Invalido, no puede tener<b> Espacios</b> '
            nombreEnviar = true;
        }

       
        if(nombreEnviar){
            $("#v-linkCompra").html(nombreMsj);
            
        }

       
        if (nombrePass & precioPass) {
            // registrado
            $("#subir-resena").attr('href', 'ya-registrado.html');

            
            
        }
        
        
    });
    




});
