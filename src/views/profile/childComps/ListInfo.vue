<template>
  <div v-if="Object.keys(listData).length !== 0">
    <div class="list_info" v-for="(item, index) in listData" :key="index">
      <svg class="icon icon-back" aria-hidden="true">
        <use :xlink:href="item.icon"></use>
      </svg>
      <span>{{ item.data }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ListInfo",
    props: {
      listData: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>

  .list_info {
    display: flex;
    align-items: center;
    height: 6vh;
  }

  .list_info svg {
    width: 70px;
  }

  .list_info span {
    position: relative;
    flex: 1;
  }

  .list_info span::before {
    content: '';
    position: absolute;
    top: -1.7vh;
    width: 100%;
    height: 1px;
    background-color: #eee;
  }

</style>
