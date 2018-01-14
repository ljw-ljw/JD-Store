//侧边定位
$('.jdm-bar-item').hover(function() {
    $(this).children('i').eq(0).css({ 'background-color': '#c81623' })
    $(this).children('i').eq(1).css({ 'display': 'none' })
    $(this).children('em').css({ 'background-color': '#c81623' })
    $(this).children('em').finish().animate({ 'left': '-60px' })
}, function() {
    $(this).children('em').finish().animate({ 'left': '0' })
    $(this).children('em').css({ 'background-color': '#7a6e6e' })
    $(this).children('i').eq(1).css({ 'display': 'inline-block' })
    $(this).children('i').eq(0).css({ 'background-color': '#7a6e6e' })
})

//还没逛够
$.get('/notfun', function(resdata) {
    var str = ''
    for (var i = 0; i < resdata.message.mainContent.length; i++) {
        str += `<div class="not-fun-body-clock">
                <div class="not-fun-body-main">
                    <div class="not-fun-body-img">
                        <img src="${resdata.message.mainContent[i].Img}" alt="">
                    </div>
                    <div class="not-fun-body-info">
                        <p class="not-fun-body-info-name">${resdata.message.mainContent[i].info}</p>
                        <p class="not-fun-body-info-price">${resdata.message.mainContent[i].Price}</p>
                    </div>
                    <div class="not-fun-find">找相似</div>
                </div>
                </div>`
    }
    $('.not-fun-body').append(str);
    // notfun
    notfun()

    function notfun() {
        $('.not-fun-body-clock').find('.not-fun-body-info-name').each(function() {
            if ($(this).text().length == 0) {
                $(this).parent().parent().find('.not-fun-body-img').css({ "position": "absolute" })
                $(this).parent().parent().find('.not-fun-body-img').css({ "left": "-30px" })
                $(this).parent().parent().find('.not-fun-body-img').css({ "top": "-30px" })
                $(this).parent().parent().find('.not-fun-find').remove();
            };

        })

    }
})
//京东直播
$.get('/jlive', function(resdata) {
        var arr1 = resdata.message.mainContent.slice(0, 4);
        var arr2 = resdata.message.mainContent.slice(4).slice(0, 1);
        var arr3 = resdata.message.mainContent.slice(5, 10);
        var str = '';
        for (var i = 0; i < arr1.length; i++) {
            str += `<div class="jlive-item">
                    <img src="${arr1[i].img}" alt="">
                    <div class="btn"><i class="play2"></i></div>
                    <div class="live-title">
                    <h3>${arr1[i].info1}</h3>
                    </div>
                    <div class="live-info">
                    <p>${arr1[i].info}</p>
                    </div>
                    </div>`
        }
        $('.jlive-body1').children().append(str);
        var str2 = '';
        for (var k = 0; k < arr2.length; k++) {
            str2 += `<div class="jlive-item2">
                    <img src="${arr2[k].img}" alt="">
                    <div class="btn" style="top:45%;left:37%;"><i class="play2"></i></div>
                    <div class="live-title">
                    <h3>${arr2[k].info1}</h3>
                    </div>
                    <div class="live-info" style="bottom:25px;">
                    <p style="width:230px;">${arr2[k].info}</p>
                    </div>
                    </div>`
        }
        $('.jlive-body2').children().append(str2);
        var str3 = '';
        for (var j = 0; j < arr3.length; j++) {
            str3 += `<div class="jlive-item">
                    <img src="${arr3[j].img}" alt="">
                    <div class="btn"><i class="play1"></i></div>
                    <div class="live-title">
                                <h3>${arr3[j].info1}</h3>
                            </div>
                    <div class="live-info">
                        <p>${arr3[j].info}</p>
                    </div>
                    </div>`
        }
        $('.jlive-body3').children().append(str3);

    })
    /******特色推荐*******/
