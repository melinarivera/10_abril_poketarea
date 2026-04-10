export function obtenerListaPokemon() {
  return fetch("https://pokeapi.co/api/v2/pokemon?limit=1302")
    .then((response) => response.json())
    .then((data) => data.results);
}

export function obtenerDetallePokemon(url) {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data);
}