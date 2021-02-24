<template>
  <div class="tab_bar_item" @click="itemClick">
    <div v-show="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-show="isActive">
      <slot name="item-icon-active"></slot>
    </div>
    <div  :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      path: String,
      activeColor: {
        type: String,
        default: '#ff5777'
      }
    },
    data() {
      return {
        // isActive: true
      }
    },
    computed: {
      isActive() {
        return this.$route.path.includes(this.path)
      },
      activeStyle() {
        return this.isActive ? { color: this.activeColor } : {}
      }
    },
    methods: {
      itemClick() {
        this.$router.push(this.path)
      }
    }
  }
</script>

<style scoped>
  .tab_bar_item {
    flex: 1;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    height: 49px;
    text-align: center;
    font-size: 14px;
  }

  .tab_bar_item img {
    padding-bottom: 2px;
    width: 22px;
    vertical-align: middle;
  }
</style>
