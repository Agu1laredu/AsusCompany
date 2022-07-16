const tabla = document.querySelector(`#lista `);

function cargarRegistro(){
    fetch(`registrocompras.json`)
      .then(respuesta => respuesta.json()) //indicamos el formato en que se desea obtener la informacion 
      .then(registro => {
        registro.forEach(registro => {
            const row = document.createElement(`tr`);
            row.innerHTML += `
            <td class="td">${registro.producto}</td>
            <td class="td">${registro.monto}</td>
            <td class="td">${registro.tipodecompra}</td>
            <td class="td">${registro.estadodelenvio}</td>
            `;
            tabla.appendChild(row);
        });
      }) // acá mostramos la información 
}

cargarRegistro();

