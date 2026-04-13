import { obtenerListaPokemon, obtenerDetallePokemon } from "./api.js";
import { pintarCards } from "./cards.js";
import { ModalPokemon } from "./modal.js";

const contenedorCards = document.getElementById("contenedorCards");
const modalContainer = document.getElementById("modalContainer");
const mensajeCarga = document.getElementById("mensajeCarga");

const modal = new ModalPokemon(modalContainer);

let listaCompletaPokemon = [];

obtenerListaPokemon()
  .then((listaPokemon) => {
    listaCompletaPokemon = listaPokemon;

    pintarCards(listaCompletaPokemon, contenedorCards);
    mensajeCarga.style.display = "none";

    activarEventosCards();
    activarClickPagina();
  })
  .catch((error) => {
    console.error("Error al cargar los Pokémon:", error);
    mensajeCarga.textContent = "Error al cargar los Pokémon";
  });

function activarEventosCards() {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    card.addEventListener("click", (event) => {
      event.stopPropagation();

      const url = card.dataset.url;

      obtenerDetallePokemon(url)
        .then((pokemon) => {
          modal.abrir(pokemon);
        })
        .catch((error) => {
          console.error("Error al cargar detalle del Pokémon:", error);
        });
    });
  });
}

function activarClickPagina() {
  document.body.addEventListener("click", (event) => {
    const hizoClickEnCard = event.target.closest(".card");
    const hizoClickEnModal = event.target.closest(".modal");
    const hizoClickEnCerrar = event.target.closest(".cerrar");

    if (hizoClickEnCard || hizoClickEnModal || hizoClickEnCerrar) {
      return;
    }

    mostrarPokemonAleatorio();
  });
}

function mostrarPokemonAleatorio() {
  if (listaCompletaPokemon.length === 0) return;

  const indiceAleatorio = Math.floor(Math.random() * listaCompletaPokemon.length);
  const pokemonAleatorio = listaCompletaPokemon[indiceAleatorio];

  obtenerDetallePokemon(pokemonAleatorio.url)
    .then((pokemon) => {
      modal.abrir(pokemon);
    })
    .catch((error) => {
      console.error("Error al cargar Pokémon aleatorio:", error);
    });
}