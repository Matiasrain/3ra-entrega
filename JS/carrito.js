modalContainer.style.display = "none";
    const pintarCarrito = ()=>{
    modalContainer.innerHTML = "";
    modalContainer.style.display="flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = ("modal-header");
    
    modalHeader.innerHTML = `
    <h1 class="modal-header-title"> Carrito </h1>

    `;
    modalContainer.append(modalHeader);

    const modalbutton = document.createElement("h1");
    modalbutton.innerText = "X";
    
    modalbutton.className = "modal-header-button";

    modalbutton.addEventListener("click",()=>{
        modalContainer.style.display = "none";
    })

    modalHeader.append(modalbutton);




    carrito.forEach((product)=>{
        let carritoContent = document.createElement("div");
        carritoContent.className = "modal-content";
        carritoContent.innerHTML = `
        <img src="${product.img}">
        <h3>${product.nombre} </h3>
        <p> $${product.precio}  </p>
      
        <p> Cantidad: ${product.cantidad}</p>
        
        <p> Subtotal: $${product.cantidad * product.precio}</p>
        <span class="eliminar-producto">❌ </span>
        `;

        modalContainer.append(carritoContent);

        let eliminar = carritoContent.querySelector(".eliminar-producto");
        eliminar.addEventListener("click",()=>{
            eliminarProducto(product.id);  
        });
        
    });



    const total = carrito.reduce((acum,prod) => acum + prod.precio*prod.cantidad,0); 
   
    const totalCompra = document.createElement("div");
    totalCompra.className = "totalCompra"
    totalCompra.innerHTML = `Total a pagar: ${total}$`;
    modalContainer.append(totalCompra);

};

verCarrito.addEventListener("click",pintarCarrito);

//ELIMINAR PRODUCTO FUNCION
const eliminarProducto = (id)=>{
    const buscarId = carrito.find((prod) => prod.id === id); //busca id
   /*  console.log(buscarId); */

    carrito = carrito.filter((carritoId)=>{
        return carritoId !== buscarId; // me retorna todos los prod que el id sea distinto a buscarId

    });
    carritoContador();
    guardarLocal();
    pintarCarrito();
   
};


const carritoContador = () =>{
    cantCarrito.style.display = "block";

    const carritoLength = carrito.length;
    localStorage.setItem("CarritoLength", JSON.stringify(carritoLength));

    cantCarrito.innerText = JSON.parse(localStorage.getItem("CarritoLength"));
};

carritoContador();