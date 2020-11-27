import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app', true)

window.onload = function() {
  var randomValue = Math.floor((Math.random() * 6) + 1);
  var theme;

  if (randomValue == 1) {
    theme = "steel";
  } else if (randomValue == 2) {
    theme = "cyber";
  } else if (randomValue == 3) {
    theme = "sun";
  } else if (randomValue == 4) {
    theme = "poison";
  } else if (randomValue == 5) {
    theme = "burn";
  } else if (randomValue == 6) {
    theme = "ice";
  }
  document.body.setAttribute('data-theme', theme);
};
