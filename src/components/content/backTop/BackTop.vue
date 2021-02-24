<template>
  <div class="back_top" @click="backClick">
    <img src="@/assets/img/common/top.png" alt="">
  </div>
</template>

<script>
  export default {
    name: "BackTop",
    mounted() {
      // window.addEventListener('scroll', this.show)
    },
    methods: {
      backClick() {
        // 回到顶部
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        window.pageYOffset = 0
      },
      // show() {
      //   let top = document.documentElement.scrollTop
      //   console.log(top)
      // }
    }
  }
</script>

<style scoped>

  .back_top {
    position: fixed;
    right: 15px;
    bottom: 60px;
    z-index: 200;
  }

  .back_top img {
    width: 43px;
  }

</style>
