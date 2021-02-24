<template>
  <div class="detail_goods_param" v-if="Object.keys(goodsParam).length !== 0">
    <div v-for="(item, index) in goodsParam.sizes"
         :key="index">
      <div class="detail_goods_content"
           v-for="(name, indey) in item"
           :key="indey">
        <div v-for="(sub, indem) in name" :key="sub + indem">
          <span>{{ sub }}</span>
        </div>
      </div>
    </div>
    <div>
      <div class="detail_goods_intr"
           v-for="(item, index) in goodsParam.infos"
           :key="item.key + index + 1">
        <span class="detail_goods_key">{{ item.key }}</span>
        <span class="detail_goods_color">{{ item.value }}</span>
      </div>
    </div>
    <div v-if="goodsParam.image.length !== 0">
      <img :src="goodsParam.image" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailGoodsParam",
    props: {
      goodsParam: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>

  .detail_goods_param {
    padding: 20px 20px;
    border-bottom: 3px solid #eee;
  }

  .detail_goods_content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    font-size: 14px;
    border-bottom: 1px solid #eee;
  }

  .detail_goods_content span {
    flex: 1;
  }

  .detail_goods_intr {
    display: flex;
    padding: 10px 0;
    font-size: 14px;
    border-bottom: 1px solid #eee;
  }

  .detail_goods_key {
    width: 60px;
  }

  .detail_goods_color {
    padding-left: 45px;
    flex: 1;
    color: var(--color-high-text);
  }

  img {
    width: 100vw;
  }

</style>
