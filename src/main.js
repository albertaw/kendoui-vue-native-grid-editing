import Vue from 'vue'
import App from './App.vue'
import '@progress/kendo-theme-default/dist/all.css'
import { Grid, GridToolbar } from '@progress/kendo-vue-grid'

Vue.component('Grid', Grid)
Vue.component('grid-toolbar', GridToolbar)

new Vue({
  el: '#app',
  render: h => h(App)
})