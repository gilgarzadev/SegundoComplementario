
const invitados = [
    "Patricio",
    "Veronica",
    "Alondra",
    "Ignacio",
    "Camila",
    "Andrea",
    "Gilberto",
    "Ivan",
    "Guillermo"
];

alert("Hola Jessica, esta es tu lista de invitados:");
    for(let i = 0; i < invitados.length; i++ ){
        alert(invitados[i]);
}

let nuevoInvitado = prompt("Deseas agregar otro invitado?");
alert(invitados.push(nuevoInvitado));

alert(invitados)

const eliminar = (nombre) => {
    let index = invitados.indexOf(nombre)

    if (index != -1) {
        invitados.splice(index, 1)
    }
}

eliminar('Pedro')






