export function pintarCards(listaPokemon, contenedor) {
  contenedor.innerHTML = listaPokemon
    .map((pokemon) => {
      const partes = pokemon.url.split("/");
      const id = partes[6];

      const imagen = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

      return `
        <article class="card" data-url="${pokemon.url}">
          <img src="${imagen}" alt="${pokemon.name}" />
          <h3>${pokemon.name}</h3>
          <p>#${id}</p>
        </article>
      `;
    })
    .join("");
}