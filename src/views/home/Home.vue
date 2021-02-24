<template>
  <div id="home">
    <nav-bar class="home_nav">
      <div slot="center">购物街</div>
    </nav-bar>

    <Scroll @scroll="backShow"
            :pull-up-load="pullUpLoad"
            @pullingUp="loadMore"
            :isScrollShow="true" class="scroll">
      <HomeSwiper :banners="banners"/>
      <recommend-view :recommends="recommends"/>
      <FeatureView class="feature_view"/>
      <TabControl class="tab_control"
                  :titles="titles"
                  @tabClick="tabClick"/>
      <GoodsList :goods="showGoods"/>
    </Scroll>

  <BackTop v-show="isShowBackTop"/>

  </div>
</template>

<script>
  // 公共组件
  import NavBar from "@/components/common/navBar/NavBar";
  import TabControl from "@/components/content/tabControl/TabControl";
  import GoodsList from "@/components/content/goods/GoodsList";
  import Scroll from "@/components/common/scroll/Scroll";

  // 子组件
  import HomeSwiper from "@/views/home/childComps/HomeSwiper";
  import RecommendView from "@/views/home/childComps/RecommendView";
  import FeatureView from "@/views/home/childComps/FeatureView";

  // 网络请求
  import { getHomeMultidata, getHomeGoods } from "@/network/home";
  import { backTopMixin } from "@/static/mixin";

  export default {
    name: "Home",
    components: {
      NavBar, TabControl, GoodsList, Scroll,
      HomeSwiper, RecommendView, FeatureView
    },
    data() {
      return {
        banners: [],
        recommends: [],
        titles: ['流行', '新款', '精选'],
        goods: {
          'pop': { page: 0, list: [] },
          'new': { page: 0, list: [] },
          'sell': { page: 0, list: [] }
        },
        currentType: 'pop',
        pullUpLoad: false,
        scrollTop: 0,
        saveY: 0
      }
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list
      }
    },
    mixins: [backTopMixin],
    created() {
      // 1. 请求多个数据
      this.getHomeMultidata()

      // 2. 请求商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    mounted() {
      // 监听item中图片加载完成
      this.$bus.$on('itemImageLoad', () => {
        // 当图片加载完成后, 我们在讲上拉加载更多打开
        if (!this.pullUpLoad) {
          this.pullUpLoad = true
        }
      })
    },
    activated() {
      // 将页面定位到离开时的位置
      // console.log('activated')
      // console.log(this.saveY)
      document.documentElement.scrollTop = this.saveY
    },
    // 保存退出时的位置
    deactivated() {
      // 将当前的scrollTop的保存进 saveY
      // 因为当别的页面使用 scroll组件时, 也会改变 scrollTop的值
      this.saveY = this.scrollTop
      // console.log('deactivated')
      // console.log(this.saveY)
    },
    methods: {
      /**
       * 网络请求相关的方法
       */
      getHomeMultidata() {
        getHomeMultidata()
          .then(res => {
            this.banners = res.data.banner.list
            this.recommends = res.data.recommend.list
          })
      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1
        getHomeGoods(type, page)
          .then(res => {
            console.log(res)
            this.goods[type].list.push(...res.data.list)
            this.goods[type].page += 1
          })
      },
      /**
       * 事件监听相关的方法
       */
      tabClick(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
      },
      backShow(scrollTop) {
        // 记录当前的滚动位置
        this.scrollTop = scrollTop
        this.showBackTop(scrollTop)
      },
      // 上拉加载
      loadMore() {
        // console.log('上拉加载更多')
        this.getHomeGoods(this.currentType)
        // this.isScrollShow = false
        // this.isScrollShow = false
      },
      /**
       *  防抖 debounce
       *  防抖函数起作用的过程:
       *    * 如果我们要直接执行一个函数, 那么函数会被执行多次
       *    * 可以将函数传入到 debounce函数中, 生成一个新的函数
       */
      debounce(func, delay) {
        let timer = null
        return function (...args) {
          if (timer) clearTimeout(timer)
          timer = setTimeout(() => {
            func.apply(this, args)
          }, delay)
        }
      }
    }
  }
</script>

<style scoped>

  #home {
    padding-top: 44px;
  }

  .home_nav {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
    color: var(--color-background);
    background-color: var(--color-tint);
  }

  .tab_control {
    /* 移动端支持这个属性 */
    position: sticky;
    top: 44px;
    height: 44px;
    /*width: 100vw;*/
    background-color: #fff;
  }

  .scroll {
    padding-bottom: 49px;
  }

</style>
