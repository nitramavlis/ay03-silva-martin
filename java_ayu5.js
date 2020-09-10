$(document).ready(function(){
    $("#boton1").click(function(){
        $("#opinion").text("Lo digo en serio");
    });
    var escondido = false;
    $("#boton2").click(function(){ 
        if (escondido == true) {
            escondido = false;
            $("#pata").show();
        } 
        else {
            escondido= true;
            $("#pata").hide();
        }  
    });
    $("#sobre").mouseenter(function(){
        $("#cabecera").css("background-color","red");
    });
    $("#sobrer").mouseleave(function(){
        $("#cabecera").css("background-color","rebeccapurple");
    });
});
