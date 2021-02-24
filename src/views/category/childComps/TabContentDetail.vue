<template>
  <div class="tab_content_detail">
    <tab-detail-item
      class="tab_detail_item"
      v-for="(item, index) in detail"
      :key="index" :detail-item="item"/>
  </div>
</template>

<script>
  import TabDetailItem from "views/category/childComps/TabDetailItem";

  export default {
    name: "TabContentDetail",
    props: {
      detail: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      TabDetailItem
    }
  }
</script>

<style scoped>

  .tab_content_detail {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
  }

  .tab_detail_item {
    width: 48%;
  }

</style>
