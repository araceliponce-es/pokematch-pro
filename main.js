import { shuffleCards, fetchPokemonData } from "./helpers.js";

// 1. Constantes y Variables de Estado
const TOTAL_PAIRS = 6;

let moves = 0;
let matchedPairs = 0;
let hasFlippedCard = false;
let lockBoard = false;
let firstCard = null;
let secondCard = null;

// Array base con 6 parejas de Pokémon (12 elementos en total)
// const pokemonList = [
//   'pikachu', 'pikachu',
//   'charmander', 'charmander',
//   'bulbasaur', 'bulbasaur',
//   'squirtle', 'squirtle',
//   'jigglypuff', 'jigglypuff',
//   'snorlax', 'snorlax'
// ];
// console.log("Array original:", [...pokemonList]);

// const shuffledPokemon = shuffleCards(pokemonList);

// console.log("Array barajado (Fisher-Yates):", shuffledPokemon);

// Prueba de carga asíncrona de un Pokémon específico
async function testApiConnection() {
  console.log("[PokéMatch Pro] Consultando la PokéAPI...");
  const pokemon = await fetchPokemonData('pikachu');
  if (pokemon) {
    console.log("Pokémon obtenido con éxito:", pokemon);
  }
}

testApiConnection();


// 2. Selección de elementos del DOM
const movesElement = document.getElementById('moves-count');
const pairsElement = document.getElementById('pairs-count');

function updateBoardUI() {
  if (movesElement) movesElement.textContent = moves;
  if (pairsElement) pairsElement.textContent = `${matchedPairs} / ${TOTAL_PAIRS}`;
}

// 3. Temporizador por Consola. imprime cada segundo el tiempo transcurrido en la consola mediante setInterval y permite ser detenido con clearInterval:
let secondsElapsed = 0;
let timerInterval = null;

function startConsoleTimer() {
  console.log("[PokéMatch Pro] Iniciando temporizador por consola...");
  timerInterval = setInterval(() => {
    secondsElapsed++;
    console.log(`⏱️ Tiempo transcurrido: ${secondsElapsed}s`);
  }, 1000);
}

function stopConsoleTimer() {
  clearInterval(timerInterval);
  console.log(`⏹️ Temporizador detenido a los ${secondsElapsed} segundos.`);
}

// Llamado a las funciones al final
startConsoleTimer();
updateBoardUI();
