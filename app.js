// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let AmigosDisponibles = []; 

document.getElementById("amigo").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        agregarAmigo();
    }
});


function agregarAmigo() {
    
    let inputAmigo = document.getElementById("amigo");
    let nombre = inputAmigo.value.trim(); 

   
    if (nombre === "") {
        alert("Por favor, inserte un nombre valido.");
        return;
    }

    
    amigos.push(nombre);
AmigosDisponibles.push(nombre)
    actualizarLista();
    inputAmigo.value = "";
}
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 

    amigos.forEach((amigo) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista. Agrega al menos uno antes de sortear.");
        return;
    }

    if (AmigosDisponibles.length === 0) {
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = `<li> ¡Todos los amigos han sido sorteados! </li>`;
        return;
    }

   
    let indiceAleatorio = Math.floor(Math.random() * AmigosDisponibles.length);

    
    let amigoSorteado = AmigosDisponibles.splice(indiceAleatorio, 1)[0];

    
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li> ¡El amigo sorteado es: <strong>${amigoSorteado}</strong>! </li>`;
}