$.get('/special', function(resdata) {
    var arr1 = resdata.message.mainContent.slice(0, 3);
    var arr2 = resdata.message.mainContent.slice(3, 6);
    var arr3 = resdata.message.mainContent.slice(6, 9);
    var arr4 = resdata.message.mainContent.slice(9, 12);
    var str1 = '';
    var str2 = '';
    var str3 = '';
    var str4 = '';
    for (var i = 0; i < arr1.length; i++) {
        str1 += `<div class="general-div390">
        <div class="general-bd display-flex">
            <h3>${arr1[i].titlt}</h3>&nbsp;<h3 class="i-righticon relative" style="top:12px;"></h3>&nbsp;<p class="fz14">${arr1[i].info}</p></div>
        <div class="hd"><img src="${arr1[i].Img}" alt=""></div>
    </div>`
    }
    for (var k = 0; k < arr2.length; k++) {
        str2 += `<div class="general-div390">
        <div class="general-bd display-flex">
            <h3>${arr2[k].titlt}</h3>&nbsp;<h3 class="i-righticon relative" style="top:12px;"></h3>&nbsp;<p class="fz14">${arr2[k].info}</p></div>
        <div class="hd"><img src="${arr2[k].Img}" alt=""></div>
    </div>`
    }
    for (var j = 0; j < arr3.length; j++) {
        str3 += `<div class="general-div390">
        <div class="general-bd display-flex">
            <h3>${arr3[j].titlt}</h3>&nbsp;<h3 class="i-righticon relative" style="top:12px;"></h3>&nbsp;<p class="fz14">${arr3[j].info}</p></div>
        <div class="hd"><img src="${arr3[j].Img}" alt=""></div>
    </div>`
    }
    for (var l = 0; l < arr4.length; l++) {
        str4 += `<div class="general-div390">
        <div class="general-bd display-flex">
            <h3>${arr4[l].titlt}</h3>&nbsp;<h3 class="i-righticon relative" style="top:12px;"></h3>&nbsp;<p class="fz14">${arr4[l].info}</p></div>
        <div class="hd"><img src="${arr4[l].Img}" alt=""></div>
    </div>`
    }
    var str5 = '';
    str5 = `<li>${str1}</li><li>${str2}</li><li>${str3}</li><li>${str4}</li>`
    $('.js-slider-body').append(str5);
    slider();

})


