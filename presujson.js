var datoCliente =[];



function addCliente(pNombre, pContacto, bebidaUno, bebidaDos, bebidaTres){
    var newCliente={
        nombre : pNombre,
        contacto : pContacto,
        bebidaA : bebidaUno,
        bebidaB : bebidaDos,
        bebidaC : bebidaTres,
        
    }
    localStorage.setItem("cliente", JSON.stringify(newCliente));
    console.log(newCliente);
    datoCliente.push(newCliente);
    console.log(localStorage.getItem("cliente"));

    Swal.fire(
        'Excelente!',
        'estamos en contacto a la brevedad',
        'success'
      )
}


///////////////cargar formulario a local storage parte dos
