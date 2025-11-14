var formulario = document.getElementById("formulario");

function calcular() {
    var total = 0;
    var paquetes = formulario.paquetes.value;
    var analisis = formulario.analisis.value;
    var prepa = false;
    var pago = formulario.pago.value;

    if (paquetes == 850){
        total += 850;
    }
    else if (paquetes == 700) {
        total += 700;
    }
    else if (paquetes == 2000) {
        total += 2000;
    }
    else if (paquetes == 5000) {
        total += 5000;
    }
    else {
        alert("Escoja un paquete");
    }

    if (analisis == "sinconsulta") {
        total += 200;
    }
    else if (analisis == "conconsulta") {
        total += 1000;
    }
    else {
        alert("Escoja un analisis");
    }

    document.querySelectorAll('input[type="checkbox"]').forEach(prep => {
        if (prep.checked) {
            total +=Number(prep.dataset.precio);
            prepa = true;
        }
    } );

    if (!prepa) {
        alert("escoja una preparacion");
    }

    if (pago == "efectivo") {
        total += 0;
    }
    else if (pago == "tarjeta") {
        total += total * 0.6;
    }
    else if (pago == "transferencia") {
        total += total * 0.16;
    }
    else {
        alert("Seleccione su tipo de pago0");
    }



    document.getElementById('total').innerText = total;
    
    alert("Gracias por tu interes");
}