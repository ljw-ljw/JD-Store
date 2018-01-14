//关闭广告
$('header .close').click(function() {
    $(this).parents('.Adver').fadeOut();
})

//显示定位的省份
$('header .address').hover(function() {
    $('.select-addr').css({
        'display': 'flex'
    });
    $(this).css({
        'background-color': 'white',
    })
}, function() {
    disappear()
});
$('.select-addr .city').click(function() {
    $(this).siblings().removeClass('bg-red').end().addClass('bg-red');
    $('.address .text').text($(this).text());
    disappear()
});

function disappear() {
    $('.select-addr').css({
        'display': 'none'
    });
    $('header .address').css({
        'background-color': '#e3e4e5'
    })
}

//登录账号
if ($.cookie('user')) {
    $('.show-user-login').css({ "display": "none" });
    $(".show-user-name").css({ "display": "block" }).html($.cookie('user'))
    $('#user .lr').html($.cookie('user')).css({ 'color': 'red', 'width': '65px', 'text-align': 'center' });
    $('.out').hover(function() {
        $('.out').css({ "display": "block" })
    }, function() {
        $('.out').css({ "display": "none" })
    })
    $('#user').hover(function() {
        $('.out').css({ "display": "block" })
        $(this).css({ "background-color": "#ffffff" })
    }, function() {
        $('.out').css({ "display": "none" })
        $(this).css({ "background-color": "#e3e4e5" })
    })
}
//退出登录
$('#user .out').click(function() {
    $.cookie('user', '', { expires: -1 });
    location.href = '/';
})

//我的京东
$('.my-jd').hover(function() {
    $('.my-jd').css('background-color', 'white')
    $('.my-jindong').css('display', 'flex')
}, function() {
    $('.my-jd').css('background-color', '#e3e4e5')
    $('.my-jindong').css('display', 'none')
})

//客户服务
$('.cus-service').hover(function() {
    $('.cus-service').css('background-color', 'white')
    $('.service').css('display', 'flex');
}, function() {
    $('.cus-service').css('background-color', '#E3E4E5')
    $('.service').css('display', 'none');
})

//网址导航
$('.web-nav-li').hover(function() {
    $('.web-nav').css('display', 'flex');
    $(this).css('background-color', 'white')
}, function() {
    $('.web-nav').css('display', 'none');
    $(this).css('background-color', '#E3E4E5')
});
$('.web-nav').hover(function() {
    $('.web-nav-li').css('background-color', 'white')
    $('.web-nav').css('display', 'flex');
}, function() {
    $('.web-nav').css('display', 'none');
    $('.web-nav-li').css('background-color', '#E3E4E5')
});

//购物车
$('.shop-car').hover(function() {
    $('.car-all').css('display', 'flex');
}, function() {
    $('.car-all').css('display', 'none');
});
$('.car-all').hover(function() {
    $('.car-all').css('display', 'flex');
}, function() {
    $('.car-all').css('display', 'none');
});

//获取商品导航分类信息文字
$.get('/index-top-nav', (data) => {
    for (i = 0; i < data.length; i++) {
        //在ul中添加li
        $('.shop-nav-sort ul').append('<li onmouseenter="sortShow(' + i + ')"></li>')
        for (j = 0; j < data[i].length; j++) {

            //在li中添加a
            if (j == data[i].length - 1) {
                $('.shop-nav-sort li').eq(i).append('<a href="">' + data[i][j] + '</a>')
            } else {
                $('.shop-nav-sort li').eq(i).append('<a href="">' + data[i][j] + '</a><span class="nav-split">/</span>')
            }
        }
    }
})

