/**
 * Algoritmo de barajado Fisher-Yates
 * @param {Array} array - Array de elementos a desordenar
 * @returns {Array} El mismo array mezclado aleatoriamente
 */
export function shuffleCards(array) {
  for (let i = array.length - 1; i > 0; i--) {
    // Generar índice aleatorio entre 0 e i
    const j = Math.floor(Math.random() * (i + 1));

    // Intercambiar elementos usando desestructuración
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}



/**
 * Obtiene los datos de un Pokémon desde la PokéAPI
 * @param {string|number} pokemonId - Nombre o ID del Pokémon
 * @returns {Object|null} Objeto con el nombre y la URL del sprite o null si hay error
 */
export async function fetchPokemonData(pokemonId) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }

    const data = await response.json();

    return {
      name: data.name,
      image: data.sprites.front_default
    };
  } catch (error) {
    console.error("No se pudo recuperar el Pokémon:", error);
    return null;
  }
}