function slider() {
    var lis = $('.js-slider-body li')
    var olis = $('.js-slider-dol li')
    for (var i = 0; i < lis.length; i++) {
        lis[i].index = i;
        lis[i].style.left = i * 1190 + 'px';
    }
    lis[lis.length - 1].style.left = '-1190px';
    $('.js-pre').click(pre);
    $('.js-next').click(next);

    function next() {
        $('.js-slider-dol li[class="js-active"]').attr('class', ' ');
        for (var i = 0; i < lis.length; i++) {
            var left = Number(lis[i].style.left.replace('px', ''));
            if (left >= 0) {
                if (left == 1190) olis[i].className = 'js-active';
                lis[i].style.transition = 'all 1s';
                lis[i].style.left = left - 1190 + 'px';
            } else {
                lis[i].style.transition = 'none';
                lis[i].style.left = 1190 * (lis.length - 2) + 'px';
            }
        }
    }

    function pre() {
        $('.js-slider-dol li[class="js-active"]').attr('class', ' ');
        for (var i = 0; i < lis.length; i++) {
            var left = Number(lis[i].style.left.replace('px', ''));
            if (left == -1190) olis[i].className = 'js-active';
            if (left < 1190 * (lis.length - 2)) {
                lis[i].style.transition = 'all 1s';
                lis[i].style.left = left + 1190 + 'px';
            } else {
                lis[i].style.transition = 'none';
                lis[i].style.left = '-1190px'
            }
        }
    }

    var t = setInterval(next, 2000);
    $('.j-special-slider').hover(function() {
        clearInterval(t);
    }, function() {
        t = setInterval(next, 2000)
    })
    for (var i = 0; i < olis.length; i++) {
        olis[i].index = i;
        olis[i].onclick = function() {
            var nowli = document.querySelector('ul li[style*="left: 0px"]')
                // var nowli = $('ul li[style*="left: 0px"]') error
            console.log(nowli);
            for (var i = 0; i < Math.abs(nowli.index - this.index); i++) {
                nowli.index > this.index ? pre() : next();
            }
        }
    }
}
// 居家优品
$.get('/jhouse', function(resdata) {
    var arr1 = resdata.message.mainContent.slice(0, 1)[0].slice(0, 1)[0].act;
    var arr2 = resdata.message.mainContent.slice(0, 1)[0].slice(1, 5);
    var arr3 = resdata.message.mainContent.slice(0, 1)[0].slice(5, 8);
    var arr4 = resdata.message.mainContent.slice(1)[0].slice(0, 5);
    var arr5 = resdata.message.mainContent.slice(1)[0].slice(5, 9);
    var arr6 = resdata.message.mainContent.slice(1)[0].slice(9, 11);
    // 家居建材 img右边
    $('.j-house-top-img img').attr('src', arr1);
    var str1 = ''
    for (var i = 0; i < arr2.length; i++) {
        str1 = `<div class="general-bd display-flex">
        <h3>${arr2[0].title}</h3>&nbsp;<h3 class="i-righticon relative" style="top:12px;"></h3>&nbsp;<p class="fz14">${arr2[0].box_subtit}</p>
        </div>
        <div class="general-hd display-flex">
        <div><img src="${arr2[1].Img}" alt=""></div>
        <div class="display-flex" style="width:350px;height:180px;margin-top:10px;">
        <div><img src="${arr2[2].Img}" alt=""></div>
        <div style="margin-left:10px;"><img src="${arr2[3].Img}" alt=""></div>
        </div>
        </div>`
    }
    // 家电馆
    $('.j-house-top-body2').append(str1);
    var str2 = '';
    for (var i = 0; i < arr3.length; i++) {
        str2 = ` <div class="general-bd display-flex">
        <h3>${arr3[0].title}</h3>&nbsp;<h3 class="i-righticon relative" style="top:12px;"></h3>&nbsp;<p class="fz14">${arr3[0].box_subtit}</p>
        </div>
        <div class="general-hd">
        <div><img src="${arr3[1].Img}" alt=""></div>
        <div style="margin-top:10px;"><img src="${arr3[2].Img}" alt=""></div>
        </div>`
    }
    // 家装建材
    $('.j-house-top-body3').append(str2);
    var str3 = '';
    for (var i = 0; i < arr4.length; i++) {
        str3 = `<div class="w350 display-flex" style="margin:10px 20px 20px;">
        <div style="border:1px solid #cccccc;"><img src="${arr4[0].Img}" alt=""></div>
        <div style="line-height:50px;">
        <p class="fz20" style="margin:0"><span>&nbsp;</span>${arr4[0].title}</p>
        </div>
        </div>
        <div class="w350" style="margin-left:20px;height:226px;"><img src="${arr4[1].Img}" alt=""></div>
        <div class="display-flex w350" style="margin-left:20px;justify-content: space-between;margin-top:20px">
        <div class="w100"><img src="${arr4[2].Img}" alt=""></div>
        <div class="w100"><img src="${arr4[3].Img}" alt=""></div>
        <div class="w100"><img src="${arr4[4].Img}" alt=""></div>
        </div>`
    }
    // 新兰鸭舌
    $('.j-house-foot-body1').append(str3);
    var str4 = '';
    for (var i = 0; i < arr5.length; i++) {
        str4 += `<div class="j-house-foot-body2-content j-set3"><div><img src="${arr5[i].Img}" alt=""></div>
            <div>
                <p class="fz14 cutwords w150" style="margin:0 20px">${arr5[i].info}</p>
                <p><span class="fz12">￥</span>${arr5[i].price}</p>
            </div></div>`
    }
    // 计算机视觉
    $('.j-house-foot-body2').append(str4);
    var str5 = '';
    for (var i = 0; i < arr6.length; i++) {
        str5 = `<div class="js-wrap" style="margin-bottom:15px;"><img src="${arr6[0].Img}" alt=""></div>
        <div class="js-wrap"><img src="${arr6[1].Img}" alt=""></div>`
    }
    // 高端家电
    $('.j-house-foot-body3-content').append(str5);
})

