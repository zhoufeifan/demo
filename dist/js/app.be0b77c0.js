(function(t){function e(e){for(var a,r,s=e[0],c=e[1],u=e[2],d=0,h=[];d<s.length;d++)r=s[d],i[r]&&h.push(i[r][0]),i[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(h.length)h.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,s=1;s<n.length;s++){var c=n[s];0!==i[c]&&(a=!1)}a&&(o.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},i={app:0},o=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/demo/dist/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"09f3":function(t,e,n){"use strict";var a=n("4f43"),i=n.n(a);i.a},"1ae2":function(t,e,n){},2560:function(t,e,n){"use strict";var a=n("3e59"),i=n.n(a);i.a},2872:function(t,e,n){"use strict";var a=n("ed64"),i=n.n(a);i.a},"301d":function(t,e,n){},"3e59":function(t,e,n){},"4f43":function(t,e,n){},"511f":function(t,e,n){"use strict";var a=n("301d"),i=n.n(a);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("keep-alive",[t.$route.meta.keepAlive?n("router-view"):t._e()],1),t.$route.meta.keepAlive?t._e():n("router-view")],1)},o=[],r=(n("5c0b"),n("2877")),s={},c=Object(r["a"])(s,i,o,!1,null,null,null),u=c.exports,l=n("8c4f"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("h1",[t._v("DEMO 列表")]),n("div",{attrs:{id:"nav"}},[n("ul",[n("li",[n("router-link",{attrs:{to:"/red-packet"}},[t._v("红包动画优化")])],1),n("li",[n("router-link",{attrs:{to:"/move-direction"}},[t._v("滑动方向判断")])],1),n("li",[n("router-link",{attrs:{to:"/number-input"}},[t._v("数字输入框")])],1),n("li",[n("router-link",{attrs:{to:"/lazyload"}},[t._v("图片懒加载")])],1),n("li",[n("router-link",{attrs:{to:"/progress-bar"}},[t._v("进度条")])],1),n("li",[n("router-link",{attrs:{to:"/slide-bar-list"}},[t._v("左滑删除")])],1),n("li",[n("router-link",{attrs:{to:"/message-director"}},[t._v("消息机制")])],1),n("li",[n("router-link",{attrs:{to:"/demo"}},[t._v("demo")])],1),n("li")])])])},h=[],f=(n("c260"),{}),m=Object(r["a"])(f,d,h,!1,null,"ec676e68",null),p=m.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"main-container"},[t.old?n("div",{staticClass:"old-container container"},[n("h2",{staticClass:"title",on:{click:t.toggle}},[t._v("点击查看优化后效果")]),n("demo1")],1):t._e(),t.old?t._e():n("div",{staticClass:"new-container container"},[n("h2",{staticClass:"title",on:{click:t.toggle}},[t._v("点击查看优化前效果")]),n("demo2")],1)])},g=[],b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{ref:"container",staticClass:"container"})},_=[],k=n("1209"),w={name:"demo1",mounted:function(){this.container=this.$refs.container,this.height=this.container.clientHeight,this.width=this.container.clientWidth,this.redPacketHeight=78,this.redPacketWidth=63,this.start()},methods:{start:function(){this.running=!0,this.drop(1500),this.drop(1e3),this.drop(2e3)},stop:function(){this.running=!1},drop:function(t){var e=this;if(this.running){var n=document.createElement("div");n.className="red-packet-container old";var a=document.createElement("div");a.className="red-packet",n.appendChild(a);var i=Math.round(Math.random()*(this.width-this.redPacketWidth));n.style.left=i+"px",n.addEventListener("click",function(t){t.preventDefault(),a.className="red-packet opened",setTimeout(function(){n.remove()},300)}),this.container.appendChild(n);var o=this.height+this.redPacketHeight,r=Math.round(180*(Math.random()-.5)),s=Math.round(180*(Math.random()-.5)),c=Math.round(180*(Math.random()-.5));Object(k["a"])({targets:n,translateY:o,duration:t,elasticity:0,easing:"linear",rotateX:r,rotateY:s,rotateZ:c}).finished.then(function(){n.remove()});var u=500+Math.round(100*Math.random());setTimeout(function(){e.drop(t)},u)}}}},y=w,P=(n("be96"),Object(r["a"])(y,b,_,!1,null,"94ce99b2",null)),x=P.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{ref:"container",staticClass:"container"})},M=[],j={name:"demo2",mounted:function(){this.container=this.$refs.container,this.height=this.container.clientHeight,this.width=this.container.clientWidth,this.redPacketHeight=78,this.redPacketWidth=63,this.currentRedPacket=null,this.createRedPacket(),this.start()},methods:{createRedPacket:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,e=document.createDocumentFragment(),n=0;n<t;n++){var a=document.createElement("div");a.className="red-packet-container new";var i=document.createElement("div");i.className="red-packet",a.appendChild(i),e.appendChild(a)}this.currentRedPacket=e.firstChild,this.container.appendChild(e)},start:function(){this.running=!0,this.drop(1500),this.drop(1e3),this.drop(2e3)},stop:function(){this.running=!1},drop:function(t){var e=this,n=this.currentRedPacket;if(this.running&&n){var a=Math.round(Math.random()*(this.width-this.redPacketWidth));n.style.left=a+"px",n.style.transitionDuration=t/1e3+"s",n.addEventListener("click",function(t){t.preventDefault(),n.firstChild.className="red-packet opened",setTimeout(function(){n.remove()},300)});var i=this.height+this.redPacketHeight,o=Math.round(180*(Math.random()-.5)),r=Math.round(180*(Math.random()-.5)),s=Math.round(180*(Math.random()-.5));setTimeout(function(){n.style.transform="translateY(".concat(i,"px) rotateX(").concat(o,"deg) rotateY(").concat(r,"deg) rotateZ(").concat(s,"deg)")},50),setTimeout(function(){n.remove()},t+50);var c=500+Math.round(100*Math.random());n.nextElementSibling?this.currentRedPacket=n.nextElementSibling:this.createRedPacket(50),setTimeout(function(){e.drop(t)},c)}}}},X=j,Y=(n("09f3"),Object(r["a"])(X,C,M,!1,null,"7c944368",null)),O=Y.exports,E={name:"ReadPacket",components:{demo1:x,demo2:O},mounted:function(){},methods:{toggle:function(){this.old=!this.old}},data:function(){return{old:!1}}},$=E,z=(n("9294"),n("e9ed"),Object(r["a"])($,v,g,!1,null,"7d01c209",null)),T=z.exports,S=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},L=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("p",{staticClass:"child"})])}],I=n("2f62"),R={name:"demo",components:{},created:function(){},mounted:function(){var t=new Blob([document.querySelector("#worker").textContent]),e=window.URL.createObjectURL(t),n=new Worker(e);n.onmessage=function(t){console.log(t.data)},n.postMessage("Work done!")},computed:{},methods:{nima:function(){this.aaa="nn"}},data:function(){return{aaa:"aa"}}},B=R,D=(n("2872"),Object(r["a"])(B,S,L,!1,null,"0978cc85",null)),W=D.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("h1",[t._v("移动端滑动手势判断")]),n("div",{staticClass:"area",on:{touchstart:t.touch,touchmove:function(e){return e.stopPropagation(),t.move(e)}}},[t._v("请滑动改区域")]),n("p",{staticClass:"result"},[t._v(t._s(t.direction))])])},F=[],H=n("bd86"),U=n("795b"),q=n.n(U),A=n("4aa6"),J=n.n(A);function Z(t,e){var n=-1/0,a=null;return function(){var i=+new Date,o=this,r=arguments;i-n>=e?(n=i,t.apply(o,r)):(clearTimeout(a),a=setTimeout(function(){n=i,t.apply(o,r)},e))}}var G=J()(null);function K(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return G[t]||(G[t]=new q.a(function(n){var a=document.createElement("script");a.type="text/javascript",a.readyState?a.onreadystatechange=function(){"loaded"!==a.readyState&&"complete"!==a.readyState||(a.onreadystatechange=null,n())}:a.onload=n,a.src=t,e?document.head.appendChild(a):document.body.appendChild(a)})),G[t]}function Q(t,e){var n={X:e.X-t.X,Y:e.Y-t.Y},a=180*Math.atan2(n.X,n.Y)/Math.PI,i=Math.sqrt((t.X-e.X)*(t.X-e.X)+(t.Y-e.Y)*(t.Y-e.Y));if(!(i<2))return a>-180&&a<=-135||a<=180&&a>135?"up":a>45&&a<=135?"right":a>-45&&a<=45?"bottom":"left"}var V=Object(H["a"])({name:"MoveDirection",components:{},mounted:function(){},methods:{},data:function(){return{direction:"",startPoint:{},endPoint:{}}}},"methods",{move:Z(function(t){console.log("move"),this.endPoint.X=t.changedTouches[0].pageX,this.endPoint.Y=t.changedTouches[0].pageY,this.direction=Q(this.startPoint,this.endPoint)},500,1e3),touch:function(t){this.disableMove||(console.log("touch"),this.startPoint.X=t.changedTouches[0].pageX,this.startPoint.Y=t.changedTouches[0].pageY)}}),tt=V,et=(n("63bc"),Object(r["a"])(tt,N,F,!1,null,"5478c4b0",null)),nt=et.exports,at=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"input-container"},[n("p",[t._v("该输入框只支持输入整型或者浮点数字")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"},{name:"focus",rawName:"v-focus"}],staticClass:"input-default",domProps:{value:t.text},on:{input:[function(e){e.target.composing||(t.text=e.target.value)},t.inputFilter]}})])},it=[],ot=(n("a481"),{name:"demo",mounted:function(){},methods:{inputFilter:function(t){var e=t.target.value;if(!/^-?(([1-9]\d*|0)(\.\d*)?)?$/.test(e)){var n="";e.replace(/^(-?(([1-9]\d*|0)(\.\d*)?)?).+$/,function(t,e){n=e}),this.text=n}}},data:function(){return{text:""}}}),rt=ot,st=(n("f765"),Object(r["a"])(rt,at,it,!1,null,"2f20598f",null)),ct=st.exports,ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"list-container"},t._l(t.list,function(e){return n("li",{key:e.title,ref:"moveBar",refInFor:!0,staticClass:"item",attrs:{id:"nima"},on:{touchstart:t.touch,touchmove:function(e){return e.stopPropagation(),t.move(e)},touchend:function(e){return e.stopPropagation(),t.end(e)}}},[n("figure",[n("img",{attrs:{src:e.avatar,width:"50px;"}})]),n("section",{staticClass:"content-container"},[n("h1",{staticClass:"title"},[t._v(t._s(e.title))]),n("p",{staticClass:"content"},[t._v(t._s(e.content))]),n("time",[t._v(t._s(e.date))])]),n("div",{staticClass:"delete"},[t._v("删除")])])}),0)},lt=[],dt=-100,ht=0,ft=(ht+dt)/2;function mt(t,e){var n={X:e.X-t.X,Y:e.Y-t.Y},a=180*Math.atan2(n.X,n.Y)/Math.PI,i=Math.sqrt((t.X-e.X)*(t.X-e.X)+(t.Y-e.Y)*(t.Y-e.Y));if(!(i<2))return a>-180&&a<=-135||a<=180&&a>135?"up":a>45&&a<=135?"right":a>-45&&a<=45?"bottom":"left"}var pt={name:"SlideBarList",mounted:function(){},data:function(){return{list:[{title:"邀请函",avatar:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2618629603,1903483016&fm=26&gp=0.jpg",date:"3月10日",content:"发顺丰撒旦副书记奥利弗就烦死了开飞机睡懒觉广东韶关发生的副驾驶大立科技斐林试剂"}],previousPoint:{},currentPoint:{},offset:0}},methods:{touch:function(t){this.previousPoint.X=t.changedTouches[0].pageX,this.previousPoint.Y=t.changedTouches[0].pageY},goBack:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=.2;if(!(this.offset>=ht||this.offset<=dt)){var a=3+n*e*e;this.offset>ft?this.offset=Math.min(ht,this.offset+a):this.offset=Math.max(dt,this.offset-a),this.$refs.moveBar[0].style.webkitTransform="translateX(".concat(this.offset,"px)"),window.requestAnimationFrame(function(){t.goBack(e+1)})}},move:function(t){this.currentPoint.X=t.changedTouches[0].pageX,this.currentPoint.Y=t.changedTouches[0].pageY;var e=mt(this.previousPoint,this.currentPoint);if("up"!==e&&"down"!==e&&(t.preventDefault(),("left"!==e||-80!==this.offset)&&("right"!==e||0!==this.offset))){var n=this.offset+(this.currentPoint.X-this.previousPoint.X);n=Math.max(dt,Math.min(ht,n)),this.offset=n,this.previousPoint.X=this.currentPoint.X,this.previousPoint.Y=this.currentPoint.Y,this.$refs.moveBar[0].style.webkitTransform="translateX(".concat(n,"px)")}},end:function(){this.goBack()}}},vt=pt,gt=(n("5d80"),Object(r["a"])(vt,ut,lt,!1,null,"7126e3a1",null)),bt=gt.exports,_t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"page-container"},t._l(t.list,function(t){return n("LazyImage",{key:t,staticClass:"image-section",attrs:{imgUrl:t}})}),1)},kt=[],wt=n("15b8"),yt=n.n(wt),Pt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{ref:"container",staticClass:"image-container"})},xt=[],Ct=(n("ac6a"),n("96cf"),n("3b8d")),Mt=(window.screen.height,0),jt={name:"LazyImage",props:{imgUrl:String},mounted:function(){var t=Object(Ct["a"])(regeneratorRuntime.mark(function t(){var e,n=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if("function"===typeof IntersectionObserver){t.next=3;break}return t.next=3,K("//polyfill.io/v2/polyfill.min.js?features=IntersectionObserver");case 3:e=new IntersectionObserver(function(t){t.forEach(function(t){var a=t.boundingClientRect.top,i=t.rootBounds.height;a<i+Mt&&(n.lazyLoadImg(),e.disconnect())})}),e.observe(this.$refs.container);case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:{lazyLoadImg:function(){var t=this,e=this.$refs.container;if(e){var n=new Image;n.src=this.imgUrl,n.onload=function(){e.style.backgroundSize="cover",e.style.backgroundImage="url(".concat(t.imgUrl,")")}}}}},Xt=jt,Yt=(n("a593"),Object(r["a"])(Xt,Pt,xt,!1,null,"c207cc4a",null)),Ot=Yt.exports,Et=["http://zff-img.lshwn.cn/images/0.jpg","http://zff-img.lshwn.cn/images/1.jpg","http://zff-img.lshwn.cn/images/2.jpg","http://zff-img.lshwn.cn/images/3.jpg","http://zff-img.lshwn.cn/images/4.jpg","http://zff-img.lshwn.cn/images/5.jpg","http://zff-img.lshwn.cn/images/6.jpg","http://zff-img.lshwn.cn/images/7.jpg","http://zff-img.lshwn.cn/images/8.jpg","http://zff-img.lshwn.cn/images/9.jpg"],$t={name:"LazyLoadPage",components:{LazyImage:Ot},mounted:function(){},data:function(){return{list:yt()(Et)}}},zt=$t,Tt=(n("f06e"),Object(r["a"])(zt,_t,kt,!1,null,"81e0baaa",null)),St=Tt.exports,Lt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"page-container"},[n("div",{staticClass:"bar-container"},[n("div",{staticClass:"bar-content",style:{width:t.value+"%"}},[n("div",{staticClass:"streak"})])])])},It=[],Rt={name:"ProgressBar",components:{},mounted:function(){this.change()},methods:{change:function(){this.value>=100||(this.value+=10,setTimeout(this.change,1e3))}},data:function(){return{value:10}}},Bt=Rt,Dt=(n("2560"),Object(r["a"])(Bt,Lt,It,!1,null,"3850e351",null)),Wt=Dt.exports,Nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"page-container"})},Ft=[],Ht={name:"MessageDirector",mounted:function(){},methods:{},data:function(){return{}}},Ut=Ht,qt=(n("511f"),Object(r["a"])(Ut,Nt,Ft,!1,null,"721b01e2",null)),At=qt.exports;a["a"].use(l["a"]);var Jt=new l["a"]({mode:"hash",base:"/demo/dist/",routes:[{path:"/",meta:{title:"首页"},name:"home",component:p},{meta:{title:"红包雨"},path:"/red-packet",name:"redPacket",component:T},{meta:{title:"滑动方向"},path:"/move-direction",name:"moveDirection",component:nt},{path:"/demo",meta:{title:"demo"},name:"demo",component:W},{meta:{title:"数字输入框"},path:"/number-input",name:"numberInput",component:ct},{meta:{title:"进度条"},path:"/progress-bar",name:"progressBar",component:Wt},{meta:{title:"滑动条"},path:"/slide-bar-list",name:"slideBarList",component:bt},{meta:{title:"懒加载"},path:"/lazyload",name:"LazyLoad",component:St},{meta:{title:"消息机制"},path:"/message-director",name:"MessageDirector",component:At}]});Jt.beforeEach(function(t,e,n){document.title=t.meta.title,n()});var Zt=Jt;a["a"].use(I["a"]);var Gt={namespaced:!0,state:{name:"zjou"},mutations:{updateSchool:function(t,e){t.name=e}}},Kt={namespaced:!0,state:{name:"caibao"},mutations:{updateCompany:function(t,e){t.name=e}}},Qt=new I["a"].Store({state:{name:"zhoufeifan"},modules:{school:Gt,work:Kt}});n("7f7f");function Vt(t,e){var n=J()(null),a=J()(null);t.component("global-slot",{props:{name:{type:String,required:!0}},created:function(){if(n[this.name])throw new Error("global slot component(".concat(this.name,") has already existed!"));n[this.name]=this},destroyed:function(){n[this.name]=void 0},render:function(){var t=a[this.name];if(t)return t.$slots.default&&t.$slots.default[0]}}),t.component("global-plug",{props:{name:{type:String,required:!0}},created:function(){a[this.name]=this},render:function(){var t=n[this.name];t&&t.$forceUpdate()}})}var te={install:Vt};a["a"].use(te);var ee={},ne=[{name:"focus",config:{inserted:function(t){t.focus()}}}];ne.forEach(function(t){a["a"].directive(t.name,t.config)}),a["a"].config.productionTip=!1,new a["a"]({router:Zt,store:Qt,plugin:ee,render:function(t){return t(u)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var a=n("5e27"),i=n.n(a);i.a},"5d80":function(t,e,n){"use strict";var a=n("6d92"),i=n.n(a);i.a},"5e27":function(t,e,n){},"63bc":function(t,e,n){"use strict";var a=n("e45b"),i=n.n(a);i.a},"6b02":function(t,e,n){},"6d92":function(t,e,n){},9294:function(t,e,n){"use strict";var a=n("1ae2"),i=n.n(a);i.a},"9c6d":function(t,e,n){},a37c:function(t,e,n){},a593:function(t,e,n){"use strict";var a=n("c852"),i=n.n(a);i.a},bcfd:function(t,e,n){},be96:function(t,e,n){"use strict";var a=n("9c6d"),i=n.n(a);i.a},c260:function(t,e,n){"use strict";var a=n("6b02"),i=n.n(a);i.a},c852:function(t,e,n){},e2be:function(t,e,n){},e45b:function(t,e,n){},e9ed:function(t,e,n){"use strict";var a=n("bcfd"),i=n.n(a);i.a},ed64:function(t,e,n){},f06e:function(t,e,n){"use strict";var a=n("a37c"),i=n.n(a);i.a},f765:function(t,e,n){"use strict";var a=n("e2be"),i=n.n(a);i.a}});
//# sourceMappingURL=app.be0b77c0.js.map