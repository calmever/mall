<template>
  <div class="detail_base_info"
       v-if="Object.keys(goodsInfo).length !== 0">
    <div class="detail_base_title">{{ goodsInfo.title }}</div>
    <div class="detail_base_price">
      <span class="detail_new_price">{{ goodsInfo.newPrice }}</span>
      <span class="detail_old_price">{{ goodsInfo.oldPrice }}</span>
      <span class="detail_base_disc"
            :style="descColor"
            v-if="goodsInfo.discount">{{ goodsInfo.discount }}</span>
    </div>
    <div class="detail_base_columns">
      <span>{{ goodsInfo.columns[0] }}</span>
      <span class="detail_columns_center">{{ goodsInfo.columns[1] }}</span>
      <span class="detail_columns_right">{{ goodsInfo.services[goodsInfo.services.length - 1].name }}</span>
    </div>
    <div class="detail_base_services">
      <div class="detail_services_item" v-for="index in goodsInfo.services.length - 1" :key="index">
        <img :src="goodsInfo.services[index-1].icon" alt="">
        <span>{{ goodsInfo.services[index-1].name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBaseInfo",
    props: {
      goodsInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    computed: {
      descColor() {
        return  { 'backgroundColor': this.goodsInfo.discountBgColor }
      }
    }
  }
</script>

<style scoped>

  .detail_base_title {
    padding: 10px 5px;
    font-size: 20px;
    font-weight: 530;
  }

  .detail_base_price {
    padding-left: 5px;
    padding-bottom: 10px;
    width: 90vw;
  }

  .detail_base_price .detail_new_price {
    padding-right: 5px;
    font-size: 20px;
    color: var(--color-high-text);
  }

  .detail_old_price {
    font-size: 12px;
    text-decoration: line-through;
    color: #999;
  }

  .detail_base_disc {
    display: inline-block;
    margin: -3px 0 0 5px;
    padding: 1px 5px;
    border-radius: 16px;
    font-size: 14px;
    vertical-align: top;
    color: #fff;
    background-color: var(--color-high-text);
  }

  .detail_base_columns {
    display: flex;
    padding: 5px;
  }

  .detail_base_columns span {
    padding-bottom: 5px;
    flex: 1;
    font-size: 14px;
    color: #999;
    border-bottom: solid 3px #eee;
  }

  .detail_columns_center {
    text-align: center;
  }

  .detail_columns_right {
    text-align: right;
  }

  .detail_base_services {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0 10px;
    font-size: 14px;
    color: black;
    border: 5px solid #fff;
    border-bottom-color: #eee;
  }

  .detail_base_services img {
    width: 13px;
    vertical-align: center;
  }

  .detail_services_item {
    display: flex;
    align-items: center;
  }

</style>
