<template lang="pug">
  #app
    button(@click="single") single
    button(@click="double") double
    button(@click="betweenAdd") between add
    input(type="text" @click="single")
    button(@click="$loading.show()") show
</template>

<script>
export default {
  name: 'app',
  methods:{
    single(){
      this.$loading.show()
      setTimeout(()=>this.$loading.hide(), 5000)
    },
    double(){
      this.$loading.show()
      this.$loading.show()
      setTimeout(()=>{
        this.$loading.hide()
        this.$loading.hide()
      }, 5000)
    },
    betweenAdd(){
      const div = document.createElement('div')
      div.innerText = 'betweenAdd'
      this.$loading.show()
      setTimeout(()=>document.body.appendChild(div), 3000)
      setTimeout(()=>this.$loading.show(), 6000)
      setTimeout(()=>this.$loading.hide(), 9000)
      setTimeout(()=>this.$loading.hide(), 10000)
    }
  }
}
</script>
<style lang="stylus">
  #app
    width 500px
    height 500px
    outline 2px solid black
  *:focus
    outline 2px solid red
    border 2px solid red
    color red 
</style>