// 生活百货
$.get('/jlife', function(resdata) {
        console.log(resdata.message.mainContent);
        var arr1 = resdata.message.mainContent[0].slice(0, 4);
        var arr2 = resdata.message.mainContent[0].slice(4, 9);
        var arr3 = resdata.message.mainContent[0].slice(9, 10)[0].Img;
        var arr4 = resdata.message.mainContent[1].slice(0, 2);
        var arr5 = resdata.message.mainContent[1].slice(2, 6);
        var arr6 = resdata.message.mainContent[1].slice(6, 9);
        var str1 = '';
        var str2 = '';
        var str3 = '';
        var str4 = '';
        var str5 = '';
        var str6 = '';
        for (var i = 0; i < arr1.length; i++) {
            str1 = `<div class="general-bd display-flex">
            <h3>${arr1[0].title}</h3>&nbsp;<h3 class="i-righticon relative"></h3>&nbsp;<p class="fz14">${arr1[0].box_subtit}</p>
            </div>
            <div class="general-hd display-flex">
            <div><img src="${arr1[1].Img}" alt=""></div>
            <div class="display-flex" style="width:350px;height:180px;margin-top:10px;">
            <div><img src="${arr1[2].Img}" alt=""></div>
            <div style="margin-left:10px;"><img src="${arr1[3].Img}" alt=""></div>
            </div>
            </div>`
        }
        $('.j-life-body1').append(str1);
        for (var i = 0; i < arr2.length; i++) {
            str2 = `<div class="w350 display-flex" style="margin:10px 20px 20px;">
            <div style="border:1px solid #cccccc;"><img src="${arr2[0].Img}" alt=""></div>
            <div style="line-height:50px;">
            <p class="fz18 no-wrap" style="margin:0;width:208px;"><span>&nbsp;&nbsp;</span>${arr2[0].title}${arr2[0].text}</p>
            </div>
            </div>
            <div class="w350" style="margin-left:20px;height:226px;"><img src="${arr2[1].Img}" alt=""></div>
            <div class="display-flex w350" style="margin-left:20px;justify-content: space-between;margin-top:20px">
            <div class="w100"><img src="${arr2[2].Img}" alt=""></div>
            <div class="w100"><img src="${arr2[3].Img}" alt=""></div>
            <div class="w100"><img src="${arr2[4].Img}" alt=""></div>
            </div>`
        }
        $('.j-life-body2').append(str2);
        $('.j-life-body3 img').attr('src', arr3);
        for (var i = 0; i < arr4.length; i++) {
            str4 = `<div class="js-wrap" style="margin-bottom:15px;"><img src="${arr4[0].Img}" alt=""></div>
            <div class="js-wrap"><img src="${arr4[1].Img}" alt=""></div>`
        }
        $('.j-life-body4').append(str4);
        for (var i = 0; i < arr5.length; i++) {
            str5 += `<div class="j-house-foot-body2-content j-set3"><div><img src="${arr5[i].Img}" alt=""></div>
                <div>
                    <p class="fz14 cutwords w150" style="margin:0 20px">${arr5[i].info}</p>
                    <p><span class="fz12">￥</span>${arr5[i].price}</p>
                </div></div>`
        }
        $('.j-life-body5').append(str5);
        for (var i = 0; i < arr6.length; i++) {
            str6 = ` <div class="general-bd display-flex">
            <h3>${arr6[0].title}</h3>&nbsp;<h3 class="i-righticon relative"></h3>&nbsp;<p class="fz14">${arr6[0].box_subtit}</p>
            </div>
            <div class="general-hd">
            <div><img src="${arr6[1].Img}" alt=""></div>
            <div style="margin-top:10px;"><img src="${arr6[2].Img}" alt=""></div>
            </div>`
        }
        $('.j-life-body6').append(str6);
    })
    // 智能先锋
