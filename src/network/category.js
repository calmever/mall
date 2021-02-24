import { request } from "network/request";

export function getCategory() {
  return request({
    url: '/category',
  })
}

export function getSubCategory(maitKey) {
  return request({
    url: '/subcategory',
    timeout: 5000,
    params: {
      maitKey
    }
  })
}

export function getSubcategoryDetail(miniWallkey, type) {
  return request({
    url: '/subcategory/detail',
    params: {
      miniWallkey,
      type
    }
  })
}
