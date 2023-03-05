/* const productos= [
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
]; */

let carrito = [];
let total = 0;
let subtotal=0;


function comprobarStock(unit){ //funcion para comprobar si existe el stock
    while( productos.find((product) => product.cantidad < unit)){
        alert("No hay suficiente stock");
        unit = parseInt(prompt("¿cuantas unidades quiere llevar?"));
        
  }
  return unit;
}
function subtotalProducto(precio,unidades){
    subtotal = precio * unidades;
    return subtotal;
}


function pintarfondo(item){
    const items = document.getElementById("item");
item.addEventListener("mouseover", ()=>{
    item.className = "rojo";
});
item.addEventListener("mouseout", ()=>{
    item.className = "blanco";
});  
}

tituloproducto.addEventListener("click",()=>{
    
})


/* let seleccion = prompt("¿Desea comprar algun producto? 1.si / 2.no");

while(seleccion !=1 && seleccion !=2 ){
    alert("Porfavor ingrese 1 si es si o 2 si es no");
    seleccion = prompt("¿Desea comprar algun producto? 1.si / 2.no");
}
if(seleccion == 1){
    alert("a continuacion nuestra lista de productos");
        let conjuntoproductos = productos.map((product) => 
        `${product.id}.  ${product.nombre} | $${product.precio}`
        );
        alert(conjuntoproductos.join(" \n"));
    }else if(seleccion==2){
    alert("eligio no comprar");
}

while(seleccion != 2){
    let producto = prompt("Ingrese el nombre del producto a comprar"); //ingresar nombre exacto
    let precio = 0;

    if( productos.find((product) => product.nombre === producto)){
        switch(producto){
            case "Teclado Alloy Core RGB Hyperx":
                precio = 9300;
                break;
            case "Mouse Gamer Redragon M988 RGB":
                precio = 3300;
                break;
            case "Auricular Inalambrico HYPERX CLOUD":
                precio = 10300;
                break;
            case "Monitor Gamer Level Up 24":
                precio = 12300;
                break;
            default:
                break;
                
        }
    let unidades = parseInt(prompt("¿cuantas unidades quiere llevar?"));

    unidades = comprobarStock(unidades);    //comprueba stock

    subtotalProducto(precio,unidades);  // calcula el subtotal del producto
    
    carrito.push({producto,unidades,precio,subtotal});  //agrega producto al array carrito
    }else{
        alert("No se encontro el producto");
    }
   
     total = carrito.reduce((acum,prod) => acum + prod.precio * prod.unidades,0);

     seleccion = prompt("¿Desea comprar otro producto? 1.si / 2.no");
}
if (carrito.length != 0){ // si el carrito tiene por lo menos un producto, muestra la compra
let conjuntocarrito = carrito.map((product) =>
 `${product.producto} x ${product.unidades} | $${product.precio} c/u  |   SUBTOTAL: $${product.subtotal}`
        );

 
     alert(`Productos elegidos: \n ${conjuntocarrito.join("\n")} \n \n TOTAL: $${total}`);
    } */


    // ------------------------------------
    /*
 let tituloproducto = document.getElementById("tituloproducto");
//titulo 1 
tituloproducto.addEventListener("mouseover", ()=>{
    console.log("dsd");
    tituloproducto.className = "rojo";
});
tituloproducto.addEventListener("mouseout", ()=>{
    console.log("dsd");
    tituloproducto.className = "blanco";
}); 
//recorrerlo con map o array
//titulo 1 
 let tituloproducto2 = document.getElementById("tituloproducto2");
tituloproducto2.addEventListener("mouseover", ()=>{
    tituloproducto2.className = "rojo";
});
tituloproducto2.addEventListener("mouseout", ()=>{
    tituloproducto2.className = "blanco";
});  
//titulo 1 
let tituloproducto3 = document.getElementById("tituloproducto3");
tituloproducto3.addEventListener("mouseover", ()=>{
    tituloproducto3.className = "rojo";
});
tituloproducto3.addEventListener("mouseout", ()=>{
    tituloproducto3.className = "blanco";
});  
 */
pintarfondo(tituloproducto6);
pintarfondo(tituloproducto5);
pintarfondo(tituloproducto4);
pintarfondo(tituloproducto3);
pintarfondo(tituloproducto2);
pintarfondo(tituloproducto);



//---------------------
//let cardtext = document.getElementsByClassName("card-text");
///console.log(cardtext);


/*   for (const card of cardtext){
    tituloproducto.addEventListener("mouseover", ()=>{
        card.className = "rojo";
    });
    tituloproducto.addEventListener("mouseout", ()=>{
        card.className = "blanco";
    });
};   */

/*  cardtext.forEach((card) => {
    console.log(card);
}); 
 */