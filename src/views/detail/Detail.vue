<template>
  <div id="detail">
    <detail-nav-bar ref="detail_nav_bar" @titleClick="titleClick" class="detail_nav_bar"/>
    <scroll @scroll="scrollY">
      <detail-swiper :top-images="topImages"/>
      <detail-base-info :goodsInfo="goodsInfo"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"/>
      <detail-goods-param ref="params" :goods-param="goodsParam"/>
      <detail-comment-info ref="comment" :comment-info="commentInfo"/>
      <goods-list ref="recommend" :goods="recommends"/>
    </scroll>
    <detail-bottom-bar @addCart="addToCart"/>
    <back-top v-show="isShowBackTop"/>
    <!--<toast :message="message" :is-show="isAddCartShow"/>-->
  </div>
</template>

<script>
  import DetailNavBar from "@/views/detail/childComps/DetailNavBar";
  import DetailSwiper from "@/views/detail/childComps/DetailSwiper";
  import DetailBaseInfo from "@/views/detail/childComps/DetailBaseInfo";
  import DetailShopInfo from "@/views/detail/childComps/DetailShopInfo";
  import DetailGoodsInfo from "@/views/detail/childComps/DetailGoodsInfo";
  import DetailGoodsParam from "@/views/detail/childComps/DetailGoodsParam";
  import DetailCommentInfo from "@/views/detail/childComps/DetailCommentInfo";
  import DetailBottomBar from "@/views/detail/childComps/DetailBottomBar";

  import { getDetail, GoodsInfo, Shop, GoodsParam, getRecommend } from "@/network/detail";
  import { mixin, backTopMixin } from "@/static/mixin";
  import { debounce } from "@/static/tools";
  import { mapActions } from 'vuex'

  import GoodsList from "@/components/content/goods/GoodsList";
  import Scroll from "@/components/common/scroll/Scroll";

  // import Toast from "components/common/toast/Toast";

  export default {
    name: "Detail",
    components: {
      // children
      DetailNavBar, DetailSwiper, DetailBaseInfo,
      DetailShopInfo, DetailGoodsInfo, DetailGoodsParam,
      DetailCommentInfo, DetailBottomBar,
      // components
      GoodsList, Scroll, /*Toast*/
    },
    data() {
      return {
        iid: null,
        topImages: [],
        goodsInfo: {},
        shop: {},
        detailInfo: {},
        goodsParam: {},
        commentInfo: {},
        recommends: [],
        themeTopYs: [],
        deImageLoad: null,
        currentIndex: 0,
        // message: '',
        // isAddCartShow: false,
      }
    },
    // 混入的使用方式
    mixins: [mixin, backTopMixin],
    created() {
      // 1. 保存传入的 iid
      this.iid = this.$route.query.iid

      // 2. 根据iid请求详情数据
      getDetail(this.iid).then(
        res => {
          // console.log(res)
          const data = res.result
          // 1. 获取顶部的图片轮播数据
          this.topImages = data.itemInfo.topImages
          // console.log(this.topImages)
          // 2. 获取商品信息
          this.goodsInfo = new GoodsInfo(data.itemInfo, data.columns, data.shopInfo.services)
          // 3. 获取店铺信息
          this.shop = new Shop(data.shopInfo)

          // 4. 获取商品详细信息
          this.detailInfo = data.detailInfo

          // 5. 获取参数信息
          this.goodsParam = new GoodsParam(data.itemParams.info, data.itemParams.rule)

          // 6. 取出评论信息
          if (data.rate.cRate !== 0) {
            this.commentInfo = data.rate.list[0]
          }
        })

      // 7. 请求推荐数据
      getRecommend().then(
        res => this.recommends = res.data.list)

      //
    },
    mounted() {
      this.deImageLoad = debounce(() => {
        this.themeTopYs = []
        this.themeTopYs.push(0)
        this.themeTopYs.push(this.$refs.params.$el.offsetTop - 44)
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop - 44)
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop - 50)
        this.themeTopYs.push(Number.MAX_VALUE)
        // console.log(this.themeTopYs)
        // console.log('位置信息')
      }, 0)
    },
    methods: {
      ...mapActions(['addCart']),
      titleClick(index) {
        console.log(index)
        // 当发生点击时, 获取组件元素的offsetTop完成对应的跳转
        switch (index) {
          case 0:
            document.documentElement.scrollTop = 0
            break
          case 1:
            document.documentElement.scrollTop = this.$refs.params.$el.offsetTop - 44
            break
          case 2:
            document.documentElement.scrollTop = this.$refs.comment.$el.offsetTop - 44
            break
          case 3:
            document.documentElement.scrollTop = this.$refs.recommend.$el.offsetTop - 50
            break
        }
      },
      imageLoad() {
        // 因为在滚动过程中进行加入 则不需要在图片加载时, 改变 themeTopY数组的值
        // this.deImageLoad()
      },
      scrollY(positionY) {
        let y = positionY
        // console.log(y)
        this.deImageLoad()
        const len = this.themeTopYs.length
        // console.log(this.themeTopYs)
        for (let i in this.themeTopYs) {
          let n = parseInt(i)
          if (n < len - 1) {
            if (this.currentIndex !== n && y >= this.themeTopYs[n] && y < this.themeTopYs[n + 1]) {
              this.currentIndex = n
              console.log(n)
              this.$refs.detail_nav_bar.currentIndex = this.currentIndex
            }
          }
        }
        // 判断返回到顶部的按钮是否显示
        this.showBackTop(positionY)
      },
      addToCart() {
        console.log('____')
        // 1. 获取购物车需要展示的信息
        const product = {}
        // console.log(this.goodsInfo)
        product.image = this.topImages[0]
        // console.log(this.goodsInfo)
        product.title = this.goodsInfo.title
        product.desc = this.goodsInfo.desc
        product.price = this.goodsInfo.realPrice
        product.iid = this.iid
        // console.log(product)

        // 2. 将商品添加到购物车
        this.addCart(product)
          .then(res => {
            // this.message = res
            // this.isAddCartShow = true
            // setTimeout(() => {
            //   this.isAddCartShow = false
            //   // this.message = ''
            // }, 1500)
            this.$toast.show(res, 1500)
            console.log(res)
            console.log(this.$toast)
          })

        // this.$store.commit('addCart', product)
        // this.$store.dispatch('addCart', product)
        //   .then(res => console.log(res))
      }
    }
  }
</script>

<style scoped>

  #detail {
    position: relative;
    /* 盖过下面的导航 */
    z-index: 90;
    padding-top: 44px;
    padding-bottom: 49px;
    width: 100vw;
    background-color: #fff;
  }

  .detail_nav_bar {
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    right: 0;
    background-color: #fff;
  }

</style>
