<template lang="pug">
  .loading(v-if="count > 0")
    div
      span(v-for="n in 8")
</template>

<script>
  export default {
    data() {
      return {
        count: 0
      }
    },
    created(){
      document.addEventListener('keydown', this.keydown, {passive: false})
    },
    destroyed(){
      document.removeEventListener('keydown', this.keydown)
    },
    methods: {
      keydown(e){
        if(this.count < 1) return
        e.stopPropagation()
        e.preventDefault()
        return false
      },
      show() {
        document.body.appendChild(this.$el) // 一番最後に表示
        this.count++
      },
      hide(){
        if(this.count > 0) this.count--
      }
    }
  }
</script>

<style scoped lang="stylus">
  .loading
    top 0
    bottom 0
    left 0
    right 0
    position fixed
    background-color #0000004D
    display flex
    align-items center
    justify-content center
    > div
      animation spinner 1s steps(8, end) infinite
      @keyframes spinner
        0% 
          transform rotate(0deg)
        100%
          transform rotate(360deg)
      > span
        position absolute
        height 100px
        &:before
          content ''
          display block
          border-radius 50%
          background-color #333
        for num in (0..8)
          &:nth-child({num + 1})
            transform translate(-50%, -50%) rotate((360deg / 8) * num)
            &:before
              width ((20px - 6px) / 7 * num + 6px)
              height @width
              margin-top ((20px - @width) / 2)
              opacity ((1 - 0.2) / 7 * num) + 0.2
</style>