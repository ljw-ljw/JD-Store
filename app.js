var express = require('express');
var app = express();
var superAgent = require('superagent');
var bodyParser = require('body-parser');
var fs = require('fs');
var cookieParser = require("cookie-parser");
app.use(express.static('www'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());


//手机短信验证
app.get('/sendCode', function(req, res) {
    var url = 'http://sms.tehir.cn/code/sms/api/v1/send?srcSeqId=123&account=18358101190&password=123456&mobile=' +
        req.query.tel + '&code=' + req.query.code + '&time=1';
    superAgent.get(url).end(function(err, response) {
        //		console.log(response.body);
        if (response.body.responseCode == 0) {
            res.send("短信已发送");
        } else {
            res.send("短信发送失败");
        }
    });
})

//注册用户
app.post('/registerUser', function(req, res) {
    var user = {
        user: req.body.user,
        psw: req.body.psw,
        phone: req.body.phone
    }

    fs.exists('User', function(exists) {
        if (!exists) {
            fs.mkdir('User')
        }
    });
    fs.readFile('User/user.txt', function(err, data) {
        var flag = true;
        if (!err) {
            var str = '[' + data.toString().substr(1) + ']';
            var arr = JSON.parse(str);
            console.log(arr)
            arr.forEach(function(item, index) {
                console.log(item.phone)
                if (item.user == user.user || item.phone == user.phone) {
                    flag = false;
                    return;
                }
            })
            if (flag) {
                fs.appendFile('User/user.txt', ',' + JSON.stringify(user), function(err) {
                    res.send('注册成功')
                })
            } else {
                res.send('用户已存在')
            }
        }

    })

})

//用户登录
app.post('/login', function(req, res) {
    var User = req.body.user;
    var flag = true;


    //判断用户是否存在
    fs.readFile('User/user.txt', function(err, data) {
        if (!err) {
            var arr = '[' + data.toString().substr(1) + ']';
            arr = JSON.parse(arr);
        }

        if (/^1[3578]\d{9}$/.test(User)) {
            arr.forEach(function(item, index) {
                if (item.phone == User && item.psw == req.body.psw) {
                    keepUSer(item);
                    res.send({
                        code: 0,
                        info: '登录成功'
                    });
                    flag = false;
                    return;
                }
            })

        } else {
            arr.forEach(function(item, index) {
                if (item.user == User && item.psw == req.body.psw) {
                    keepUSer(item);
                    res.send({
                        code: 0,
                        info: '登录成功'
                    });
                    flag = false;
                    return;
                }
            })
        }
        //判断登录是否成功
        if (flag) {
            res.send({
                code: 1,
                info: '用户名或密码有误'
            })
        }
        //存cookie用户名
        function keepUSer(yh) {
            console.log(yh)
            var date = new Date();
            date.setMonth(date.getMonth() + 1);
            res.cookie('user', yh.user, date);
        }

    })
})

//-------------------获取商品导航分类信息文字-----------

app.get('/index-top-nav', (req, res) => {
    var filename = './www/json/index-top-nav.json';
    fs.readFile(filename, (err, data) => {
        res.status(200).json(JSON.parse(data))
    })
})

//-------------------家用电器-hover-----------
app.get('/shop-jiayong', (req, res) => {
    var filename = './www/json/index-top-nav-hover.json';
    fs.readFile(filename, (err, data) => {
        res.status(200).json(JSON.parse(data))
    })
})

//京东秒杀，中间轮播
app.get('/JDMS-M', function(req, res) {
    var filename = './www/json/J-kill.json';
    fs.readFile(filename, (err, data) => {
        res.send(JSON.parse(data))
    })
})

//获取排行榜数据
app.get('/JD-ph', function(req, res) {
    var filename = './www/json/paihangbang.json';
    fs.readFile(filename, (err, data) => {
        res.send(JSON.parse(data))
    })
})

//获取会买专辑数据
app.get('/JD-hm', function(req, res) {
    var filename = './www/json/huimai.json';
    fs.readFile(filename, (err, data) => {
        res.send(JSON.parse(data))
    })
})

//获取领券中心的数据
app.get('/JD-lq', (req, res) => {
    var filename = './www/json/lingjuan.json';
    fs.readFile(filename, (err, data) => {
        res.send(JSON.parse(data));
    })
})

//<!--觅me，发现好货，会逛-->
//获取觅me的数据
app.get('/JD-mimi', (req, res) => {
        var filename = './www/json/mimi.json';
        fs.readFile(filename, (err, data) => {
            res.send(JSON.parse(data));
        })
    })
    //获取发现好货的数据
app.get('/JD-fxhh', (req, res) => {
        var filename = './www/json/faxian.json';
        fs.readFile(filename, (err, data) => {
            res.send(JSON.parse(data));
        })
    })
    /****************1.还没逛够*********************/
app.get('/notfun', function(req, res) {
        fs.readFile('./Data/not-fun.json', function(err, data) {
            res.status(200).json({
                code: 0,
                message: JSON.parse(data)
            })
        })
    })
    /*******************2.京东直播******************/
app.get('/jlive', function(req, res) {
    fs.readFile('./Data/JLive.json', function(err, data) {
        res.status(200).json({
            code: 0,
            message: JSON.parse(data)
        })
    })
})

/*************************4.特色推荐*****************************/
app.get('/special', function(req, res) {
        fs.readFile('./Data/J-special.json', function(err, data) {
            res.status(200).json({
                code: 0,
                message: JSON.parse(data)
            })
        })
    })
    /****************************5.居家优品********************************/
app.get('/jhouse', function(req, res) {
    fs.readFile('./Data/J-House.json', function(err, data) {
        res.status(200).json({
            code: 0,
            message: JSON.parse(data)
        })
    })
})

/*********************************6.生活百货********************************/
app.get('/jlife', function(req, res) {
        fs.readFile('./Data/J-Life.json', function(err, data) {
            res.status(200).json({
                code: 0,
                message: JSON.parse(data)
            })
        })
    })
    /*********************************7.智能先锋********************************/
app.get('/jtech', function(req, res) {
        fs.readFile('./Data/J-Tech.json', function(err, data) {
            res.status(200).json({
                code: 0,
                message: JSON.parse(data)
            })
        })
    })
    /*********************************8.时尚达人********************************/
app.get('/jvogue', function(req, res) {
    fs.readFile('./Data/J-vogue.json', function(err, data) {
        res.status(200).json({
            code: 0,
            message: JSON.parse(data)
        })
    })
})

app.listen(3000, function(req, res) {
    console.log('服务器开启了……');
})