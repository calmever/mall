/**
 * 防抖函数
 * @param func  函数
 * @param delay 延迟时间
 * @return {function(...[*]=): void}
 */
export function debounce(func, delay = 300) {
  let timer = null
  return function (...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => func.apply(this, args), delay)
  }
}

/**
 * 时间戳格式化
 *
 * @param date date对象
 * @param fmt  格式
 * @return {*}
 */
export function formatDate(date, fmt) {
  // 1. 获取年份
  // y+
  // y+ => 1个或者多个y
  // y* => 0个或者多个y
  // y? => 0个或者1个y
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1,
      /* 对年份进行替换, 并根据y的长度来进行第几位截取 */
      (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }

  // 2. 获取
  // M+ =>
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + ''
      fmt = fmt.replace(RegExp.$1,
        (RegExp.$1.length === 1) ? str : padLeftZero(str))
    }
  }
  return fmt
}

// 小技巧
function padLeftZero(str) {
  return ('00' + str).substr(str.length)
}
