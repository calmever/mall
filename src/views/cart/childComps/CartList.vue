<template>
  <div v-if="Object.keys(cartList).length !== 0">
    <div class="cart_list" v-for="(item, index) in cartList" :key="item.iid">
      <div  class="cart_list_button">
        <!-- @click.native 是给组件添加事件 -->
        <check-button :is-checked="item.checked"  @click.native="checkClick(item)"/>
      </div>
      <img :src="item.image" alt="">
      <div class="cart_list_info">
        <span class="cart_list_title">{{ item.title }}</span>
        <span>{{ item.desc }}</span>
        <div class="cart_list_count">
          <p class="cart_list_price">{{  item.price  }}</p>
          <div class="cart_list_calc">
            <p class="cart_list_subtraction calc" @click="subtraction(index)">-</p>
            <p>{{ item.count }}</p>
            <p class="cart_list_increase calc" @click="increase(index)">+</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  import CheckButton from "components/content/checkButton/CheckButton";

  export default {
    name: "CartList",
    components: {
      CheckButton
    },
    computed: {
      ...mapGetters(["cartList"])
    },
    methods: {
      checkClick(item) {
        item.checked = !item.checked
      },
      increase(index) {
        console.log('+')
        this.$store.dispatch('increaseCount', index)
      },
      subtraction(index) {
        console.log('-')
        this.$store.dispatch('subCount', index)
      }
    }
  }
</script>

<style scoped>

  .cart_list {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #eee;
  }

  .cart_list_button {
  }

  img {
    height: 16vh;
    border-radius: 10px;
  }

  .cart_list_info {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    align-content: center;
    padding-left: 10px;
    height: 16vh;
  }

  .cart_list_title {
    font-size: 18px;
    font-weight: 550;
  }

  .cart_list_info span {
    width: 66vw;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .cart_list_count {
    display: flex;
    justify-content: space-between;
    align-content: center;
    padding-top: 15px;
    font-size: 20px;
  }

  .cart_list_price {
    color: orange;
  }

  .cart_list_calc {
    display: flex;
  }

  .calc {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    border: 1px solid #999;
    border-radius: 50%;
  }

  .cart_list_increase {
    margin-left: 5px;
  }

  .cart_list_subtraction {
    margin-right: 5px;
  }

</style>
