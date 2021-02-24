import { request } from "@/network/request";

export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}

export function getHomeGoods(type, page) {
  return request({
    url: '/home/data',
    timeout: 5000,
    params: {
      type,
      page
    }
  })
}
