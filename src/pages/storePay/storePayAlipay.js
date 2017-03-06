require('./storePayAlipay.scss');
$(function () {
    var input = $('#moneyInput');
    var numberKeyboard = $('#numberKeyboard');
    var clearNum = $('#clearNum');
    var payBtn = $('#payBtn');
    var confirmBtn = $('#confirm');
    var cover = $('#cover');
    var topContent = $('#topContent');
    var remark = $('#remark');
    var current_value;
    var money_value = new Array();
    var keyboardShow = false;
    var deleteIcon = require('../../images/delete.png');
    var unitBase = 37.5;//定义rem布局基准
    clearNum.attr('src', deleteIcon);

    function pxToRem(px) {
        console.log(px / unitBase);
        return px / unitBase;
    }

    //将金额转化为分为单位
    function valueTransform() {
        //复制金额数组
        var temp_value = money_value.concat();
        var index = temp_value.indexOf('.');
        var length = temp_value.length;
        //不存在小数点，则末尾添加2个0
        if (index == -1)
            temp_value.push('00');

        //小数点在末尾，直接删除
        else if (index == length - 1) {
            temp_value.splice(index, 1);
            temp_value.push('00');
        }

        //一位小数,末尾添一个零
        else if (index == length - 2) {
            temp_value.splice(index, 1);
            temp_value.push('0');
        }

        //两位小数，直接去掉小数点
        else if (index == length - 3)
            temp_value.splice(index, 1);

        return (parseInt(temp_value.join(''), 10));
    }

    //键盘动画操作
    function moveKeyBoard(type) {
        if (type == "show") {
            if (keyboardShow === true) return;
            keyboardShow = true;
            numberKeyboard.velocity(
                {bottom: "0rem"},
                {delay: 100, duration: 300, easing: "ease"}
            );
            topContent.velocity({top: pxToRem(-20) + 'rem'}, {delay: 100, duration: 300, easing: "ease"});
        } else {
            if (keyboardShow === false) return;
            keyboardShow = false;
            numberKeyboard.velocity("reverse");
            topContent.velocity("reverse");
        }
    }

    //发起付款
    function pay() {
        cover.show();
        return;
        setTimeout(function () {
            cover.hide();
            alert("付款成功");
        },1000);
    }

    //根据校验输入框的金额来控制页面的样式
    function checkInput(value) {
        if (value == "") {
            clearNum.hide();
        } else {
            clearNum.show();
        }
        //限制金额为1000万
        var Rxp = /^(([1-9]\d{0,8})|0)(\.\d{1,2})?$/;
        if (Rxp.test(value) && value != "0") {
            payBtn.addClass('active');
            confirmBtn.removeClass('disabled');
        }
        else {
            payBtn.removeClass('active');
            confirmBtn.addClass('disabled');
        }
    }

    input.focus(function (e) {
        e.preventDefault();
        input.blur();
        moveKeyBoard("show");
        return false;
    });
    remark.focus(function (e) {
        e.preventDefault();
        moveKeyBoard("hide");
    });
    //清除按钮
    clearNum.click(function (e) {
        e.preventDefault();
        input.val('');
        money_value.length = 0;
        checkInput(input.val());
    });

    $('body').on("touchmove", function (e) {
        e.preventDefault();
    });

    //输入数字和点
    $('.num-btn').on("touchstart", function (e) {
        e.preventDefault();
        var btn = $(e.target);
        btn.css('background-color', '#cccccc');
        current_value = btn.data('value');
        //输入长度超过10位
        if (money_value.length > 9)
            return;
        //小数点在第一位
        if (current_value == '.' && money_value.length == 0)
            return;
        //首字符为0的情况下，第二位数值不为点
        if (current_value != '.' && money_value.length == 1 && money_value[0] == '0')
            return;
        //不能出现2个点
        if (current_value == '.' && money_value.indexOf('.') > 0)
            return;
        //小数点后只允许存在2位
        var index = money_value.indexOf('.');
        if (index > 0) {
            if ((money_value.length - index) == 3)
                return
        }
        money_value.push(current_value);
        input.val(money_value.join(''));
        checkInput(input.val());
    });
    //键盘收起按钮
    $('#keyboard').on('touchstart', function (e) {
        e.preventDefault();
        $(e.target).css('background-color', '#cccccc');
        moveKeyBoard("hide");
    });
    //撤销按钮
    $('.back').on("touchstart", function (e) {
        e.preventDefault();
        $(e.target).css('background-color', '#cccccc');
        if (money_value.length == 0)
            return;
        money_value.length = money_value.length - 1;
        input.val(money_value.join(''));
        checkInput(input.val());
    });

    //触摸或滑动后键盘的响应
    $('.small-btn,.back').on("touchmove", function (e) {
        e.preventDefault();
        $(e.target).css('background-color', '#ffffff');
    });

    $('.small-btn,.back').on("touchend", function (e) {
        e.preventDefault();
        $(e.target).css('background-color', '#ffffff');
    });
    confirmBtn.on("touchstart", function (e) {
        e.preventDefault();
        if (confirmBtn.hasClass('disabled')) {
            return;
        }
        moveKeyBoard('hide');
    });

    //点击付款按钮
    payBtn.click(function (e) {
        e.preventDefault();
        if (!payBtn.hasClass('active')) {
            return;
        }
        //将金额转化为分为单位
        var final_value = valueTransform();
        pay(final_value);
    });
});