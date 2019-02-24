function throttle(fn, delay, maxDelay){
  let startTime = -Infinity // 记录上次触发的时间
  let timer = null
  return function(){
    const currentTime = +new Date()
    // 保留调用时的this上下文
    let context = this
    // 保留调用时传入的参数
    let args = arguments
    if(currentTime - startTime >= maxDelay){
      startTime = currentTime
      fn.apply(context, args)
    }else {
      clearTimeout(timer)
      timer = setTimeout(function () {
        startTime = currentTime
         fn.apply(context, args)
       }, delay)
    }
  }
}
export {
  throttle
}