$.get('/jtech', function(resdata) {
        var arr1 = resdata.message.mainContent[0].slice(0, 3);
        var arr11 = resdata.message.mainContent[0].slice(3, 15);
        var arr2 = resdata.message.mainContent[0].slice(15, 17);
        var arr3 = resdata.message.mainContent[0].slice(17, 18)[0].Img;
        var str1 = '';
        var str2 = '';
        for (var i = 0; i < arr11.length; i++) {
            str2 += `<div style="width:85px;height:58px;line-height:87px;text-align:center;border:1px solid #ebeaea;"><img src="${arr11[i].Img}"></div>`
        }
        for (var i = 0; i < arr1.length; i++) {
            str1 = `<div class="general-bd display-flex">
        <h3>${arr1[0].title}</h3>&nbsp;<h3 class="i-righticon relative"></h3>&nbsp;<p class="fz14">${arr1[0].box_subtit}</p>
        </div>
        <div class="general-hd display-flex">
            <div class="display-flex" style="width:350px;height:180px;margin-top:10px;">
                <div><img src="${arr1[1].Img}" alt=""></div>
                <div style="margin-left:10px;"><img src="${arr1[2].Img}" alt="">
                </div>
            </div>
           <div class="display-flex" style="flex-wrap:wrap;margin-top:10px;">${str2}</div>
        </div>`
        }
        $('.j-tech-body1').append(str1);
        var str3 = '';
        for (var i = 0; i < arr2.length; i++) {
            str3 = `<div class="general-bd display-flex">
                <h3 class="">${arr2[0].title}</h3>&nbsp;
                <h3 class="i-righticon relative"></h3>&nbsp;
                <p class="fz14">${arr2[0].box_subtit}</p>
            </div>
            <div class="general-hd">
                <div><img src="${arr2[1].Img}" alt=""></div>
            </div>`
        }
        $('.j-tech-body2').append(str3);
        $('.j-tech-body3 img').attr('src', arr3);
        var arr4 = resdata.message.mainContent[1].slice(0, 2);
        var arr5 = resdata.message.mainContent[1].slice(2, 6);
        var arr6 = resdata.message.mainContent[1].slice(6, 9);
        var str4 = '';
        var str5 = '';
        var str6 = '';
        for (var i = 0; i < arr4.length; i++) {
            str4 = `<div class="js-wrap" style="margin-bottom:15px;"><img src="${arr4[0].Img}" alt=""></div>
            <div class="js-wrap"><img src="${arr4[1].Img}" alt=""></div>`
        }
        $('.j-tech-body4').append(str4);
        for (var i = 0; i < arr5.length; i++) {
            str5 += `<div class="j-set3"><div><img src="${arr5[i].Img}" alt=""></div>
                <div>
                    <p class="fz14 cutwords w150" style="margin:0 20px">${arr5[i].info}</p>
                    <p><span class="fz12">￥</span>${arr5[i].price}</p>
                </div></div>`
        }
        $('.j-tech-body5').append(str5);
        for (var i = 0; i < arr6.length; i++) {
            str6 = ` <div class="general-bd display-flex">
            <h3>${arr6[0].title}</h3>&nbsp;<h3 class="i-righticon relative"></h3>&nbsp;<p class="fz14">${arr6[0].box_subtit}</p>
            </div>
            <div class="general-hd">
            <div><img src="${arr6[1].Img}" alt=""></div>
            <div style="margin-top:10px;"><img src="${arr6[2].Img}" alt=""></div>
            </div>`
        }
        $('.j-tech-body6').append(str6);
    })
    // 时尚达人