//家电-hover
function sortShow(i) {
    $('.shop-nav-sort-hover').css('display', 'flex');
    $.get('/shop-jiayong', (data) => {
        $('.shop-nav-sort-top').html('');
        $('.shop-nav-sort-center').html('');
        //顶部分类个数
        var topLength = data[i].catePartL.channel.length;
        //顶部分类里面的内容
        var topWord = data[i].catePartL.channel;
        //遍历添加 顶部分类
        for (var a = 0; a < topLength; a++) {
            $('.shop-nav-sort-top').append(`<li><a href="">${topWord[a].text}</a><i class="iconfont">&#xe618;</i></li>`)
        };
        //中间详情部分的内容
        var topWordDet = data[i].catePartL.detail;
        for (var c = 0; c < topWordDet.length; c++) {
            //添加左边导航
            $('.shop-nav-sort-center').append(`<li><section><a href="" class="shop-nav-sort-bef">${topWordDet[c].tit.text}</a><i class="iconfont">&#xe618;</i></section><div></div></li>`)
            for (var d = 0; d < topWordDet[c].con.length; d++) {
                //添加右边分类
                if (d > 0) {
                    $('.shop-nav-sort-center li div').last().append(`<span class="shop-nav-sort-center-split">|</span> <a href="" class="shop-nav-sort-aft">${topWordDet[c].con[d].text}</a>`);
                } else {
                    $('.shop-nav-sort-center li div').last().append(`<a href="" class="shop-nav-sort-aft">${topWordDet[c].con[d].text}</a>`);
                }
            }

        }
        //添加右边图片
        //小图片
        var smaImg = data[i].catePartR.brand;
        //大图片
        var bigImg = data[i].catePartR.promo;
        for (var e = 0; e < smaImg.length; e++) {
            //渲染小图片
            $('.smallImg').eq(e).attr('src', smaImg[e].img);
        }
        //渲染大图片

        $('.bigDiv').first().attr('src', bigImg[0].img);
        if (bigImg.length > 1)
            $('.bigDiv').last().attr('src', bigImg[1].img);
    })
}
//鼠标移出左侧分类时弹出的界面隐藏
$('.shop-nav-sort').mouseleave(function() {
    $('.shop-nav-sort-hover').css('display', 'none');
});
//鼠标移出和移入弹出的界面时，界面弹出和隐藏
$('.shop-nav-sort-hover').hover(function() {
    $('.shop-nav-sort-hover').css('display', 'flex');
}, function() {
    $('.shop-nav-sort-hover').css('display', 'none');
});




//自定义的轮播效果

//头部的轮播速度  把boostrap的轮播方式给禁掉
$('.shop-nav-center .carousel').carousel({
        interval: false
    })
    //实现自定义的轮播效果
var i = 0
var t = setInterval(run, 3000);

function run() {
    i = i >= 7 ? 0 : ++i;
    //	console.log(i)
    $('.carousel-inner .item').eq(i).siblings().removeClass('active').end().addClass('active');
    $('.carousel-indicators li').eq(i).siblings().removeClass('active').end().addClass('active');
}

$('.shop-nav-center #carousel-example-generic').hover(function() {
        clearInterval(t)
    }, function() {
        t = setInterval(run, 3000);
    })
    //点击轮播下方的小圆点导航
$('.shop-nav-center .carousel-indicators li').click(function() {
        i = $(this).index();
        $('.carousel-inner .item').eq(i).siblings().removeClass('active').end().addClass('active');
        $('.carousel-indicators li').eq(i).siblings().removeClass('active').end().addClass('active');
    })
    //点击前一张
$('.shop-nav-center .carousel-control.left').click(function() {
        i = i <= 0 ? 7 : --i;
        $('.carousel-inner .item').eq(i).siblings().removeClass('active').end().addClass('active');
        $('.carousel-indicators li').eq(i).siblings().removeClass('active').end().addClass('active');
    })
    //点击后一张
$('.shop-nav-center .carousel-control.right').click(function() {
    run();
})

//服务hover事件
$('.user-service section').slice(0, 3).hover(() => {
        $('.user-service').slideUp();
        $('.bef').show();
    })
    //close 关闭服务详情页面
$('.close-det').click(function() {
    $('.user-service').show();
    $('.bef').hide();
})

