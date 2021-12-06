let personasJSON=[];
$("#somos").hide();
$("#carousel").hide();


// icono copita 

$(document).ready(function() {
    $("#bars").click(function() {
        $("ul").toggleClass("show");
    });
});

// boton servicios navbar

let scroll = document.getElementById("but1");
scroll.addEventListener("click" , (e) => {
    document.documentElement.scrollTo(0, 1100)
});



// parrafo + img somos

$("#muestraSomos").click(function() {
    $("#somos").slideToggle(300, function() {
        if ($("#muestraSomos").html() == "¿Quiénes somos?") {
            $("#muestraSomos").html("Ocultar");
            $("#muestraSomos").css('background', 'black');
            $("#muestraSomos").css('color', 'gold');
        } else {
            $("#muestraSomos").html("¿Quiénes somos?");
            $("#muestraSomos").css('background', 'goldenrod');
            $("#muestraSomos").css('color', 'black');
        }
    document.documentElement.scrollTo(0, 1000);
    });
});


// carousel de videos

$("#muestraMedia").click(function() {
    $("#carousel").slideToggle(600, function() {
        if ($("#muestraMedia").html() == "Videos") {
            $("#muestraMedia").html("Ocultar");
            $("#muestraMedia").css('background', 'black');
            $("#muestraMedia").css('color', 'gold');
        } else {
            $("#muestraMedia").html("Videos");
            $("#muestraMedia").css('background', 'goldenrod');
            $("#muestraMedia").css('color', 'black');
        }
    document.documentElement.scrollTo(0, 1800);
    });
});


// render ajax imagenes somos (array personasJSON en top)

function renderizarPersonas(){
    for (const persona of personasJSON){
        $("#personas").append(`<div class="text-dark">
        <img src=${persona.foto}  width="355" height="355">
        <h4>${persona.nombre} </h4>
        <p>${persona.puesto}</p>
        </div>`);
    }
}

const obtenerJsonDatos = () => {
    const URLJSON = "api.json";
    $.get(URLJSON, function(respuesta,estado){
        if (estado=="success"){
            personasJSON=respuesta;
            console.log(personasJSON);
            renderizarPersonas();
        }
    });
    
}


obtenerJsonDatos();

