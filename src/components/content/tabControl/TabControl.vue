<template>
  <div class="tab_control">
    <div v-for="(item, index) in titles"
         :key="item"
         :class="{ active: index === currentIndex }"
         @click="itemClick(index)">
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props: {
      titles: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index
        this.$emit('tabClick', index)
      }
    }
  }
</script>

<style scoped>

  .tab_control {
    display: flex;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 15px;
  }

  .tab_control div {
    flex: 1;
  }

  .tab_control span {
    padding: 5px;
  }

  .active {
    color: var(--color-high-text);
  }

  .active span {
    border-bottom: 3px solid var(--color-high-text);
  }

</style>
