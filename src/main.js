import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app', true)

window.onload = function() {
  var randomValue = Math.floor((Math.random() * 4) + 1);
  var theme;

  if (randomValue == 1) {
    theme = "blue";
  } else if (randomValue == 2) {
    theme = "green";
  } else if (randomValue == 3) {
    theme = "orange";
  } else if (randomValue == 4) {
    theme = "yellow";
  }
  document.body.setAttribute('data-theme', theme);
};

// helper functions
function capFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// all the randomnum generators
const randomPokemonNumber = Math.floor((Math.random() * 251) + 1);
const randomTimeStamp = Math.floor((Math.random() * 60) + 1);
const randomRoute = Math.floor((Math.random() * 48) + 1); // gen 1+2 routes only

// all the pokeballs
let pokeBalls = ['Pok&eacute;', 'Great', 'Ultra', 'Master', 'Safari', 'Fast', 'Level', 'Lure', 'Heavy', 'Love', 'Friend', 'Moon', 'Sport'];
let randomPokeBall = pokeBalls[Math.floor(Math.random() * pokeBalls.length)];

// leaving comment here for later
// when i want to make improvements to hack around, see if i can leverage
// route data or location data from pokeapi instead of doing random num gen

// where things will inject
const injectPokemon = document.getElementById("pokemon");
const injectTimeStamp = document.getElementById("timestamp");

// call the api and fetch a pokemon
const fetchPokemon = () => {
  console.log("Gotta catch 'em all!");

  // pokeAPI url
  const url = "https://pokeapi.co/api/v2/pokemon/"+ randomPokemonNumber;

  // fetch and convert response to json
  fetch(url)
    .then(res => {
       return res.json();
    })
    .then(data => {
      const pokemon = {
        name: data.name,
        id: data.id
      };
      displayPokemon(pokemon);
    })
}

// add the random timestamp
const displayTimeStamp = () => {
  injectTimeStamp.innerHTML = randomTimeStamp + ' min ago';
}

// convert the api data into html
const displayPokemon = (pokemon) => {
  injectPokemon.innerHTML = '<a rel="noreferrer" style="color: inherit!important" target="_blank" href="https://bulbapedia.bulbagarden.net/wiki/' + pokemon.name +'">' + capFirstLetter(pokemon.name) + '</a>. Route ' + randomRoute + '. Captured with ' + randomPokeBall + ' Ball.';
}

// do the things
fetchPokemon();
displayTimeStamp();
