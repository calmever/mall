<template>
  <div class="category">
    <nav-bar class="cate_nav_bar">
      <div slot="center">商品分类</div>
    </nav-bar>

    <div class="category_content">
      <tab-menu :category-list="categoryList" @tabClick='tabMenuClick'/>
      <tab-content-sub :sub-category="showSubCategory"
                       :sub-category-detail="showSubCategoryDetail"/>
    </div>
  </div>
</template>

<script>
  // 子组件
  import TabMenu from "./childComps/TabMenu";
  import TabContentSub from "views/category/childComps/TabContentSub";

  // 公共组件
  import NavBar from "components/common/navBar/NavBar";

  // 网络请求
  import { getCategory, getSubCategory, getSubcategoryDetail } from "network/category";

  export default {
    name: "Category",
    components: {
      TabMenu, TabContentSub,
      NavBar
    },
    data() {
      return {
        // 左侧标题
        categoryList: [],
        // 右侧数据
        categoryData: [],
        currentIndex: -1,
        indexArr: [0]
      }
    },
    computed: {
      showSubCategory() {
        if (this.currentIndex === -1) return {}
        return this.categoryData[this.currentIndex].subCategory
      },
      showSubCategoryDetail() {
        if (this.currentIndex === -1) return {}
        return this.categoryData[this.currentIndex].subcategoryDetail
      },
    },
    created() {
      // 1. 请求分类数据
      this.getCategory()
    },
    mounted() {
      // const leftpanels = document.querySelector('#tab_menu')
      // const rightpanels = document.querySelector('#tab_content_sub')
      // const bodyheight = document.documentElement.clientHeight
      // leftpanels.style.height = bodyheight - 44 + 'px'
      // rightpanels.style.height = bodyheight -44 + 'px'
      // const leftpanels=document.querySelector('左边滚动盒子class/id')
      // const rightpanels=document.querySelector('右边滚动盒子class/id')
      // const bodyheight=document.documentElement.clientHeight
      // leftpanels.style.height=bodyheight-底部状态栏高度+'px'
      // rightpanels.style.height=bodyheight-底部状态栏高度+'px'
    },
    deactivated() {
      this.indexArr = [this.currentIndex]
    },
    methods: {
      getCategory() {
        getCategory()
          .then(res => {
            const categoryList = res.data.category.list
            // console.log(categoryList)
            categoryList.forEach(item => {
              // 将左侧的标题保存到 categoryList
              this.categoryList.push(item.title)
              // 将右侧的数据保存至 对象categoryData 中
              const data = {
                subCategory: {},
                subcategoryDetail: {
                  'pop': [],
                  'new': [],
                  'sell': []
                },
                maitKey: item.maitKey,
                miniWallkey: item.miniWallkey
              }
              this.categoryData.push(data)
              // this.categoryData[index] = {
              //   subCategory: {},
              //   subcategoryDetail: {
              //     'pop': [],
              //     'new': [],
              //     'sell': []
              //   },
              //   maitKey: item.maitKey,
              //   miniWallkey: item.miniWallkey
              // }
            })
            // console.log(this.categoryData)
            // console.log(this.categoryList)
            // 请求 进入分类页需要展示的第一页数据
            this.getSubCategory(0)
            console.log(this.categoryData)
          })
      },
      getSubCategory(index) {
        // 获取请求的参数 maitKey
        this.currentIndex = index
        const maitKey = this.categoryData[index].maitKey
        getSubCategory(maitKey)
          .then(res => {
            // 获取 subCategory 数据
            this.categoryData[index].subCategory = res.data
            // this.categoryData = { ...this.categoryData }
            // console.log(this.categoryData)
            // 请求类型数据 新款 流行 精选
            this.getSubcategoryDetail(index, 'new')
            this.getSubcategoryDetail(index, 'pop')
            this.getSubcategoryDetail(index, 'sell')
          })
      },
      getSubcategoryDetail(index, type) {
        // 获取请求的参数 miniWallkey
        const miniWallkey = this.categoryData[index].miniWallkey
        // 发送请求
        getSubcategoryDetail(miniWallkey, type)
          .then(res => {
            // console.log(res)
            // 将得到的数据保存下来
            this.categoryData[index].subcategoryDetail[type] = res
            // this.categoryData = { ...this.categoryData }
            // console.log(this.categoryData[index].subcategoryDetail)
            // console.log(index)
          })
      },
      /**
       * 事件响应相关的方法
       */
      tabMenuClick(index) {
        // console.log(index)
        console.log('____')
        this.indexArr.push(index)
        // this.indexArr.some(item => item === index) ? this.showSubCategory() : this.getSubCategory(index)
        const Arr = this.indexArr.filter(item => item === index)
        console.log(Arr.length)
        if (Arr.length === 1) {
          this.getSubCategory(index)
        } else {
          this.currentIndex = index
        }
        // console.log(this.indexArr)
      }
    }
  }
</script>

<style scoped>

  .category {
    position: relative;
    padding-top: 44px;
    padding-bottom: 49px;
  }

  .cate_nav_bar {
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    right: 0;
    color: #fff;
    font-weight: 600;
    background-color: var(--color-tint);
  }

  /* 给该容器设置相对定位并有一个固定的高度, 完成里面俩个容器的可以有滚动条 */
  .category_content {
    position: relative;
    display: flex;
    height: calc(100vh - 44px - 49px);
  }

  /* 为了让左右俩个分别都有滚动条 */
  .category_content div{
    height: 100%;
    overflow-y: auto;
  }
</style>
