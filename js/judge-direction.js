//判断手势滑动的方向
//节流move方法
function throttle(fn, delay, maxDelay) {
  let timer = null;
  let startTime;
  return function () {
      let context = this, args = arguments, currentTime = +new Date();
      //先清理上一次的调用触发（上一次调用触发事件不执行）
      clearTimeout(timer);
      //如果不存触发时间，那么当前的时间就是触发时间
      if (!startTime) {
          startTime = currentTime;
      }
      //如果当前时间-触发时间大于最大的间隔时间（maxDelay），触发一次函数运行函数
      if (currentTime - startTime >= maxDelay) {
          fn.apply(context, args);
          startTime = currentTime;
      }
      //否则延迟执行
      else {
          timer = setTimeout(function () {
              fn.apply(context, args);
          }, delay);
      }
  };
}

let $body = document.querySelector('body');
let start = {}, end = {};

let touchMove = function(e){
  e.preventDefault();
  console.log('move');
  end.X = e.changedTouches[0].pageX;
  end.Y = e.changedTouches[0].pageY;
  judgeDirection(start,end);
}
touchMove = throttle(touchMove, 500, 1000);
$body.addEventListener('touchstart',(e)=>{
  e.preventDefault();
  console.log('touch');
  start.X = e.changedTouches[0].pageX;
  start.Y = e.changedTouches[0].pageY;
  // console.log(start);
}, {passive: false});

$body.addEventListener('touchmove',touchMove,{ passive: false });

function judgeDirection(startPoint,endPoint){
  let relativePoint = {X: endPoint.X-startPoint.X, Y: endPoint.Y-startPoint.Y};
  // 以浏览器的Y轴正向为主轴，滑动路径较主轴的逆时针方向偏移角度
  let deg = Math.atan2(relativePoint.X,relativePoint.Y)*180/Math.PI;
//   console.log(deg);
  let distance = Math.sqrt((startPoint.X - endPoint.X)*(startPoint.X - endPoint.X) + (startPoint.Y - endPoint.Y)*(startPoint.Y - endPoint.Y));
  console.log(distance)
  if(distance<2){
    //滑动距离太小
    return;
  }
  //区间范围(-180~180]
  if((deg >-180 && deg <=-135) || (deg<=180 && deg>135)){
      console.log('up');
  }else if(deg>45 && deg<=135){
      console.log('right');
  }else if(deg>-45 && deg<=45){
      console.log('bottom');
  }else{
      console.log('left');
  }
}