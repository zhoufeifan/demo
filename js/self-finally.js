//自己实现 promise 的 finally
Promise.prototype.finally = function(callback){
  let P = this.constructor;
  return this.then(
    value  => P.resolve(callback()).then(() => value),
    reason => P.resolve(callback()).then(() => { throw reason })
  );
}
