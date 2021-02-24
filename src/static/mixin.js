import BackTop from "@/components/content/backTop/BackTop";

// 当多个组件中有相同的代码逻辑时, 可以使用mixin
export const mixin = {
  data() {
    return {}
  },
  mounted() {
    // console.log('如何混入');
  }
}

export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isShowBackTop: false
    }
  },
  methods: {
    showBackTop(positionY) {
      this.isShowBackTop = positionY > 1000
    }
  }
}
