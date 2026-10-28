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