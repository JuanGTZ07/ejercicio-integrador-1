var formulario = document.getElementById("formulario");

function calcular() {
    var total = 0;
    var paquetes = formulario.paquetes.value;
    var analisis = formulario.analisis.value;
    var prepa = false;
    var pago = formulario.pago.value;
    var fac = formulario.FAC.value;
    var mensaje = document.getElementById("mensaje");
    var mensaje2 =document.getElementById("mensaje2");

    if (paquetes == 850) total += 850;
    else if (paquetes == 700) total += 700;
    else if (paquetes == 2000) total += 2000;
    else if (paquetes == 5000)total += 5000;

    if (analisis == "sinconsulta") total += 200;
    else if (analisis == "conconsulta") total += 1000;

    document.querySelectorAll('input[type="checkbox"]').forEach(prep => {
        if (prep.checked) {
            total +=Number(prep.dataset.precio);
            prepa = true;
        }
    } );

    if (pago == "efectivo") {
        total += 0;
    }
    else if (pago == "tarjeta") {
        total += total * 0.06;
    }
    else if (pago == "transferencia") {
        total += total * 0.03;
    }

    if (fac == "si") {
        var iva = total * 0.16;
        total += iva;
        mensaje.textContent = " su IVA es $" + iva.toFixed(2);
    }
    else {
        mensaje.textContent = "";
    }


    document.getElementById('total').innerText = "total $" + total.toFixed(2);
    
    mensaje2.textContent = "Gracias por tu interes";
}