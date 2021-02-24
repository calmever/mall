<template>
  <div class="detail_shop_info">
    <div class="detail_shop_logo">
      <img :src="shop.logo" alt="">
      <span>{{ shop.name }}</span>
    </div>
    <div class="detail_shop_details">
      <div class="detail_shop_baby">
        <div class="detail_shop_sales">
          <span>{{ shop.sells | sellCountFilter }}</span>
          <p>总销量</p>
        </div>
        <div>
          <span>{{ shop.goodsCount }}</span>
          <p>全部宝贝</p>
        </div>
      </div>
      <span class="detail_shop_line"></span>
      <div class="detail_shop_content">
        <div v-for="item in shop.score" :key="item.name">
          <span>{{ item.name }}</span>
          <span :class="color(item.isBetter)">{{ item.score }}</span>
          <span class="detail_shop_height detail_shop_top" v-if="item.isBetter">高</span>
          <span class="detail_shop_height detail_shop_bottom" v-else>低</span>
        </div>
      </div>
    </div>
    <div class="detail_shop_in"><div>进店逛逛</div></div>
  </div>
</template>

<script>
  export default {
    name: "DetailShopInfo",
    props: {
      shop: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      color(better) {
        return { 'detail_shop_red': better, 'detail_shop_green': !better }
      }
    },
    filters: {
      sellCountFilter: function (value) {
        if (value < 10000) return value;
        return (value/10000).toFixed(2) + '万'
      }
    }
  }
</script>

<style scoped>

  .detail_shop_info {
    padding: 20px 15px 3px;
    border-bottom: 5px solid rgb(241, 245, 251);
  }

  .detail_shop_logo {
    display: flex;
    align-items: center;
    padding-bottom: 10px;
  }

  .detail_shop_logo img {
    width: 40px;
    border-radius: 50%;
    border: 1px solid #eee;
  }

  .detail_shop_logo span {
    padding-left: 10px;
    font-size: 14px;
  }

  .detail_shop_details {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .detail_shop_baby {
    display: flex;
    align-items: center;
  }

  .detail_shop_baby p {
    font-size: 13px;
    font-weight: 600;
  }

  .detail_shop_baby span {
    display: inline-block;
    padding-bottom: 6px;
    min-width: 50px;
    text-align: center;
    font-size: 16px;
  }

  .detail_shop_sales {
    margin-right: 25px;
  }

  /* 分隔线 */
  .detail_shop_line {
    width: 1px;
    height: 40px;
    background-color: #eee;
  }

  .detail_shop_content {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    height: 60px;
    font-size: 12px;
  }

  .detail_shop_content span {
    display: inline-block;
    margin-right: 5px;
    min-width: 30px;
  }

   .detail_shop_content .detail_shop_height {
    min-width: 12px;
    color: #fff;
  }

   /* 显示的分数的颜色 */
   .detail_shop_red {
     color: #ff5777;
   }

   .detail_shop_green {
     color: green;
   }

  /* 显示高低的背景颜色 */
  .detail_shop_top {
    background-color: #ff5777;
  }

  .detail_shop_bottom {
    background-color: green;
  }

  .detail_shop_in {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
    font-size: 14px;
  }

  .detail_shop_in div {
    width: 30vw;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background-color: rgb(241, 245, 251);
    border-radius: 5px;
  }

</style>