//京东秒杀轮播
//获取数据 中间轮播 右边轮播
$.get('/JDMS-M', function(data) {
    //	console.log(data)
    var arr = data.mainContent.slice(1, 25);
    var Arr = [arr.slice(0, 4), arr.slice(4, 8), arr.slice(8, 12), arr.slice(12, 16), arr.slice(16, 20), arr.slice(20, 24)];
    var str = ``;
    for (var i = 0; i < Arr.length; i++) {
        str += `<div class="item active">`;
        for (var j = 0; j < Arr[i].length; j++) {
            //			console.log(Arr[i][j][0].oldPrice)
            str += `
				<div class="good">
					<div class="pic">
			      		<img src="${Arr[i][j][0].Img}"/>
			      	</div>
			      	<div class="dec">
			      		${Arr[i][j][0].name}
			      	</div>
			      	<div class="price">
			      		<span class="new">￥${Arr[i][j][0].newPrice}</span>
			      		<span class="old"><del >￥${Arr[i][j][0].oldPrice}</del></span>
			      	</div>
				</div>
			`
        }
        str += `</div>`;
    }
    $('.lb .slide .inner').html(str);
    //实现轮播
    var a = setInterval(JDMS, 4000);

    function JDMS() {
        var LB = $('.J-kill .lb .inner');

        if (LB.position().left <= -(Arr.length - 1) * 800) {
            $('.J-kill .lb .inner').animate({ 'left': 0 }, 100);
        } else {
            LB.animate({ 'left': LB.position().left - 800 + 'px' }, 500);
        }

    }
    $('.J-kill .lb').hover(function() {
            clearInterval(a);
        }, function() {
            a = setInterval(JDMS, 4000);
        })
        //前进后退键
    $('.J-kill .lb  .right.carousel-control').click(function() {
        JDMS();
    })
    $('.J-kill .lb  .left.carousel-control').click(function() {
        var LB = $('.J-kill .lb .inner');
        if (LB.position().left >= -700) {
            $('.J-kill .lb .inner').animate({ 'left': '-1600px' }, 100);
        } else {
            LB.animate({ 'left': LB.position().left + 800 + 'px' }, 500);
        }
    })

    //京东秒杀右侧轮播
    var Arr02 = data.mainContent.slice(27, 29);
    var str02 = ``;
    for (var i = 0; i < Arr02.length; i++) {
        //		console.log(Arr02[i])
        str02 += `
			<div class="item">
	            <img src="${
	            	Arr02[i].Img
	            }">
	        </div>
		`
    }
    $('.J-kill .rlb .carousel-inner').html(str02);
    $('.J-kill .rlb .carousel-inner .item').eq(0).addClass('active')

    $('.J-kill .rlb .carousel').carousel({
        interval: 1500
    })

    //京东秒杀倒计时
    //2小时 == 7200秒
    var sumTime = 7200;
    var b = setInterval(function() {
        var h = Math.floor(sumTime / 3600);
        h = h > 10 ? h : '0' + h;
        var m = Math.floor((sumTime - h * 60 * 60) / 60);
        m = m > 10 ? m : '0' + m;
        var s = sumTime - h * 60 * 60 - m * 60;
        s = s > 10 ? s : '0' + s;
        $('.J-kill .h').html(h);
        $('.J-kill .m').html(m);
        $('.J-kill .s').html(s);

        sumTime--;
        if (sumTime < 0) clearInterval(b);
    }, 1000)


})

//<!--排行榜，会买专辑，领券中心-->
//获取排行榜数据
$.get('/JD-ph', function(data) {
        data.forEach(function(item, index) {
                item.body.forEach(function(v, i) {
                    var str = ``;
                    v.center.forEach(function(z, s) {
                        str += `
					<div class="good">
		            	<div class="pic">
		            		<img src="${z.src}"/>
		            	</div>
		            	<span class="num">${z.rank}</span>
		            	<span class="des">${z.text}</span>
		            </div>
				`
                        $('.phb #myTabContent .tab-pane').eq(index).find('.carousel-inner .item').eq(i).html(str);
                        //				console.log(index,i,s)
                    })

                })
            })
            //标签页的轮播
        $('.phb .tab-pane .carousel').carousel({
            interval: 3000
        })
    })
    //会买专辑
