//自己实现promise的finally
Promise.prototype.finally = function(callback){
  return this.then((value)=>{
    callback(value);
  },(value)=>{
    callback(value);
  });
}