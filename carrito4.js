let productosJSON=[];
$("#finalForm").hide();


class Product {
    constructor(obj) {
        this.id = parseInt(obj.id);
        this.imagen = obj.imagen;
        this.item = obj.item;
        this.precio = parseInt(obj.precio);
        this.stock = parseInt(obj.stock);
        this.usdPrice = obj.precio*201;
    }
}


if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}


////////////////////////////RENDER CARDS

function renderizarCarrito(){
    for (const producto of productosJSON){
        $("#productList").append(`<div id="item-carrito" data-id="${producto.id}" class="card col-4 m-2" style="width: 18rem;">
        <img src="${producto.imagen}" class="card-img-top item-imagen">
            <div class="card-body text-center">
                <h4 class="card-title item-titulo">${producto.item} </h4>
                <p class="card-text item-precio">$${producto.precio}</p>
                <div class="d-grid gap-2">
                <button id="btnbtn" class="btn btn-dark btn-buy"><i class="fa fa-shopping-cart text-white"></i> Comprar</button>
                </div>
            </div>
        </div>`);
    }
}


/////////////////////////////TRAER DATOS DEL JSON

const obtenerDatos = () => {
    const URLJSON = "carrito.json";
    $.get(URLJSON, function(respuesta,estado){
        if (estado=="success"){
            
            respuesta.forEach(product => {
                product = new Product(product);
                productosJSON.push(product);
            });
            console.log(productosJSON);
            renderizarCarrito();
        }
    });
    
}


////////////////////////////BOTON COMPRA FINAL

function purchaseClicked() {
    
    // alert("GRACIAS POR SU COMPRA")
    Swal.fire(
        'Gracias!',
        'por su compra',
        'success'
      )
    var cartItems = document.getElementsByClassName('items-carrito')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateTotal()
    
}


//////////////ELIMINAR DEL CARRO

function quitarItem(event) {
    var botonClicked = event.target
    botonClicked.parentElement.parentElement.parentElement.remove()
    updateTotal()
}

//////////////CAMBIO PRECIO EN EL RENDER FORZAR INTEGRAL

function cambiar(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }

    // checkear int
    if(!Number.isInteger(input.value)){
        // forzar int
        input.value = parseInt(input.value);
    }

    // bug fix
    if(parseInt(input.value) > parseInt(input.max)){
        // capear max
        input.value = input.max;
    }
    updateTotal()
}

///////////////////LEER STOCK JSON

function getStock(id){
    var index = productosJSON.findIndex(item => item.id == id);
    // console.log(index);
    return productosJSON[index].stock;
}




function anadirClick(event) {

    var button = event.target
    var shopItem = button.parentElement.parentElement

    var title = shopItem.getElementsByClassName('item-titulo')[0].innerText
    var price = shopItem.getElementsByClassName('item-precio')[0].innerText
    var id = shopItem.parentElement.getAttribute('data-id');
    var stock = getStock(id);

    var imageSrc = shopItem.parentElement.getElementsByClassName('item-imagen')[0].src
    agregarItemACarro(title, price, imageSrc, id, stock)
    updateTotal()
}


///////////////AGREGAR AL CARRO

function agregarItemACarro(title, price, imageSrc, id, stock) {
    var carrito = document.createElement('div')
    carrito.classList.add('carrito-item')
    var itemsCarrito = document.getElementsByClassName('items-carrito')[0]
    var nombreItems = itemsCarrito.getElementsByClassName('item-title')
    for (var i = 0; i < nombreItems.length; i++) {
        if (nombreItems[i].innerText == title) {
            // alert("Ya se encuentra en el carrito")
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'ese elemento ya está en el carrito!',
                
              })
            return
        }
    }
    var carritoContenido = `
    <div class="cartProduct row" data-id="${id}">
        <div class="item columna col-7">
            <img class="item-image" src="${imageSrc}" width="100" height="100">
            <span class="item-title">${title}</span>
        </div>
        <span class="precio columna col-2">${price}</span>
        <div class="cantidad columna col-3">
            <input class="cantidad-input" type="number" value="1" pattern="\d+" step="1" max="${stock}">
            <button class="btn btn-danger" type="button">QUITAR</button>
        </div>
    </div>`
    carrito.innerHTML = carritoContenido
    itemsCarrito.append(carrito)
    carrito.getElementsByClassName('btn-danger')[0].addEventListener('click', quitarItem)
    carrito.getElementsByClassName('cantidad-input')[0].addEventListener('change', cambiar)
}


/////////////////UPDATE ON CLICK DEL TOTAL


function updateTotal() {
    var contenedorCarrito = document.getElementsByClassName('items-carrito')[0]
    var filasCarrito = contenedorCarrito.getElementsByClassName('carrito-item')
    var total = 0
    // console.log(filasCarrito);
    for (var i = 0; i < filasCarrito.length; i++) {
        var filaCarro = filasCarrito[i]
        var precioItem = filaCarro.getElementsByClassName('precio')[0]
        // console.log(filaCarro.getElementsByClassName('precio')[0]);
        var cantidadItem = filaCarro.getElementsByClassName('cantidad-input')[0]
        var price = parseFloat(precioItem.innerText.replace('$', ''))
        var quantity = cantidadItem.value
        total = total + (price * quantity)
    }
    if (total==0){$("#finalForm").slideUp(800);
    } else { $("#finalForm").slideDown(800);
    };
    
    document.getElementsByClassName('total-carrito-precio')[0].innerText = '$' + total
}



function ready() {

    obtenerDatos();

    var sacarDelCarrito = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < sacarDelCarrito.length; i++) {
        var button = sacarDelCarrito[i]
        button.addEventListener('click', quitarItem)
    }

    var cantidadInputs = document.getElementsByClassName('cantidad-input')
    for (var i = 0; i < cantidadInputs.length; i++) {
        var input = cantidadInputs[i]
        input.addEventListener('change', cambiar)
    }
    
    $(document).on("click", ".btn-buy", anadirClick);
    
    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)

    }

    
////////////////VALIDACION EMAIL

    function validarEmail(){
        var form = document.getElementById("finalForm");
        var email = document.getElementById("email").value;
        var text = document.getElementById("text");
        var pattern = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    
        if (email.match(pattern)){
            form.classList.add("valid");
            form.classList.remove("invalid");
            text.innerHTML=" "
        } else {
            form.classList.remove("valid");
            form.classList.add("invalid");
            text.innerHTML="Ingrese una dirección de correo válida"
        }
    }