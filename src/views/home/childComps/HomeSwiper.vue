<template>
  <Swipers>
    <SwiperItem v-for="item in banners" :key="item.title">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
    </SwiperItem>
  </Swipers>
</template>

<script>
  import { Swipers, SwiperItem } from '@/components/common/swiper'

  export default {
    name: "HomeSwiper",
    props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      Swipers, SwiperItem
    },
  }
</script>

<style scoped>

</style>
