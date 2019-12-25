import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

const root = new Vue({
  render: function (h) { return h(App) },
})


// loading
import loading from '@/plugin/loading'
Vue.use(loading, {parent: root})

root.$mount('#app')