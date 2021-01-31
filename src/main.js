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
