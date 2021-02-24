<template>
  <div class="goods">
    <goods-list-item
      class="goods_list_item"
      v-for="(item, index) in goods"
      :goods-item="item"
      :key=" index + 'goodsList'"/>
  </div>
</template>

<script>
  import GoodsListItem from "@/components/content/goods/GoodsListItem";

  export default {
    name: "GoodsList",
    components: {
      GoodsListItem
    },
    props: {
      goods: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>

  .goods {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
  }

  .goods_list_item {
    width: 48vw;
  }

</style>
