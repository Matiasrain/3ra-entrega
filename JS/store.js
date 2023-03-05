
const productos= [
    { id: 1, nombre: "Teclado RGB Hyperx", precio: 9300,cantidad:1, stock:10, subtotal:0,img:"Images/teclado.jpg"},
    { id: 2, nombre: "Mouse Redragon RGB", precio: 3300,cantidad:1, stock:10, subtotal:0,img:"Images/mouse.jpeg"},
    { id: 3, nombre: "Auricular bt Hyperx ", precio: 10300,cantidad:1, stock:10, subtotal:0,img:"Images/auricularbt.jpg"},
    { id: 4, nombre: "Monitor 24", precio: 12300, stock:10,cantidad:1, subtotal:0,img:"Images/monitor.jpg"},
    { id: 5, nombre: "SSD 240GB", precio: 12300, stock:10,cantidad:1, subtotal:0,img:"Images/ssd.jpg"},
    { id: 6, nombre: "SSD 480GB", precio: 12300, stock:10,cantidad:1, subtotal:0,img:"Images/ssd480.jpg"},
    { id: 7, nombre: "Ram 8gb Hyperx", precio: 12300, stock:10,cantidad:1, subtotal:0,img:"Images/ram8.jpg"},
    { id: 8, nombre: "Ram 16gb Hyperx", precio: 12300, stock:10,cantidad:1, subtotal:0,img:"Images/ram16.jpg"},
    { id: 9, nombre: "Auriculares Razer", precio: 12300, stock:10,cantidad:1, subtotal:0,img:"Images/auricrazer.jpg"},
    { id: 10, nombre: "Mouse Razer", precio: 12300, stock:10,cantidad:1, subtotal:0,img:"Images/mouserazer.jpg"},
    { id: 11, nombre: "Joystick PC Razer", precio: 12300, stock:10,cantidad:1, subtotal:0,img:"Images/joystickpc.jpg"},
    { id: 12, nombre: "Parlante bt Speaker", precio: 12300, stock:10,cantidad:1, subtotal:0,img:"Images/parlantebt.jpg"},
    { id: 13, nombre: "Ram 8gb Hyperx", precio: 12300, stock:10,cantidad:1, subtotal:0,img:"Images/ram8.jpg"},
];

let carrito = JSON.parse(localStorage.getItem("Carrito")) || [];

const shopContent = document.getElementById("shopContent"); //seria todo el contenido de la pag
const verCarrito = document.getElementById("verCarrito"); //boton carrito
const modalContainer = document.getElementById("modal-container"); //div del carrito
const cantCarrito = document.getElementById("cantCarrito"); //cont carrito

productos.forEach((product) => {    // por cada producto, genero una tarjeta div en el html
    let content = document.createElement("div");
    content.className="card";
    content.innerHTML = `
    <img src="${product.img}">
    <h3>${product.nombre}</h3>
    <p class="price">${product.precio} $ </p>
    `;

    shopContent.append(content);

    let comprar = document.createElement("button");
    comprar.innerText = "Comprar";
    comprar.className = "comprar";
    content.append(comprar);

    comprar.addEventListener("click",()=>{ //evento click para meter producto al carrito
        
        const repetido = carrito.some((prodRepetido)=>
            prodRepetido.id === product.id);
            if(repetido === true){
                carrito.map((prod)=>{
                    if(prod.id === product.id){
                        prod.cantidad++;
                    }
                });
            }else{

        carrito.push({
            id:product.id,
            img:product.img,
            nombre:product.nombre,
            precio:product.precio,
            cantidad:product.cantidad,
            
        });
        carritoContador();
        guardarLocal();
    }
    
       
    });
});

//set item
const guardarLocal = ()=>{
    localStorage.setItem("Carrito",JSON.stringify(carrito));
};

