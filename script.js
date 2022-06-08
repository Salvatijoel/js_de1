//Simulador para calcular el precio de entradas de cine en función de descuentos.
function calcularPrecio (precioPelicula, cantidadEntradas, porcentajeDescuento) {
    //Se calculan el descuento
    let descuento = (precioPelicula * porcentajeDescuento) / 100;
    //Se aplica el descuento al precio
    let precioConDescuento = precioPelicula - descuento;
    //se retorna el precio final con el descuento aplicado y se multiplica por la cantidad de entradas
    return (precioConDescuento * cantidadEntradas)
}

let pelicula = parseFloat(prompt(
    `Ingrese el precio de la entrada que desea comprar:
                3D = 800
                2D = 600`));
let cantidad = parseInt(prompt("Ingrese la cantidad de entradas que desea comprar"));
let descuento = parseInt(prompt('Si verá la película un Miércoles escriba 50, de lo contrario escriba 0'))

//llamamos a la funcion y luego mostramos el precio final por alert
let precioFinal = calcularPrecio(pelicula, cantidad, descuento);
alert("El precio total de tu compra es $" + precioFinal);
alert("¡Que disfrutes la función!");