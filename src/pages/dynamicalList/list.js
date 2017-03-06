require('./list.scss');
$(function () {
    var cacheData = [];
    var $helpList = $('#helpList');
    var roleType = $('#roleType').val();
    var currentPage = 1; //开始页为1
    var totalPage = 100000; //总页数为无限大

    var beforeScrollTop = document.body.scrollTop;
    //判断是否是向下滚动
    function isScrollDown() {
        var afterScrollTop = document.body.scrollTop,
            delta = afterScrollTop - beforeScrollTop;
        if (delta === 0) return false;
        beforeScrollTop = afterScrollTop;
        return delta > 0;
    }

    //判断是否滚动到底了
    function scrollHandler() {
        if (isScrollDown()) {
            var sHeight = document.documentElement.scrollTop || document.body.scrollTop; //滚动高度
            var wHeight = document.documentElement.clientHeight; //设备窗口高度
            var listHeight = $helpList.height();
            if (listHeight - (sHeight + wHeight) < 20) {
                appendDataList();
            }
        }
    }

    function throttle(method, delay, duration) {
        var timer = null,
            begin = new Date();
        return function () {
            var context = this,
                args = arguments,
                end = new Date();
            clearTimeout(timer);
            if (end - begin >= duration) {
                method.apply(context, args);
                begin = end;
            } else {
                timer = setTimeout(function () {
                    method.apply(context, args);
                }, delay);
            }
        }
    }

    //函数节流延迟500毫秒执行，执行间隔设为800毫秒
    window.onscroll = throttle(scrollHandler, 500, 800); //函数节流
    function getDataList() {
        setTimeout(function () {
            cacheData = [
                {
                    "title": "哈哈哈哈哈哈",
                    "linkAddress": "www.baidu.com"
                }, {
                    "title": "哈哈哈哈哈哈",
                    "linkAddress": "www.baidu.com"
                },{
                    "title": "哈哈哈哈哈哈",
                    "linkAddress": "www.baidu.com"
                },{
                    "title": "哈哈哈哈哈哈",
                    "linkAddress": "www.baidu.com"
                },{
                    "title": "哈哈哈哈哈哈",
                    "linkAddress": "www.baidu.com"
                },{
                    "title": "哈哈哈哈哈哈",
                    "linkAddress": "www.baidu.com"
                },{
                    "title": "哈哈哈哈哈哈",
                    "linkAddress": "www.baidu.com"
                },{
                    "title": "哈哈哈哈哈哈",
                    "linkAddress": "www.baidu.com"
                },{
                    "title": "哈哈哈哈哈哈",
                    "linkAddress": "www.baidu.com"
                },{
                    "title": "哈哈哈哈哈哈",
                    "linkAddress": "www.baidu.com"
                },{
                    "title": "哈哈哈哈哈哈",
                    "linkAddress": "www.baidu.com"
                },{
                    "title": "哈哈哈哈哈哈",
                    "linkAddress": "www.baidu.com"
                },{
                    "title": "哈哈哈哈哈哈",
                    "linkAddress": "www.baidu.com"
                },{
                    "title": "哈哈哈哈哈哈",
                    "linkAddress": "www.baidu.com"
                }
            ];
        }, 1000);
    }

    //添加列表
    function appendDataList() {
        if (currentPage > totalPage) return;
        getDataList();
        var tpl = '<li class="mod-help-list"><a href="$link">$title</a><i class="arrow"></i></li>';
        var content = '';
        for (var i = 0; i < cacheData.length; i++) {
            content += tpl.replace("$title", cacheData[i].title + "1").replace("$link", cacheData[i].linkAddress);
        }
        $helpList.append(content);
    }

    getDataList();
});