<template>
  <div class="detail_bottom_bar">
    <div class="detail_service">
      <div></div>
      <span>客服</span>
    </div>
    <div class="detail_shop">
      <div></div>
      <span>店铺</span>
    </div>
    <div class="detail_favorites">
      <div></div>
      <span>收藏</span>
    </div>
    <div @click="addToCart" class="detail_shop_car">
      <span>加入购物车</span>
    </div>
    <div class="detail_buy">
      <span>购买</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBottomBar",
    methods: {
      addToCart() {
        this.$emit('addCart')
      }
    }
  }
</script>

<style scoped>

  .detail_bottom_bar {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    height: 49px;
    text-align: center;
    font-size: 14px;
    /*background-color: salmon;*/
    background-color: #fff;
  }

  .detail_service, .detail_shop, .detail_favorites {
    flex: 1;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    align-items: center;
  }

  .detail_service div, .detail_shop div, .detail_favorites div {
    width: 25px;
    height: 26px;
    background-image: url('~assets/img/detail/detail_bottom.png');
    background-position: 0 1px;
    background-repeat: no-repeat;
    background-size: 24px;
    /*background-color: orange;*/
  }

  .detail_service div {
    background-position: 0 -55px;
  }

  .detail_shop div {
    background-position: 0 -105px;
  }

  .detail_shop_car, .detail_buy {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 49px;
    font-size: 15px;
  }

  .detail_shop_car {
    width: 25vw;
    color: black;
    background-color: rgb( 255, 222, 15);
  }

  .detail_buy {
    width: 20vw;
    color: #fff;
    background-color: #ff8198;
  }

</style>
