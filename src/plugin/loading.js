import Loading from './Loading.vue'

export default{
  install (Vue, options={}) {
    Vue.component('Loading', Loading)
    const vm = new (Vue.extend(Loading))(options).$mount()
    Vue.prototype.$loading = {
      show: function() {
        vm.show()
      },
      hide: function(){
        vm.hide()
      }
    }
  }
}