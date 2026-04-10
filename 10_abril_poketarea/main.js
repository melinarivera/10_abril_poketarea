import { obtenerListaPokemon, obtenerDetallePokemon } from "./api.js";
import { pintarCards } from "./cards.js";
import { ModalPokemon } from "./modal.js";

const contenedorCards = document.getElementById("contenedorCards");
const modalContainer = document.getElementById("modalContainer");
const mensajeCarga = document.getElementById("mensajeCarga");
const buscador = document.getElementById("buscador");

const modal = new ModalPokemon(modalContainer);

let listaCompletaPokemon = [];

obtenerListaPokemon()
  .then((listaPokemon) => {
    listaCompletaPokemon = listaPokemon;

    pintarCards(listaCompletaPokemon, contenedorCards);
    mensajeCarga.style.display = "none";

    activarEventosCards();
  })
  .catch((error) => {
    console.error("Error al cargar los Pokémon:", error);
    mensajeCarga.textContent = "Error al cargar los Pokémon";
  });

function activarEventosCards() {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    card.addEventListener("click", () => {
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

buscador.addEventListener("input", () => {
  const texto = buscador.value.toLowerCase();

  const pokemonFiltrados = listaCompletaPokemon.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(texto),
  );

  pintarCards(pokemonFiltrados, contenedorCards);
  activarEventosCards();
});