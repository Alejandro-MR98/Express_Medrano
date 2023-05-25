var AutomovilDatos = [];
document.querySelector('#btnInfo').addEventListener('click', longitud);

function agregarDatosAutomovil(automovilVehiculo, automovilMarca, automovilModelo) {
    
    var NuevoAutomovil = {
        vehiculo: automovilVehiculo,
        marca: automovilMarca,
        modelo: automovilModelo
    };

    //console.log(NuevoAutomovil);
    console.log(JSON.stringify(NuevoAutomovil));
    AutomovilDatos.push(NuevoAutomovil);
}

function obtenerListaAutomovil() {
    return AutomovilDatos;
}

function longitud() {
    console.log(AutomovilDatos.length); 
    document.getElementById("info").value = AutomovilDatos.length;
}
