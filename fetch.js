const tabla = document.querySelector(`#lista-compras tbody`);

function cargarRegistro(){
    fetch(`registrocompras.json`)
      .then(respuesta => respuesta.json()) //indicamos el formato en que se desea obtener la informacion 
      .then(registro => {
        registro.forEach(registro => {
            const row = document.createElement(`tr`);
            row.innerHTML += `
            <td>${registro.producto}</td>
            <td>${registro.monto}</td>
            <td>${registro.tipodecompra}</td>
            <td>${registro.estadodelenvio}</td>
            `;
        });
      }) // acá mostramos la información 
}

cargarRegistro();

