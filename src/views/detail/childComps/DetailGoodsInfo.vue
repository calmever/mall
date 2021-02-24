<template>
  <div class="detail_goods_info" v-if="Object.keys(detailInfo).length !== 0">
    <div class="detail_goods_desc">
      <div class="detail_goods_start"></div>
      <div>{{ detailInfo.desc }}</div>
      <div class="detail_goods_end"></div>
    </div>
    <div v-for="(item, index) in detailInfo.detailImage"
         :key="index + item.key + ''">
      <div class="detail_goods_key">{{ item.key }}</div>
      <img v-for="(item, index) in item.list" @load="imageLoad()"
              :src="item" alt="" :key="index">
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailGoodsInfo",
    props: {
      detailInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
        currentIndexImage: 0
      }
    },
    methods: {
      imageLoad() {
        let len = this.detailInfo.detailImage[0].list.length
        if (this.currentIndexImage >= len) {
          this.$emit('imageLoad')
        }
        this.currentIndexImage++
      }
    }
  }
</script>

<style scoped>

  .detail_goods_info {
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 3px solid #eee;
  }

  .detail_goods_desc {
    position: relative;
    padding: 2px 15px 10px;
    font-size: 14px;
    color: #666666;
  }

  .detail_goods_start {
    position: relative;
    margin-bottom: 7px;
    width: 30vw;
    height: 1px;
    background-color: #999;
  }

  .detail_goods_start::before {
    content: '';
    position: absolute;
    bottom: 0;
    display: block;
    width: 6px;
    height: 6px;
    background-color: black;
  }

  .detail_goods_end {
    position: absolute;
    left: 65vw;
    width: 30vw;
    height: 1px;
    background-color: #999;
  }

  .detail_goods_end::after {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    display: block;
    width: 6px;
    height: 6px;
    background-color: black;
  }

  .detail_goods_key {
    padding: 1px 10px 10px;
    font-size: 15px;
  }

  img {
    width: 100vw;
  }

</style>
