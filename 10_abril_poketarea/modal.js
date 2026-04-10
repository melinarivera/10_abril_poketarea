export class ModalPokemon {
  constructor(container) {
    this.container = container;
  }

  abrir(pokemon) {
    this.container.innerHTML = `
      <div class="modal-fondo">
        <div class="modal">
          <button class="cerrar" id="btnCerrar">&times;</button>
          <h2>${pokemon.name}</h2>
          <p>Pokémon #${pokemon.id}</p>
          <img
            src="${pokemon.sprites.other["official-artwork"].front_default}"
            alt="${pokemon.name}"
          />
        </div>
      </div>
    `;

    const btnCerrar = document.getElementById("btnCerrar");
    const fondo = this.container.querySelector(".modal-fondo");

    btnCerrar.addEventListener("click", () => this.cerrar());

    fondo.addEventListener("click", (event) => {
      if (event.target.classList.contains("modal-fondo")) {
        this.cerrar();
      }
    });
  }

  cerrar() {
    this.container.innerHTML = "";
  }
}