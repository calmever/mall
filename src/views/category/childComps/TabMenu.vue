<template>
  <div class="cate_tab_menu">
    <div class="cate_tab_menu_item"
         v-for="(item, index) in categoryList"
         :key="index"
         :class="{ active: index === currentIndex }"
         @click="itemClick(index)">
      <p>{{ item }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabMenu",
    props: {
      categoryList: {
        type: Array,
        default(){
          return []
        }
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    created() {
      // console.log(this.categoryList)
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

  .cate_tab_menu {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: center;
    width: 28vw;
    height: 90vh;
    font-size: 14px;
    font-weight: 500;
    background-color: rgb(247, 247, 247);
    border-right: 1px solid #eee;
    transition: font-weight .3s;

    /*overflow-y: scroll;*/
    /*--webkit-overflow-scrolling: touch;*/
  }

  .cate_tab_menu_item {
    display: flex;
    width: 100%;
    /*height: 8vh;*/
  }

  .cate_tab_menu_item p {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 6vh;
  }

  .active {
    /*color: #fff;*/
    position: relative;
    font-weight: 550;
    color: var(--color-high-text);
    background-color: #fff;
  }

  .active::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 3px;
    height: 100%;
    background-color: orange;
  }

</style>
