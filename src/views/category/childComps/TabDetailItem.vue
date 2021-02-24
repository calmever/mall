<template>
  <div class="tab_detail_item" v-if="Object.keys(detailItem).length !== 0">
    <!--<img :src="detailItem.img" alt="">-->
    <img class="item_img" :src="detailItem.img" alt />
    <div>
      <p class="item_title">{{ detailItem.title }}</p>
    </div>
    <div class="tab_item_detail">
      <span class="item_price">¥{{ detailItem.price }}</span>
      <img src="../../../assets/img/common/collect.svg" alt />
      <span>{{ detailItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabDetailItem",
  props: {
    detailItem: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style scoped>
.tab_detail_item {
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  padding-bottom: 4px;
  /*align-items: center;*/
  width: 46%;
  font-size: 12px;
  text-align: center;
}

.item_img {
  width: 100%;
  border-radius: 10px;
}

.item_title {
  padding-top: 8px;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.tab_item_detail img {
  width: 14px;
}

.item_price {
  padding-right: 10px;
  color: var(--color-high-text);
}
</style>
