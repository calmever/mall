<template>
  <div class="profile">
    <nav-bar class="profile_nav_bar">
      <div slot="center">我的商品</div>
    </nav-bar>
    <!-- 登录/注册 我的 -->
    <div class="user_info">
      <div class="user_img"></div>
      <div class="user_login">
        <p>登录/注册</p>
        <div>
          <svg class="icon icon-back" aria-hidden="true">
            <use xlink:href="#icon-shengdantubiao-01" />
          </svg>
          <span>暂无绑定手机号</span>
        </div>
      </div>
      <i>></i>
    </div>
    <!-- 我的账户余额 优惠券 积分 -->
    <div class="user_account">
      <div>
        <span>0.00</span>元
        <p>我的余额</p>
      </div>
      <div>
        <span>0</span>个
        <p>我的优惠</p>
      </div>
      <div class="account_last">
        <span>0</span>分
        <p>我的积分</p>
      </div>
    </div>
    <!-- 我的消息 -->
    <list-info class="list" :list-data="profileInfo" />
    <!-- 我的购物车 -->
    <list-info class="list" :list-data="myInfo" />
  </div>
</template>

<script>
import NavBar from "components/common/navBar/NavBar";

import ListInfo from "views/profile/childComps/ListInfo";

export default {
  name: "Profile",
  components: {
    NavBar,
    ListInfo
  },
  data() {
    return {
      myInfo: [
        { data: "我的购物车", icon: "#icon-shengdantubiao-04" },
        { data: "下载购物车APP", icon: "#icon-shengdantubiao-15" }
      ],
      profileInfo: [
        { data: "我的消息", icon: "#icon-shengdantubiao-06" },
        { data: "积分商城", icon: "#icon-shengdantubiao-07" },
        { data: "会员卡", icon: "#icon-shengdantubiao-05" }
      ]
    };
  }
};
</script>

<style scoped>
.profile {
  padding-top: 44px;
}

.profile .profile_nav_bar {
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  right: 0;
  color: #fff;
  font-weight: 600;
  box-shadow: 0 0 0 var(--color-tint);
  background-color: var(--color-tint);
}

.user_info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding: 0 2vh; */
  width: 100vw;
  height: 15vh;
  color: #fff;
  background-color: var(--color-tint);
}

.user_img {
  width: 8vh;
  height: 8vh;
  border-radius: 50%;
  background-color: #eee;
}

.user_login {
  padding-left: 5px;
  flex: 1;
}

.user_login span {
  font-size: 14px;
}

.list {
  border-top: 2vh solid #eee;
}

.user_account {
  display: flex;
  height: 10vh;
  text-align: center;
  font-size: 14px;
  /*background-color: orange;*/
}

.user_account span {
  font-size: 20px;
  color: var(--color-high-text);
}

.user_account div {
  position: relative;
  padding-top: 13px;
  flex: 1;
}

.user_account div:not(.account_last):before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 1px;
  height: 100%;
  background-color: #eee;
}
</style>
