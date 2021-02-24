<template>
  <div class="goods_item" @click="itemClick">
    <img v-lazy="showImage" alt="" @load="imageLoad">
    <div class="titles">
      <p>{{ goodsItem.title }}</p>
      <div class="details">
        <span class="price">{{ goodsItem.price }}</span>
        <img src="../../../assets/img/common/collect.svg" alt="">
        <span>{{ goodsItem.cfav }}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props: {
      goodsItem: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    computed: {
      showImage() {
        return this.goodsItem.image || this.goodsItem.show.img
      }
    },
    methods: {
      // 监听图片加载完成
      imageLoad() {
        if (this.$route.path.includes('/home')) {
          this.$bus.$emit('itemImageLoad')
        }
        // console.log('图片加载')
      },
      itemClick() {
        console.log('跳转到详情页')
        this.$router.push({
          path: '/detail',
          query: {
            iid: this.goodsItem.iid
          }
        })
      }
    }
  }
</script>

<style scoped>

  .goods_item {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
  }

  .titles {
    display: flex;
    flex-flow: column nowrap;
    padding: 5px 0;
  }

  .goods_item p {
    width: 48vw;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  img {
    width: 100%;
    border-radius: 7px 7px;
  }

  .details {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 3px;
  }

  .details img {
    width: 14px;
    height: 14px;
    /*padding-right: 3px;*/
    vertical-align: middle;
  }

  .price {
    padding-right: 8px;
    color: var(--color-high-text);
  }

</style>
