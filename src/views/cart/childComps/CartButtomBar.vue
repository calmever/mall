<template>
  <div class="cart_bottom_bar">
    <div class="cart_bottom_checked">
      <check-button @click.native="checkClick" :is-checked="isSelectAll"/>
      <span>全选</span>
    </div>
    <span class="cart_bottom_price">合计: ￥{{ totalPrice }}</span>
    <div class="cart_bottom_count" @click="calcClick">
      <span>去结算: {{ checkLen }}</span>
    </div>
  </div>
</template>

<script>
  import CheckButton from "components/content/checkButton/CheckButton";

  import { mapGetters } from 'vuex'

  export default {
    name: "CartBottomBar",
    components: {
      CheckButton
    },
    computed: {
      ...mapGetters(['cartList']),
      totalPrice() {
        if (Object.keys(this.cartList.length !== 0)) {
          return this.cartList
            .filter(item => item.checked)
            .reduce((preValue, item) => preValue + item.price/*.slice(1)*/ * item.count, 0)
            .toFixed(2)
        } else {
          return 0
        }
      },
      checkLen() {
        if (Object.keys(this.cartList).length !== 0) {
          return this.cartList
            .filter(item => item.checked)
            .reduce((preValue, item) => preValue + item.count, 0)
        } else {
          return 0
        }
      },
      isSelectAll() {
        // 使用 filter 函数
        // return !(this.cartList.filter(item => !item.checked).length)
        // 也可以使用 find 函数
        // 使用 every函数
        return this.cartList.length ? this.cartList.every(item => item.checked) : false
      }
    },
    methods: {
      checkClick() {
        if (this.isSelectAll) {
          this.cartList.forEach(item => item.checked = false)
        } else {
          this.cartList.forEach(item => item.checked = true)
        }
      },
      calcClick() {
        if (!this.cartList.length || !this.cartList.some(item => item.checked)) {
          this.$toast.show('请选择要购买的商品')
        }
      }
    }
  }
</script>

<style scoped>

  .cart_bottom_bar {
    position: fixed;
    bottom: 49px;
    display: flex;
    align-items: center;
    padding-left: 20px;
    width: 100vw;
    height: 37px;
    font-size: 14px;
    text-align: center;
    /*background-color: orange;*/
    background-color: #eee;
  }

  .cart_bottom_checked {
    display: flex;
    align-items: center;
  }

  .cart_bottom_checked span {
    margin-left: 10px;
  }

  .cart_bottom_price {
    flex: 1;
  }

  .cart_bottom_count {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30vw;
    height: 100%;
    color: #fff;
    background-color: salmon;
  }

</style>
