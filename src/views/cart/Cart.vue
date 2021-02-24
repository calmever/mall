<template>
  <div class="cart">
    <!-- 导航 -->
    <nav-bar class="nav_bar">
      <div slot="center">购物街({{ shopLen }})</div>
    </nav-bar>
    <!-- 商品列表 -->
    <cart-list/>
    <!-- 商品汇总 -->
    <cart-bottom-bar/>
  </div>
</template>

<script>
  import NavBar from "@/components/common/navBar/NavBar";

  import CartList from "views/cart/childComps/CartList";
  import CartBottomBar from "views/cart/childComps/CartButtomBar";

  // 辅助函数
  import { mapGetters } from 'vuex'

  export default {
    name: "Cart",
    components: {
      NavBar,
      CartList, CartBottomBar
    },
    computed: {
      // 俩种用法
      // 1. 数组  getters 里面的方法名在这个页面中使用时, 是一一对应的关系
      // ...mapGetters(['cartLen'])
      // 2. 对象
      // 可以自定义getters 里面的方法的名字
      ...mapGetters({
        shopLen: 'cartLen'
      })
    }
  }
</script>

<style scoped>

  .cart {
    padding-top: 44px;
    padding-bottom: 86px;
  }

  .nav_bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    color: #fff;
    background-color: var(--color-tint);
  }

</style>
