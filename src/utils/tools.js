export function throttle(fn, delay){
  let startTime = -Infinity // 记录上次触发的时间
  let timer = null
  return function(){
    const currentTime = +new Date()
    // 保留调用时的this上下文
    let context = this
    // 保留调用时传入的参数
    let args = arguments
    if(currentTime - startTime >= delay){
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
const jsLoadMap = Object.create(null)
export function jsLoader(url, toHead = false) {
  if (!jsLoadMap[url]) {
    jsLoadMap[url] = new Promise(resolve => {
      const script = document.createElement('script')
      script.type = 'text/javascript'

      if (script.readyState) { // IE
        script.onreadystatechange = function () {
          if (script.readyState === "loaded" || script.readyState === "complete") {
            script.onreadystatechange = null
            resolve()
          }
        }
      } else { // Others: Firefox, Safari, Chrome, and Opera
        script.onload = resolve
      }

      script.src = url
      if (toHead) {
        document.head.appendChild(script);
      } else {
        document.body.appendChild(script)
      }

    })
  }
  return jsLoadMap[url]
}
