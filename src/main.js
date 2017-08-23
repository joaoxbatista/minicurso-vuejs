import Vue from 'vue'
import App from './App.vue'

require('bootstrap-sass/assets/stylesheets/_bootstrap.scss')
require('./assets/sass/main.sass')

new Vue({
  el: '#app',
  render: h => h(App)
})
