const contenedor = document.getElementById('producto-contenedor');

productos.forEach( producto => {
    let informacion = document.createElement('div');
    informacion.classList.add('card');
    informacion.innerHTML = `
    <h3>${producto.nombre}</h3>
    <img src="${producto.img}">
    <p>${producto.descripcion}</p>
    <p>${producto.precio}</p>
    <p>${producto.talle}</p>
    <p>${producto.cantidad}</p>
    <button>COMPRAR</button>
    `;
    contenedor.appendChild(informacion);
});