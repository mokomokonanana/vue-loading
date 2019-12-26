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
    z-index 1
    top 0
    bottom 0
    left 0
    right 0
    position fixed
    background-color #0000004D
    >div
      position absolute
      left 50%
      top 50%
      transform translate(-50%, -50%)
      width 100px
      height 100px
      background-color #00000000
      >span
        width 50%
        height 20px
        position absolute
        top calc(50% - 10px)
        transform-origin 100% 50%
        left 0
        &::before
          content ''
          display block
          width 20px
          height 20px
          border-radius 50%
          background-color #333
          position absolute
          left 0
          top 50%
          transform translateY(-50%)
        &:nth-child(1)::before
          animation spinner 1s linear 0s infinite
        for num in (2..8)
          &:nth-child({num})
            transform rotate((45*(num - 1))deg)
            &::before 
              animation spinner 1s linear (-0.125*(num - 1))s infinite
@keyframes spinner {
  0% {
    width: 20px;
    height: 20px;
    opacity: 1;
  }
  100% {
    width: 6px;
    height: 6px;
    opacity: .2;
    margin-left: 7px;
  }
}
</style>