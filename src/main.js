import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')

window.onload = function() {
    var randomValue = Math.floor((Math.random() * 9) + 1);
    var theme;
  
    if (randomValue == 1) {
      theme = "fire";
    } else if (randomValue == 2) {
      theme = "ice";
    } else if (randomValue == 3) {
      theme = "electric";
    } else if (randomValue == 4) {
      theme = "poison";
    } else if (randomValue == 5) {
      theme = "psychic";
    } else if (randomValue == 6) {
      theme = "ghost";
    } else if (randomValue == 7) {
      theme = "steel";
    } else if (randomValue == 8) {
      theme = "water";
    } else if (randomValue == 9) {
      theme = "fighting";
    }
    document.body.setAttribute('data-theme', theme);
};

