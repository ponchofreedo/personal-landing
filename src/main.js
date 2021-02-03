import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app', true)

window.onload = function() {
  var randomValue = Math.floor((Math.random() * 8) + 1);
  var theme;

  if (randomValue == 1) {
    theme = "steel";
  } else if (randomValue == 2) {
    theme = "psychic";
  } else if (randomValue == 3) {
    theme = "electric";
  } else if (randomValue == 4) {
    theme = "poison";
  } else if (randomValue == 5) {
    theme = "fire";
  } else if (randomValue == 6) {
    theme = "ice";
  } else if (randomValue == 7) {
    theme = "ghost";
  } else if (randomValue == 8) {
    theme = "water";
  }
  document.body.setAttribute('data-theme', theme);
};

// where it will inject
const injectPokemon = document.getElementById("pokeHook");

// call the api and fetch a pokemon
const fetchPokemon = () => {
  console.log("Gotta catch 'em all!");

  // set the universe
  const randomPokemonNumber = Math.floor((Math.random() * 151) + 1);

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

// convert the api data into html
const displayPokemon = (pokemon) => {
  injectPokemon.innerHTML = '<a rel="noreferrer" style="color: inherit!important" target="_blank" href="https://bulbapedia.bulbagarden.net/wiki/' + pokemon.name +'">' + pokemon.name + '</a>';
}

// do the thing
fetchPokemon();
