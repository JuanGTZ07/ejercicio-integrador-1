var formulario = document.getElementById("formulario");

function calcular() {
    var total = 0;
    var paquetes = formulario.paquetes.value;

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
        alert("Escoja un paquete")
    }

    document.getElementById('total').innerText = total;
    
    alert("Gracias por tu interes");
}