$.get('/jvogue', function(resdata) {

    var arr1 = resdata.message.mainContent[0].slice(0, 3);
    var arr2 = resdata.message.mainContent[0].slice(3, 7);
    var arr3 = resdata.message.mainContent[0].slice(7, 8)[0].Img;
    var str1 = '';
    // 第一块
    for (var i = 0; i < arr1.length; i++) {
        str1 = `<div class="general-bd display-flex">
            <h3>${arr1[0].title}</h3>&nbsp;<h3 class="i-righticon relative"></h3>&nbsp;<p class="fz14">${arr1[0].box_subtit}</p>
            </div>
            <div class="general-hd">
            <div><img src="${arr1[1].Img}" alt=""></div>
            <div style="margin-top:10px;"><img src="${arr1[2].Img}" alt=""></div>
            </div>`
    }
    $('.j-vogue-top-body1').append(str1);
    // 第二块
    var str2 = ''
    for (var i = 0; i < arr2.length; i++) {
        str2 = `<div class="general-bd display-flex">
        <h3>${arr2[0].title}</h3>&nbsp;<h3 class="i-righticon relative"></h3>&nbsp;<p class="fz14">${arr2[0].box_subtit}</p>
        </div>
        <div class="general-hd display-flex">
        <div><img src="${arr2[1].Img}" alt=""></div>
        <div class="display-flex" style="width:350px;height:180px;margin-top:10px;">
        <div><img src="${arr2[2].Img}" alt=""></div>
        <div style="margin-left:10px;"><img src="${arr2[3].Img}" alt=""></div>
        </div>
        </div>`
    }
    $('.j-vogue-top-body2').append(str2);
    // 第三块
    $('.j-vogue-top-img1 img').attr('src', arr3);
    var arr4 = resdata.message.mainContent[1].slice(0, 1)[0].Img;
    var arr5 = resdata.message.mainContent[1].slice(1, 5);
    var arr6 = resdata.message.mainContent[1].slice(5, 10);
    // 第四块
    $('.j-vogue-img2 img').attr('src', arr4);
    // 第五块
    var str3 = '';
    for (var i = 0; i < arr5.length; i++) {
        str3 += `<div class="j-set3"><div><img src="${arr5[i].Img}" alt=""></div>
            <div>
                <p class="fz14 cutwords w150" style="margin:0 20px">${arr5[i].info}</p>
                <p><span class="fz12">￥</span>${arr5[i].price}</p>
            </div></div>`
    }
    $('.j-vogue-body21').append(str3);
    //第六块 
    var str4 = '';
    console.log(arr6);
    for (var i = 0; i < arr6.length; i++) {
        str4 = `<div class="w350 display-flex" style="margin:10px 20px 20px;">
        <div style="border:1px solid #cccccc;"><img src="${arr6[0].Img}" alt=""></div>
        <div style="line-height:50px;">
        <p class="fz20" style="margin:0"><span>&nbsp;</span>${arr6[0].title}${arr6[0].text}</p>
        </div>
        </div>
        <div class="w350" style="margin-left:20px;height:226px;"><img src="${arr6[1].Img}" alt=""></div>
        <div class="display-flex w350" style="margin-left:20px;justify-content: space-between;margin-top:20px">
        <div class="w100"><img src="${arr6[2].Img}" alt=""></div>
        <div class="w100"><img src="${arr6[3].Img}" alt=""></div>
        <div class="w100"><img src="${arr6[4].Img}" alt=""></div>
        </div>`
    }
    $('.j-vogue-body22').append(str4);
    var arr7 = resdata.message.mainContent[2].slice(0, 5);
    var arr8 = resdata.message.mainContent[2].slice(5, 9);
    var arr9 = resdata.message.mainContent[2].slice(9, 11);
    // 第七块
    var str5 = ''
    for (var i = 0; i < arr7.length; i++) {
        str5 = `<div class="general-bd display-flex">
        <h3>${arr7[0].title}</h3>&nbsp;<h3 class="i-righticon relative"></h3>&nbsp;<p class="fz14">${arr7[0].box_subtit}</p>
        </div>
        <div class="w350" style="margin-left:20px;"><img src="${arr7[1].Img}" alt=""></div>
        <div class="display-flex w350" style="margin-left:20px;justify-content: space-between;margin-top:15px">
        <div class="w110"><img src="${arr7[2].Img}" alt=""></div>
        <div class="w110"><img src="${arr7[3].Img}" alt=""></div>
        <div class="w110"><img src="${arr7[4].Img}" alt=""></div>
        </div>`
    }
    $('.j-vogue-foot1').append(str5);
    // 第八块
    var str6 = ''
    for (var i = 0; i < arr8.length; i++) {
        str6 = `<div class="general-bd display-flex">
        <h3>${arr8[0].title}</h3>&nbsp;<h3 class="i-righticon relative"></h3>&nbsp;<p class="fz14">${arr8[0].box_subtit}</p>
        </div>
        <div class="general-hd display-flex">
        <div><img src="${arr8[1].Img}" alt=""></div>
        <div class="display-flex" style="width:350px;height:180px;margin-top:10px;">
        <div><img src="${arr8[2].Img}" alt=""></div>
        <div style="margin-left:10px;"><img src="${arr8[3].Img}" alt=""></div>
        </div>
        </div>`
    }
    $('.j-vogue-foot2').append(str6);
    // 第九块
    var str7 = ''
    for (var i = 0; i < arr9.length; i++) {
        str7 = `<div class="js-wrap" style="margin-bottom:15px;"><img src="${arr9[0].Img}" alt=""></div>
        <div class="js-wrap"><img src="${arr9[1].Img}" alt=""></div>`
    }
    $('.j-vogue-foot3').append(str7);
})