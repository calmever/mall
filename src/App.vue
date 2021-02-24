<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
    <main-tab-bar/>
  </div>
</template>

<script>
  import MainTabBar from "@/components/content/mainTabBar/MainTabBar";

  export default {
    name: 'App',
    components: {
      MainTabBar
    }
  }
</script>

<style>
  @import "./assets/css/base.css";

  /* 图标字体样式 */
  .icon {
    width: 24px;
    height: 24px;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }

</style>
