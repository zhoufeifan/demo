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


var getUserProfile = function (uid){
  function RequestProxy(){
    this.uidList = [];
    this.userInfo = {};
    this.promiseProxy = null;
  }
  let count = 0;
  let uidMap = {};
  RequestProxy.prototype.request = function(uid){
    this.uidList.push(uid);
    if(!this.promiseProxy){
        this.promiseProxy = new Promise((resolve)=>{
          setTimeout(async()=>{
            let list = this.uidList.concat();
            let result = await requestUserProfile(list);
            console.log(`代理方法执行完毕,批量请求id为${list.join(',')}`);
            resolve(result);
          },100);
      });
    }
    return this.promiseProxy;
  }
  let startTime = null;
  let currentTime = null;

  let batchRequest = null;
  getUserProfile = function(uid){
    currentTime = + new Date();
    if (!startTime) {
      startTime = currentTime;
    }
    if(!uidMap[uid]){
      //保存uid
      count ++;
      uidMap[uid] = true;
    }
    if(currentTime - startTime >100 || count>100){
      //如果两次请求的时差超过100ms 或者 数量超过100，则清空数据开启新的批量请求组
      count = 1;
      uidMap = {};
      startTime = currentTime;
      batchRequest = null;
    }
    if(!batchRequest){
      batchRequest = new RequestProxy();
    }
    return (batchRequest.request(uid)).then(dataList=>{
        let result = dataList.find(item=>{
            return item.uid === uid;
        });
        return result || {};
    });
  }
  return getUserProfile(uid);
}

// for(let id of [-1]){
//   getUserProfile(id).then(profile=>{console.log(`id为${id}认证结果`,profile.uid === id)});
// }

for(let id = 0; id < 200; id++ ){
let uid = id % 5 ? id : 1;
getUserProfile(uid).then(profile=>{console.log(`id为${uid}认证结果`,profile.uid === uid)});
}

setTimeout(()=>{
for(let id of [2,4]){
  getUserProfile(id).then(profile=>{console.log(`id为${id}认证结果`,profile.uid === id)});
}
},2000);