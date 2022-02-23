alert("¡Bienvenido a la tienda AsPhone!")

/*Primer Producto*/
const productoA = ["iPhone 7 Plus", 300]

/*Segundo Producto*/
const productoB = ["iPhone X", 500]

/*Variables de cantidad comprada y precio total*/
let cantidadComprada7Plus;
let cantidadCompradaX;
let precioTotalVenta = 0


let productos = parseInt(prompt("Estos son nuestros productos: \n1- " + productoA[0] + "\n2- " + productoB[0]))

/*Precio total de la compra*/
function precioTotal(cantidadComprada, precio){
	precioTotalVenta = cantidadComprada * precio
	alert("El precio total es: $US " + precioTotalVenta)
	alert("¡Gracias por su compra! -Asphone-")
}

/*Si coloca numero incorrecto en el menu*/
while (productos != 1 && productos != 2){
		alert("No tenemos esa opcion, vuelva a seleccionar los productos.")
		productos = parseInt(prompt("Estos son nuestros productos: \n1- " + productoA[0] + "\n2- " + productoB[0]))
}

if (productos == 1) {
	cantidadComprada7Plus = parseInt(prompt("El precio del iphone 7 plus es de $US " + productoA[1] + ". Ingrese la cantidad de iphone que desea comprar: "))
	precioTotal(cantidadComprada7Plus, productoA[1])

}
else if (productos == 2) {
	cantidadCompradaX = parseInt(prompt("El precio del iphoneX es de $US " + productoB[1] + ". Ingrese la cantidad de iphone que desea comprar: "))
	precioTotal(cantidadCompradaX, productoB[1])

}




