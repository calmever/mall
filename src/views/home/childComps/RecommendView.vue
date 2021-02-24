<template>
  <div class="recommend">
    <div v-for="item in recommends" :key="item.title">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "RecommendView",
    props: {
      recommends: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .recommend {
    display: flex;
    justify-content: space-around;
    padding: 10px 0 20px;
    width: 100vw;
    text-align: center;
    font-size: 12px;
    border-bottom: 10px solid #eee;
  }

  .recommend img {
    margin-bottom: 5px;
    width: 20vw;
  }

</style>
