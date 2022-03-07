                                    // ******************** DEFINICION DE VARIABLES ********************
const plan1 = {
    id:"1",
    nombre:"Plan 210",
    precio:20000
}

const plan2 = {
    id:"2",
    nombre:"Plan 310",
    precio:35000
}

const plan3 = {
    id:"3",
    nombre:"Plan 410",
    precio:42000
}

const plan4 = {
    id:"4",
    nombre:"Plan 450",
    precio:58000
}

const plan5 = {
    id:"5",
    nombre:"Plan 510",
    precio:75000
}

let adultos = prompt(`Cuantos adultos son?`);
let menores = prompt(`Cuantos menores son?`);
let total = 0;
let preexistencias = prompt(`Tiene preexistencias? S/N`);

                        // ******************** FUNCION PARA APLICAR DESCUENTO EN CASO DE NO TENER PREEX ********************
function descuentoPorSanos(parametro){
    if(preexistencias==="N"){
        parametro = total*0.9;
    }
    else if(parametro==="S") {
        parametro = total;
    }
    return parametro;
}

                                        // ******************** CREO VARIABLE PARA EL SWITCH ********************
const planSeleccionado=prompt(`
Seleccione el plan que desea cotizar
1. ${plan1.nombre} $${plan1.precio}
2. ${plan2.nombre} $${plan2.precio}
3. ${plan3.nombre} $${plan3.precio}
4. ${plan4.nombre} $${plan4.precio}
5. ${plan5.nombre} $${plan5.precio}
`);

                                // ******************** ARMO EL SWITCH CON LAS OPCIONES PARA EL USUARIO ********************
switch(planSeleccionado){
    case "1":
        alert(`el producto ${plan1.nombre} fue agregado al cotizador`)
        total+=plan1.precio*adultos + plan1.precio*0.75*menores;
        break;
    case "2":
        alert(`el producto ${plan2.nombre} fue agregado al cotizador`)
        total+=plan2.precio*adultos + plan2.precio*0.75*menores;
        break;
    case "3":
        alert(`el producto ${plan3.nombre} fue agregado al cotizador`)
        total+=plan3.precio*adultos + plan3.precio*0.75*menores;
        break;
    case "4":
        alert(`el producto ${plan4.nombre} fue agregado al cotizador`)
        total+=plan4.precio*adultos + plan4.precio*0.75*menores;
        break;
    case "5":
        alert(`el producto ${plan5.nombre} fue agregado al cotizador`)
        total+=plan5.precio*adultos + plan5.precio*0.75*menores;
        break;
    default:
        alert("La opción elegida no es valida")
}

                        // ******************** CREO PRECIO CON DESCUENTO y MUESTRO EL PRECIO SIN y CON DESCUENTO ********************
let precioConDescuento=descuentoPorSanos(total)
alert("El valor total del plan elegido sin descuento es $" + total);
alert("El valor total del plan con descuento por no tener preexistencias es de $" + precioConDescuento);