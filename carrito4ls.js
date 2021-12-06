var clienteCarrito =[];

document.getElementById("btn-purchase").addEventListener("click", salvarCarrito);


function salvarCarrito(){

    var sNombre = document.getElementById("nombre").value,
        sEmail = document.getElementById("email").value,
        sTelefono = document.getElementById("telefono").value,
        sCalle = document.getElementById("calle").value,
        sAltura = document.getElementById("altura").value,
        sPiso = document.getElementById("piso").value,
        sDepto = document.getElementById("depto").value,
        sMonto = document.getElementsByClassName("total-carrito-precio")[0].innerText
        
addCliente(sNombre, sEmail, sTelefono, sCalle, sAltura, sPiso, sDepto, sMonto);

}

function addCliente(pNombre, pEmail, pTelefono, pCalle, sAltura, sPiso, sDepto, pMonto){
    var comprador={
        nombre : pNombre,
        email : pEmail,
        telefono : pTelefono,
        calle : pCalle,
        altura : sAltura,
        piso : sPiso,
        depto : sDepto,
        monto : pMonto
        
    }
    localStorage.setItem("cliente", JSON.stringify(comprador));
    console.log(comprador);
    clienteCarrito.push(comprador);
    console.log(localStorage.getItem("cliente"));
}


///////////////////salvar al local storage el carrito