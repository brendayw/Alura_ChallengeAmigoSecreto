// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    const nombreAmigo = document.getElementById('amigo').value.trim();
    if (nombreAmigo === "") {
        alert("Debe ingresar un nombre");
        return;
    }
    amigos.push(nombreAmigo);
    document.getElementById('amigo').value = "";
    actualizarLista();
}

function actualizarLista() {
    const amigosLista = document.getElementById('listaAmigos');
    amigosLista.innerHTML = "";
    amigos.forEach(function(amigo) {
        const itemLista = document.createElement("li");
        itemLista.textContent = amigo;
        amigosLista.appendChild(itemLista);
    })
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear");
        return;
    }
    const randomIndex = Math.floor(Math.random() * amigos.length);
    const amigoElegido = amigos[randomIndex];

    const resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = "";

    const itemResultado = document.createElement("li");
    itemResultado.textContent = `¡El amigo secreto es: ${amigoElegido}!`;
    resultadoLista.appendChild(itemResultado);

}