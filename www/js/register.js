//点击输入框隐藏在input之上的文本
var txt = $('section form .ipt');
var ipt = $('section form input');
var re;
txt.click(function() {
    $(this).find('txt').hide();
    $(this).find('txt').next().trigger('focus');
    //显示提示
    if (!$(this).find('input').val()) {
        $(this).parent().next().children().eq(0).show();
    }
    switch ($(this).find('input').attr('name')) {
        case 'user':
            re = /^[a-zA-Z0-9-_\u4e00-\u9fa5]{4,20}$/;
            break;
        case 'psw':
            re = /^[a-zA-Z0-9+-/]{6,20}$/;
            break;
        case 'phone':
            re = /^1[3578]\d{9}$/;
            break;
        default:
            re = /^[◙]$/
            break;

    }
})
ipt.focusout(function() {
    if (!$(this).val()) {
        $(this).prev().show();
    }
    $(this).parents('.form-group').next().children().eq(0).hide();
})

//判断输入框输入的值是否符合正则

//var user = /^[a-zA-Z0-9-_\u4e00-\u9fa5]{4,20}$/;
//var psw = /^[a-zA-Z0-9+-*/]{6,20}$/
$('.form-groupX input').on('input', function() {

    if ($(this).val()) { //第二个条件是用来判断两次密码是否一致	
        var flag = $(this).attr('name') == 'checkPsw';
        if (re.test($(this).val()) || (flag && $(this).val() == $('input[name=psw]').val())) {
            $(this).parents('.form-group').next().children().eq(0).hide();
            $(this).parents('.form-group').next().children().eq(1).hide();
            $(this).parents('.form-group').css('border', '1px solid gainsboro');
            $(this).parents('.form-group').find('.icon').show();
        } else {
            //			console.log($(this).parents('.form-group').next().children().eq(0))
            $(this).parents('.form-group').next().children().eq(0).hide();
            $(this).parents('.form-group').next().children().eq(1).show();
            $(this).parents('.form-group').css('border', '1px solid red');
            $(this).parents('.form-group').find('.icon').hide();
        }
    } else {
        $(this).parents('.form-group').next().children().eq(0).show();
        $(this).parents('.form-group').next().children().eq(1).hide();
        $(this).parents('.form-group').css('border', '1px solid gainsboro');
        $(this).parents('.form-group').find('.icon').hide();
    }

    //监听两次密码
    watchCheckPSW()
})


function watchCheckPSW() {
    //	console.log($('input[name=checkPsw]').val(),$('input[name=psw]').val())
    if (!$('input[name=checkPsw]').val()) return;
    if ($('input[name=checkPsw]').val() == $('input[name=psw]').val()) {
        $('input[name=checkPsw]').parents('.form-group').find('.icon').show();
        $('input[name=checkPsw]').parents('.form-group').next().children().eq(0).hide();
        $('input[name=checkPsw]').parents('.form-group').next().children().eq(1).hide();
        $('input[name=checkPsw]').parents('.form-group').css('border', '1px solid gainsboro');
    } else {
        $('input[name=checkPsw]').parents('.form-group').find('.icon').hide();
        $('input[name=checkPsw]').parents('.form-group').next().children().eq(0).hide();
        $('input[name=checkPsw]').parents('.form-group').next().children().eq(1).show();
        $('input[name=checkPsw]').parents('.form-group').css('border', '1px solid red');
    }
}


//判断字符数字验证码
var code

function checkCode() {
    code = showCode(4);
    console.log('字母数字验证码：' + code)
}
checkCode();


//发送手机验证码
var tel;
var codeTel;

function send(t) {
    tel = $('input[type=tel]').val();
    if (/^1[3578]\d{9}$/.test(tel)) {
        $(t).parents('.form-group').next().children().html('');
        $(t).parents('.form-group').css('border', '1px solid gainsboro');

        //	定义一个变量储存手机验证码
        codeTel = codeStr();
        console.log('短信验证码：' + codeTel);
        console.log('手机号：' + tel)
            //	发送验证码  让后台操作
        $.get("/sendCode?tel=" + tel + "&code=" + codeTel, function(data) {
            if (data == "短信已发送") {
                myInterval();
            } else {
                $('.send-tip').text(data);
            }
        });
        myInterval();
    } else {
        $(t).parents('.form-group').next().children().eq(1).html('<span class="icon"></span>手机号格式不正确').show();
        $(t).parents('.form-group').css('border', '1px solid red')
    }

}


//倒计时
function myInterval() {
    var now = 60;
    $('.send-tip').text("重新发送" + now);
    $('.send-tip').attr("disabled", "disabled");
    var t = setInterval(function() {
        //		$(this).val("重新发送" + (--now));
        --now;
        //		console.log(now);
        if (now <= 0) {
            //			倒计时完了 重新可以发送验证码
            $(".send-tip").text("获取验证码");
            //			发送验证码按钮可用
            $(".send-tip").removeAttr("disabled");
            //			清除定时器
            clearInterval(t);
        } else {
            //			注意 this 是谁
            $(".send-tip").text("重新发送" + now);
        }

    }, 1000);
}

//	生成一个随机的验证码(短信验证码)
function codeStr() {
    var str = "0123456789";
    return str.split('').sort(function() {
        return Math.random() - 0.5;
    }).slice(0, 4).join('');
}


//提交表单
$('form').submit(function(e) {
    e.preventDefault();
    var SzZm = $('.SzZm').val();
    var SjYz = $('.SjYz').val();
    //判断字母数字验证码，是否验证成功
    if (SzZm.toLowerCase() != code.toLowerCase()) {
        $('.SzZm').parents('.form-group').next().children().eq(1).show();
        return;
    } else {
        $('.SzZm').parents('.form-group').next().children().eq(1).hide();
    }
    //判断短信验证码，是否验证成功
    if (SjYz != codeTel) {
        $('.SjYz').parents('.form-group').next().children().eq(1).html('<span class="icon"></span>输入验证码不正确').show();
        return;
    } else {
        $('.SjYz').parents('.form-group').next().children().eq(1).html('').hide();
    }

    $.post('/registerUser', $(this).serialize(), function(data) {
        $('.modal-body').html(data);
        $('#myModal').modal('show').on('hide.bs.modal', function() {
            if (data == '注册成功') {
                location.href = 'login.html'
            } else {
                location.href = 'register.html'
            }
        })

    })
})