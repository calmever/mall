<template>
  <div class="swiper_container">
    <swiper :options="swiperOption" class="swiper">
      <swiper-slide  class="swp-silde"
                     v-for="(item, index) in topImages"
                     :key="index"
                     data-id="index">
        <img class="swp-img" :src="item" alt=""></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  import { swiper, swiperSlide } from "vue-awesome-swiper";
  require("swiper/dist/css/swiper.css");

  export default {
    name: "DetailSwiper",
    components: {
      swiper,
      swiperSlide
    },
    props: {
      topImages: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        swiperOption: {
          pagination: { el: '.swiper-pagination' },
          autoplay: {
            disableOnInteraction: false, // 用户操作swiper之后，是否禁止autoplay
            delay: 3000 // 自动切换的时间间隔（单位ms）
          }
        },
        // swiperList: [
        //   {
        //     "id": "0001",
        //    "imgUrl": "http://img1.qunarzz.com/piao/fusion/1708/7c/c0b9acba07764302.jpg_750x200_389436b7.jpg"
        //   }, {
        //     "id": "0002",
        //     "imgUrl": "http://img1.qunarzz.com/piao/fusion/1805/13/6332699c44387902.jpg_750x200_b7afa4f8.jpg"
        //   }, {
        //     "id": "0003",
        //     "imgUrl": "http://img1.qunarzz.com/piao/fusion/1805/3b/ef86879aa50e3002.jpg_750x200_2a108508.jpg"
        //   }, {
        //     "id": "0004",
        //     "imgUrl": "http://img1.qunarzz.com/piao/fusion/1806/c1/a8a7d6b08a69c002.jpg_750x200_59bdc9ae.jpg"
        //   }, {
        //     "id": "0005",
        //     "imgUrl": "http://img1.qunarzz.com/piao/fusion/1806/5a/a7fc8e091190d602.jpg_750x200_e3aae50d.jpg"
        //   }
        // ],
      }
    },
    created(){
      //只有一张图片时不轮播
      // this.swiperOption.autoplay = this.swiperList.length != 1 ? {
      //   disableOnInteraction: false, // 用户操作swiper之后，是否禁止autoplay
      //   delay: 3000, // 自动切换的时间间隔（单位ms）
      // } : false
    },
  }
</script>

<style scoped>

  .swiper_container {
    width: 100vw;
    height: 48vh;
  }

  .swiper {
    width: 100vw;
    height: 48vh;
  }

  img {
    width: 100%;
  }


</style>