$.get('/JD-hm', function(data) {
        var str = ``;
        for (var i = 0; i < data.length; i++) {
            str += `
			<div class="item ">
	            <div class="content" style="background-image:url(${data[i].src}) ;">
	            	<div class="pic">
	            		<span><img src="${data[i].item[0].src1}"/></span>
	            		<span><img src="${data[i].item[1].src1}"/></span>
	            		<span><img src="${data[i].item[2].src1}"/></span>
	            	
	            	</div>
	            	<div class="text">
	            		${data[i].text}
	            	</div>
	            	<div class="daily">
	            		${data[i].daily}
	            	</div>
	            	<div class="btn">
	            		立即查看
	            	</div>
	            </div>
	            
	        </div>
		`
        }
        $('.hmzj .carousel-inner').html(str);
        $('.hmzj .carousel-inner .item').eq(0).addClass('active');
        $('.hmzj  .carousel').carousel({
            interval: 3500
        })
    })
    //领券中心
$.get('/JD-lq', function(data) {
    var str = ``;
    data.forEach(function(item, index) {
        str += `<div class="item">`;
        item.text.forEach(function(v, i) {
            str += `
		 		<div class="quan">
	           		<div class="pic">
	           			<img src="${data[index].text[i].src}"/>
	           		</div>
	           		<div class="text">
	           			<span><span class="sy">${data[index].text[i].mod}</span><span class="val">${data[index].text[i].coupon}</span></span>
	           			<span style="color: darkgray;">${data[index].text[i].limit}</span>
	           			<span>${data[index].text[i].desc}</span>
	           		</div>
	           		<div class="right">
	           			${data[index].text[i].inner}
	           		</div>       		
	           </div>
		 	`
        });
        str += `</div>`
    });
    $('.lqzx #myCarousel07 .carousel-inner').html(str);
    $('.lqzx #myCarousel07 .carousel-inner .item').eq(0).addClass('active');
    $('.lqzx .carousel').carousel({
        interval: 3000
    })
})

//<!--觅me，发现好货，会逛-->
//获取觅me的数据
$.get('JD-mimi', function(data) {
        var str = ``;
        data.data.forEach(function(item, index) {
            str += `
		 <div class="item">
			<img src="${item.img}"/>
        	<div class="text">
        		<h4>${item.name}</h4>
        		<p>${item.des}</p>
        	</div>
       	 </div>
		`
        })
        $('.mfh .mimi .carousel-inner').html(str);
        $('.mfh .mimi .carousel-inner .item').eq(0).addClass('active');
        $('.mfh .mimi .carousel').carousel({
            interval: 4000
        })
    })
    //发现好货
$.get('JD-fxhh', function(data) {
    var str = ``;
    data.forEach(function(item, index) {
        str += `
			<div class="item">
				<div class="pic"><img src="${item.src}"/></div>
				<div class="text">${item.text}</div>
			</div>
		`
    })
    $('.mfh .fxhh .goods').html(str);
})

//滚动监听, 懒加载

$(window).scroll(function() {
        // 滚动监听
        if ($(this).scrollTop() > 500) {
            $('.wathScroll').slideDown();
        } else {
            $('.wathScroll').hide();
        }

        var scrTop = $(this).scrollTop();
        var h = $(window).height();
        $('body>div').each(function(index, item) {
            if (scrTop + h >= $(item).offset().top) {
                $(item).css({ 'opacity': 1 })
            }
        });

        showToggle();

    })
    // 懒加载gif图的显示隐藏
function showToggle() {
    // 透明度为0的div 添加 gif图
    $('body>div').each(function(index, item) {
        if (item.style.opacity == 0) {
            $('<section class="dog" style="text-align:center" ><img src="./img/lazyload.gif" alt=""></section>').insertBefore($(item));

        } else {
            // $(item).prev().remove();
            $('.dog').eq(index).remove();
        }
    })
}
showToggle();


// 移到顶部
$('.jdm-bar .jdm-bar-footer .top').click(function() {
    // console.log($(window).scrollTop());
    $(window).scrollTop(0)
})