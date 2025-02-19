// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
document.addEventListener("DOMContentLoaded", function () {
    const nombreInput = document.getElementById("amigo");
    const listaAmigos = document.getElementById("listaAmigos");
    const resultado = document.getElementById("resultado");

    let amigos = [];
  
    window.agregarAmigo = function () {
      const nombre = nombreInput.value.trim();
      if (nombre === "") {
        alert("Ingresa un nombre válido");
        return;
      }
      amigos.push(nombre);
      actualizarLista();
      nombreInput.value = "";
    };
  
    window.sortearAmigo = function () {
      if (amigos.length === 0) {
        alert("Agrega al menos un nombre antes de sortear");
        return;
      }
      const seleccionado = amigos[Math.floor(Math.random() * amigos.length)];
      resultado.innerHTML = `<li>Amigo secreto: ${seleccionado}</li>`;
      resultado.style.display = "block";
    };
  
    function actualizarLista() {
      listaAmigos.innerHTML = "";
      amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
      });
    }
  });
  