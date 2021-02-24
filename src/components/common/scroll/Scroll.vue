<template>
  <div>
    <slot></slot>
    <div v-show="isScrollShow" class="show">
      <img src="../../../assets/img/load/load.gif" alt="">
    </div>
  </div>
</template>

<script>
  import { debounce } from "@/static/tools";

  export default {
    name: "Scroll",
    props: {
      pullUpLoad: {
        type: Boolean,
        default: false
      },
      isScrollShow: {
        type: Boolean,
        default: false
      }
    },
    mounted() {
      window.addEventListener('scroll', debounce(this.load, 300))
      window.addEventListener('scroll', this.top)
    },
    methods: {
      load() {
        // console.log('===========')
        // 上拉加载更多
        if (this.pullUpLoad) {
          let scrollTop = document.documentElement.scrollTop  // 滚动区域的高度
          let clientHeight = document.documentElement.clientHeight // 当前屏幕的可视高度
          let scrollHeight = document.documentElement.scrollHeight
          if (scrollHeight - scrollTop - clientHeight < 50) {
            this.$emit('pullingUp')
          }
        }
      },
      /**
       *  显示到达顶部的按钮
       */
      top() {
        let scrollTop = document.documentElement.scrollTop  // 滚动区域的高度
        // console.log(scrollTop)
        this.$emit('scroll', scrollTop)
      },
      // 固定到某个位置
      // scrollTo() {
      // }
      // // 防抖函数
      // debounce(func, delay) {
      //   let timer = null
      //   return function (...args) {
      //     if (timer) clearTimeout(timer)
      //     timer = setTimeout(() => {
      //       func.apply(this, args)
      //     }, delay)
      //   }
      // }
    }
  }
</script>

<style scoped>

  .show {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 80px;
    overflow: hidden;
  }

</style>
