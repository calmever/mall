import {
  ADD_COUNTER,
  ADD_TO_CART
} from "@/store/mutations_types";

export default {
  addCart(context, payLoad) {
    return new Promise((resolve/*, reject*/) => {
      // payLoad新添加的商品
      // let oldProduct = null
      // for (let item of state.cartList) {
      //   if (item.iid === payLoad.iid) {
      //     oldProduct = item
      //   }
      // }
      // 1. 查找之前数组中是否有该商品
      let oldProduct = context.state.cartList.find(item => item.iid === payLoad.iid)

      // 2. 判断是否有该商品, 有则给该商品的count加1, 没有则给该商品加入到数组中, 并给商品添加一个count属性为1
      if (oldProduct) {
        // oldProduct.count += 1
        context.commit(ADD_COUNTER, oldProduct)
        resolve('当前商品的数量+1')
      } else {
        payLoad.count = 1
        // state.cartList.push(payLoad)
        context.commit(ADD_TO_CART, payLoad)
        resolve('商品已添加到购物车内')
      }
    })
  },
  increaseCount(context, payLoad) {
    context.commit('increaseCount', payLoad)
  },
  subCount(context, payLoad) {
    context.commit('subCount', payLoad)
  }
}
