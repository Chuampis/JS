/*
// ******************** DEFINICION DE VARIABLES ********************
const plan1 = {
    id:'1',
    nombre:'Plan 210',
    precio:20000
}

const plan2 = {
    // id:'2',
    nombre:'Plan 310',
    precio:35000
}

const plan3 = {
    id:'3',
    nombre:'Plan 410',
    precio:42000
}

const plan4 = {
    id:'4',
    nombre:'Plan 450',
    precio:58000
}

const plan5 = {
    id:'5',
    nombre:'Plan 510',
    precio:75000
}

let adultos = prompt(`Cuantos adultos son?`);
let menores = prompt(`Cuantos menores son?`);
let total = 0;
let preexistencias = prompt(`Tiene preexistencias? S/N`);

                        // ******************** FUNCION PARA APLICAR DESCUENTO EN CASO DE NO TENER PREEX ********************
function descuentoPorSanos(parametro){
    if(preexistencias==='N'){
        parametro = total*0.9;
    }
    else if(parametro==='S') {
        parametro = total;
    }
    return parametro;
}

                                        // ******************** CREO VARIABLE PARA EL SWITCH ********************
do {planSeleccionado = prompt(`
Seleccione el plan que desea cotizar
1. ${plan1.nombre} $${plan1.precio}
2. ${plan2.nombre} $${plan2.precio}
3. ${plan3.nombre} $${plan3.precio}
4. ${plan4.nombre} $${plan4.precio}
5. ${plan5.nombre} $${plan5.precio}
`);
} while ((planSeleccionado <= 0) || (planSeleccionado > 5))

                                // ******************** ARMO EL SWITCH CON LAS OPCIONES PARA EL USUARIO ********************
switch(planSeleccionado){
    case '1':
        alert(`el producto ${plan1.nombre} fue agregado al cotizador`)
        total+=plan1.precio*adultos + plan1.precio*0.75*menores;
        break;
    case '2':
        alert(`el producto ${plan2.nombre} fue agregado al cotizador`)
        total+=plan2.precio*adultos + plan2.precio*0.75*menores;
        break;
    case '3':
        alert(`el producto ${plan3.nombre} fue agregado al cotizador`)
        total+=plan3.precio*adultos + plan3.precio*0.75*menores;
        break;
    case '4':
        alert(`el producto ${plan4.nombre} fue agregado al cotizador`)
        total+=plan4.precio*adultos + plan4.precio*0.75*menores;
        break;
    case '5':
        alert(`el producto ${plan5.nombre} fue agregado al cotizador`)
        total+=plan5.precio*adultos + plan5.precio*0.75*menores;
        break;
    default:
        alert('La opción elegida no es valida')
}

                        // ******************** CREO PRECIO CON DESCUENTO y MUESTRO EL PRECIO SIN y CON DESCUENTO ********************
let precioConDescuento=descuentoPorSanos(total)
alert('El valor total del plan elegido sin descuento es $' + total);
alert('El valor total del plan con descuento por no tener preexistencias es de $' + precioConDescuento);

*/

/*
// CREO EL ARRAY PLANES

var planes = ['210','310','410','450','510']; // creo array planes
var precios =[1000, 4000, 7000, 10000, 18000]; // creo array precios
console.log(planes[3]); // muestro en consolas el elemento con indice 3 del array
document.write(planes); // muestro en el html los elementos del array
planes.unshift('025'); // agrega el plan 025 al inicio del array
document.write (planes); // muestra el array con el objeto agregado
document.write (planes.length);// muestra en el html la cantidad de datos del array
planes.pop(); // elimina el ultimo dato del array
document.write (planes); // muestra el array sin el ultimo elemento
planes.shift(); // elimina el primer dato del array
document.write (planes); // muestra el array planes sin el primer elemento
console.log(planes); // muestra en consola el array planes con los elementos restantes
planes.unshift('025'); // agrega el plan 025 al inicio del array
planes.push('510'); // agrega plan 510 al final del array
console.log(planes); // muestra el array con los planes agregados
planes.splice(2,2); // elimina 2 objetos del array, comenzando por el indice 2 (tercer objeto)
console.log(planes); // muestra el array con los objetos restantes
console.log(planes.join('-')) // muestra los elementos del array separados por el valor dado ('-')
const planesConPrecio = planes.concat(precios); // concatena el array planes con array precios
console.log(planesConPrecio); // muestra el array creado en la linea superior
*/



// CREO ARRAY PRODUCTOS

const productos = [
    { id: 0, categoria: 'Calzado', nombre:'Alpargatas Comfortable', precio: 2200, stock: 20},
    { id: 1, categoria: 'Calzado', nombre:'Sandalias DV', precio: 1750, stock: 10},
    { id: 2, categoria: 'Mates', nombre:'Mate Calabaza', precio: 1400, stock: 5},
    { id: 3, categoria: 'Mates', nombre:'Mate Plastico Geo', precio: 800, stock: 20},
    { id: 4, categoria: 'Mates', nombre:'Mate Cuero', precio: 2200, stock: 0},
    { id: 5, categoria: 'Bolsos', nombre:'Bolso Matero Chuna Negro', precio: 2200, stock: 0},
    { id: 6, categoria: 'Bolsos', nombre:'Bolso Matero Chuna Blanco', precio: 2200, stock: 15},
    { id: 7, categoria: 'Bolsos', nombre:'Bolso Matero Chuna Amarillo', precio: 2000, stock: 20},
    { id: 8, categoria: 'Accesorios Calzado', nombre:'Cordones Chatos', precio: 200, stock: 60},
    { id: 9, categoria: 'Accesorios Calzado', nombre:'Cordones Redondos', precio: 220, stock: 80},
    { id: 10, categoria: 'Accesorios Mate', nombre:'Despolvillador', precio: 900, stock: 10},
];
console.log(productos);
console.log(`se agrego ${productos[4].nombre} al carrito`);
document.write(`se agrego ${productos[4].nombre} al carrito`);


//  MUESTRO EN CONSOLA EL DETALLE DE LOS OBJETOS DEL ARRAY
for(const producto of productos) {
    console.log(producto.id);
    console.log(producto.categoria);
    console.log(producto.nombre);
    console.log(producto.precio);
    console.log(producto.stock);
}

// elimina 3 objetos del array, comenzando por el indice 7
productos.splice(7,3);

// Agrego un nuevo objeto al array productos
productos.push({id: 11, categoria: 'Cuchillos', nombre:'Cuchillo Criollo', precio: 1500, stock: 8});

//  MUESTRO EN CONSOLA EL DETALLE DE LOS OBJETOS DEL ARRAY
for(const producto of productos) {
    console.log(producto.id);
    console.log(producto.categoria);
    console.log(producto.nombre);
    console.log(producto.precio);
    console.log(producto.stock);
}

// const productosEncargados =[];
// let cantidad = 4;

// do{
//     let entrada = prompt('Que producto desea comprar?');
//     productosEncargados.push(entrada.toUpperCase());
//     console.log(productosEncargados.length);
// } while(productosEncargados.length != cantidad)
// const nuevaLista = productosEncargados.concat();
//     alert(nuevaLista.join('\n'));

