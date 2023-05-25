document.querySelector('#btnSubmit').addEventListener('click', datosAutomovil);
imprimirTabla();

function datosAutomovil (){
	var guardarAutomovilVehiculo = document.querySelector('#vehiculo').value,
			guardarAutomovilMarca = document.querySelector('#marca').value,
			guardarAutomovilModelo = document.querySelector('#modelo').value;

			agregarDatosAutomovil(guardarAutomovilVehiculo,guardarAutomovilMarca, guardarAutomovilModelo);
			imprimirTabla();
}

function imprimirTabla() {
	var lista = obtenerListaAutomovil(),
	tbody = document.querySelector('#tablaAutomovil tbody');

	tbody.innerHTML = '';

	for (var i = 0; i < lista.length; i++) {
			var row = tbody.insertRow(i),
					vehiculoCelda = row.insertCell(0),
					marcaCelda = row.insertCell(1);
					modeloCelda = row.insertCell(2);
			
			vehiculoCelda.innerHTML = lista[i].vehiculo;
			marcaCelda.innerHTML = lista[i].marca;
			modeloCelda.innerHTML = lista[i].modelo;

			tbody.appendChild(row);
	}
}
