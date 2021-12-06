$("#text1").hide();
$("#text2").hide();
$("#text3").hide();


/////////////////////////////calculos precios barra


function silver() {
    var may = parseInt(document.getElementById("mayores").value);
    var men = parseInt(document.getElementById("menores").value);
    document.getElementById("resultado").innerHTML = ((may * 750) + (men * 600));
}

function gold() {
    var may = parseInt(document.getElementById("mayores").value);
    var men = parseInt(document.getElementById("menores").value);
    document.getElementById("resultado").innerHTML = ((may * 950) + (men * 600));
}

function black() {
    var may = parseInt(document.getElementById("mayores").value);
    var men = parseInt(document.getElementById("menores").value);
    document.getElementById("resultado").innerHTML = ((may * 1100) + (men * 600));
}

function empty() {
    resultado.innerText = " ";
}


///////////////cargar formulario a local storage parte uno


document.getElementById("btnSalvarCliente").addEventListener("click", salvarCliente);


function salvarCliente(){
    var sNombre = document.getElementById("txtNombre").value,
        sContacto = document.getElementById("txtContacto").value,
        sBeb1 = document.getElementById("text1").value,
        sBeb2 = document.getElementById("text2").value,
        sBeb3 = document.getElementById("text3").value
        
addCliente(sNombre, sContacto, sBeb1, sBeb2, sBeb3);

}

function bebida1() {
    var select = document.getElementById('beb1');
    var option = select.options[select.selectedIndex];

    document.getElementById('text1').value = option.text;
}
function bebida2() {
    var select = document.getElementById('beb2');
    var option = select.options[select.selectedIndex];
    
    document.getElementById('text2').value = option.text;
}
function bebida3() {
    var select = document.getElementById('beb3');
    var option = select.options[select.selectedIndex];
    
    document.getElementById('text3').value = option.text;
}
bebida1();
bebida2();
bebida3();