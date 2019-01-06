//钉钉面试题，节流批量请求
//现在有一个 Ajax 接口，根据用户 uid 获取用户 profile 信息，是一个批量接口。我把这个 ajax 请求封装成以下的异步函数
function requestUserProfile (uidList){  // uidList 是一个数组，最大接受 100 个 uid
  // 这个方法的实现不能修改
  console.log('执行http请求');
  /** 先去重 */
  var uidList = uidList || [];
  var _tmp = {};
  var _uidList = [];
  uidList.forEach(function(uid){
    if(!_tmp[uid]){
      _tmp[uid] = 1;
      _uidList.push(uid);
    }
  })
  _tmp = null;
  uidList = null;
  
  return Promise.resolve().then(function(){
    return new Promise(function(resolve, reject){
      setTimeout(function(){ // 模拟 ajax 异步，1s 返回
        resolve();
      }, 1000);
    }).then(function(){
      var profileList = _uidList.map(function(uid){
        if(uid < 0){  // 模拟 uid 传错，服务端异常，获取不到部分 uid 对应的 profile 等异常场景
          return null;
        }else{
          return {
            uid: uid,
            nick: uid + 'Nick',
            age: 18
          }
        }
      });
      return profileList.filter(function(profile){
        return profile !== null;
      });
    });
  });
}
// 现在我们有很多业务都需要根据 uid 获取 userProfile , 大多数业务的需求都是给一个 uid，获取 profile 。
// 为了性能，我们需要把这个单个的请求合并成批量请求。

// 例如，现在页面上 A 模块需要获取 uid 为 1 的 profile，B 模块需要 uid 为 2 的 profile，
// C 模块需要获取 uid 为 1 的profile 这三个模块会单独调用下面这个方法获取 profile，
// 假设这三次调用的时间非常接近(100ms 以内)，最终要求只发送一个 ajax 请求（只调用一次 requestUserProfile )，
// 拿到这三个模块需要的 profile

// 完成以下方法，接收一个参数 uid，返回一个 Promise，当成功请求到 profile 的时候， resolve 对应的profile , 请求失败 reject
// 例如  getUserProfile(1).then(function(profile){ console.log(profile.uid === 1) // true });  // 假设请求成功了。

var getUserProfile = function(uid){
  // 100ms 作为状态收集的周期
  function ProxyFactory(){
    this.uidList = []
    this.uidCache = {}
  }
  ProxyFactory.prototype.getUser = function(uid){
    if (!this.uidCache[uid]) {
      this.uidList.push(uid)
      this.uidCache[uid] = true
    }
    this.batchRequest =  this.batchRequest
    || new Promise((resolve)=>{
        setTimeout(()=>{
          console.log(`代理方法执行完毕,批量请求id为${this.uidList.join(',')}`)
          requestUserProfile(this.uidList).then(resolve)
        },100)
      })
    return this.batchRequest
  }
  let requestProxy = null
  let startTime = null
  // todo 并发请求限制在8以内
  getUserProfile = function (uid) {
    let currnetTime = +new Date()
    startTime = startTime || currnetTime
    requestProxy = requestProxy || new ProxyFactory()
    // 时间超过 100ms 或者请求数量超过100, 开启新的请求代理
    if (currnetTime - startTime > 100 || requestProxy.uidList.length >= 100) {
      startTime = currnetTime
      requestProxy = new ProxyFactory()
    }
    return requestProxy.getUser(uid).then(userList =>{
      return userList.filter(item => item.uid === uid)[0] || {}
    })
  }
  return getUserProfile(uid)
}

for(let id = 0; id < 200; id++ ){
let uid = id % 5 ? id : 1;
getUserProfile(uid).then(profile=>{console.log(`id为${uid}认证结果`,profile.uid === uid)});
}

setTimeout(()=>{
for(let id of [2,4]){
  getUserProfile(id).then(profile=>{console.log(`id为${id}认证结果`,profile.uid === id)});
}
},2000);
