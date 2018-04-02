export function validate(value, type) {
  if("required" === type) {
    //非空验证
    return !(value === null || $.trim(value) === "")
  }
  //验证是否为合法的手机号码
  if("phone" === type) {
    return /^1\d{10}$/.test(value)
  }
  //验证是否为合法邮箱
  if("email" === type) {
    return /^\w+@\w+(\.\w+)+$/.test(value)
  }
  //验证是否为数字
  if("number" === type) {
    return !isNaN(value)
  }
  //邮政编码验证
  if(type === "zip") {
    return /^\d{6}$/.test(value)
  }
  return false
}
