<template>
  <div v-show="isShow">
    <tab-bar>
      <tab-bar-item path="/home">
        <img slot="item-icon" src="@/assets/img/tabbar/home.svg" alt="">
        <img slot="item-icon-active" src="@/assets/img/tabbar/home_active.svg" alt="">
        <span slot="item-text">首页</span>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img slot="item-icon" src="@/assets/img/tabbar/category.svg" alt="">
        <img slot="item-icon-active" src="@/assets/img/tabbar/category_active.svg" alt="">
        <span slot="item-text">分类</span>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <img slot="item-icon" src="@/assets/img/tabbar/cart.svg" alt="">
        <img slot="item-icon-active" src="@/assets/img/tabbar/cart_active.svg" alt="">
        <span slot="item-text">购物车</span>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg" alt="">
        <span slot="item-text">我的</span>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from "@/components/common/tabBar/TabBar";
  import TabBarItem from "@/components/common/tabBar/TabBarItem";

  export default {
    name: "MainTabBar",
    components: {
      TabBar, TabBarItem
    },
    computed: {
      isShow() {
        // 用于当进入详情页时, 下边的消失
        return !this.$route.path.includes('/detail')
      }
    }
  }
</script>

<style scoped>

</style>
