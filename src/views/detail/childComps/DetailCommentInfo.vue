<template>
  <div class="detail_comment_info" v-if="Object.keys(commentInfo).length !== 0">
    <div class="detail_comment_title">
      <span>用户评价</span>
      <p>更多</p>
    </div>
    <div class="detail_comment_user">
      <img :src="commentInfo.user.avatar" alt="">
      <span>{{ commentInfo.user.uname }}</span>
    </div>
    <div class="detail_comment_content">
      <span>{{ commentInfo.content }}</span>
    </div>
    <div class="detail_comment_params">
      <span>{{ commentInfo.created | showDate }}</span>
      <p>{{ commentInfo.style }}</p>
    </div>
    <div class="detail_comment_images">
      <img v-for="(item, index) in commentInfo.images"
           :key="index"
           :src="item" alt="">
    </div>
  </div>
</template>

<script>
  import { formatDate } from "@/static/tools";

  export default {
    name: "DetailCommentInfo",
    props: {
      commentInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    filters: {
      showDate(value) {
        // 1. 将时间戳转成Date对象
        const date = new Date(value * 1000)
        // 2. 将date进行格式化
        return formatDate(date, 'yyyy-MM-dd hh:mm:ss')
      }
    }
  }
</script>

<style scoped>

  .detail_comment_info {
    padding: 10px 15px;
    border-bottom: 2px solid #eee;
  }

  .detail_comment_title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 20px;
    border-bottom: 1px solid #eee;
  }

  .detail_comment_title p {
    font-size: 14px;
  }

  .detail_comment_user {
    display: flex;
    align-items: center;
    padding: 10px 0;
  }

  .detail_comment_user img {
    width: 12vw;
    border-radius: 50%;
  }

  .detail_comment_user span {
    margin-left: 15px;
    font-size: 18px;
  }

  .detail_comment_content {
    padding: 2px 0 10px;
    font-size: 15px;
  }

  .detail_comment_params {
    display: flex;
    padding-bottom: 10px;
    font-size: 14px;
  }

  .detail_comment_params p {
    margin-left: 10px;
  }

  .detail_comment_images {
    width: 80vw;
    /*background-color: #ff8198;*/
  }

  .detail_comment_images img {
    margin-right: 15px;
    width: 20vw;
  }

</style>
