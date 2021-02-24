import {
  ADD_COUNTER,
  ADD_TO_CART
} from "@/store/mutations_types";

export default {
  // mutations 唯一的目的就是修改state中状态
  // mutations 中的每个方法尽可能完成的事情比较单一一点
  [ADD_COUNTER](state, payLoad) {
    payLoad.count++
  },
  [ADD_TO_CART](state, payLoad) {
    payLoad.checked = true
    state.cartList.push(payLoad)
  },
  increaseCount(state, payLoad) {
    state.cartList[payLoad].count++
  },
  subCount(state, payLoad) {
    state.cartList[payLoad].count--
    if (state.cartList[payLoad].count === 0) {
      state.cartList.splice(payLoad, 1)
    }
  }
}
