<template>
  <div class="tab_content_sub">
    <div class="tab_content_item" v-for="(item, index) in showList" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt />
        <span>{{ item.title }}</span>
      </a>
    </div>
    <tab-control @tabClick="tabClick" class="category_control" :titles="title" />
    <tab-content-detail :detail="categoryDetail" />
  </div>
</template>

<script>
import TabControl from "components/content/tabControl/TabControl";

import TabContentDetail from "views/category/childComps/TabContentDetail";

export default {
  name: "TabContentSub",
  components: {
    TabControl,
    TabContentDetail
  },
  props: {
    subCategory: {
      type: Object,
      default() {
        return {};
      }
    },
    subCategoryDetail: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      title: ["综合", "新品", "销量"],
      currentIndex: 0,
      type: "pop"
    };
  },
  computed: {
    showList() {
      return this.subCategory.list;
    },
    categoryDetail() {
      return this.subCategoryDetail[this.type];
    }
  },
  methods: {
    tabClick(index) {
      this.currentIndex = index;
      switch (index) {
        case 0:
          this.type = "pop";
          break;
        case 1:
          this.type = "new";
          break;
        case 2:
          this.type = "sell";
          break;
      }
    }
  }
};
</script>

<style scoped>
.tab_content_sub {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
  width: 72vw;
  font-size: 13px;
}

.tab_content_item a {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  padding-top: 5px;
  width: 22vw;
}

.tab_content_item img {
  width: 18vw;
}

.category_control {
  width: 100%;
}
</style>
