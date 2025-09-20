const template = document.getElementById("card-template");
const contenedor = document.getElementById("contenedor");
const imagen = document.getElementById('miImagen');

const productos = [
    { titulo: "Laptop", desc: "16GB RAM",price:"100000",image: "./Img/Laptop.jpg" },
    { titulo: "Mouse", desc: "Inalámbrico",price:"500000",image:"./Img/mouse.webp" },
    { titulo: "Teclado", desc: "Inalámbrico",price:"100000",image: "./Img/teclado.avif"},
    { titulo: "Celular", desc: "Amoled",price:"1200000",image: "./Img/iphone.jpg" },
    { titulo: "Audifonos", desc: "Inalámbrico",price:"50000",image:"./Img/audifonos.jpg" },
];

productos.forEach(producto => {
    const clon = template.content.cloneNode(true);
    clon.querySelector(".title").textContent = producto.titulo;
    clon.querySelector(".desc").textContent = producto.desc;
    clon.querySelector(".price").textContent = producto.price;
    clon.querySelector("img").src = producto.image;

    contenedor.appendChild(clon);
});
