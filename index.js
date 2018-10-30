/*
 * @Author: qianlfeg 
 * @Date: 2018-10-30 14:36:57 
 * @Last Modified by:   qianlfeg 
 * @Last Modified time: 2018-10-30 14:36:57 
 */
export default (stamp) => {
  stamp = new Date(stamp)
  const getMonth = stamp.getMonth() + 1
  const getDate = stamp.getDate()
  // 年
  const year = stamp.getFullYear()
  // 月
  const month = getMonth >= 10 ? getMonth : `0${getMonth}`
  // 日
  const day = getDate >= 10 ? getMonth : `0${getDate}`
  // 时
  const hours = stamp.getHours()
  // 分
  const minutes = stamp.getMinutes()
  // 秒
  const seconds = stamp.getSeconds()

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
}