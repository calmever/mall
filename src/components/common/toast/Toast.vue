<template>
  <div class="toast" :class="{ show: !isShow }">
    <span>{{ message }}</span>
  </div>
</template>

<script>
  export default {
    name: "Toast",
    // props: {
    //   // message: {
    //   //   type: String,
    //   //   default: ''
    //   // },
    //   isShow: {
    //     type: Boolean,
    //     default: false
    //   }
    // },
    data() {
      return {
        message: '',
        isShow: false
      }
    },
    methods: {
      show(message = '默认文字', duration = 1500) {
        this.message = message
        this.isShow = true
        setTimeout(() => {
          this.isShow = false
          // this.message = ''
        }, duration)

      }
    }
  }
</script>

<style scoped>

  .toast {
    position: fixed;
    z-index: 999;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 8px 10px;
    display: block;
    color: #fff;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, .6);
    transition: all .5s;
    opacity: 1;
  }

  .show {
    opacity: 0;
  }

</style>
