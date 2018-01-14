//轮播图
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