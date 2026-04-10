export function pintarCards(listaPokemon, contenedor) {
  contenedor.innerHTML = listaPokemon
    .map((pokemon) => {
      const partes = pokemon.url.split("/");
      const id = partes[6];

      const imagenOficial = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
      const imagenDefault = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

      return `
        <article class="card" data-url="${pokemon.url}">
          <img
            src="${imagenOficial}"
            alt="${pokemon.name}"
            onerror="
              if (!this.dataset.fallback) {
                this.dataset.fallback='true';
                this.src='${imagenDefault}';
              } else {
                this.closest('.card').style.display='none';
              }
            "
          />
          <h3>${pokemon.name}</h3>
        </article>
      `;
    })
    .join("");
}