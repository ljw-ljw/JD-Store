//num生成几位的验证码
function showCode(num) {
//	获取验证码的容器
	var div = document.getElementsByClassName('code')[0];
//	用于后续计算每个验证码它的位置范围
//	验证码第一位数位置left范围是0-40
//	验证码第二位数位置left范围是40-80
	var index = 0;
//	定义变量保存随机到的验证码
	var codes = '';
	div.style.border = "1px solid black";
	div.style.width = num * 40 + "px";
	div.style.height = "40px";
	div.style.fontSize = "22px";
	div.style.position = "relative";
	div.innerText = '';
	div.style.overflow = 'hidden';
	div.style.MozUserSelect = 'none';
	div.style.webkitUserSelect = 'none';
	div.style.msUserSelect = 'none';
	div.onclick = function(){code = showCode(num); console.log('字母数字验证码：'+code)}
	for(var i = 0; i < num; i++) {
//		randomVal()生成一位的验证码
		codes +=randomVal();
		index++;
//		干扰线
		line();
	}
	return codes;
	function randomVal() {
		//				生成1个随机的字符
		var str = "0123456789ABCDEFGHIJKLMNOPQRSTUVWSYZabcdefghijklmnopqrstuvwxyz";
//		随机到0到str的长度-1  整数
		var r = Math.floor(Math.random() * str.length);
		var span = document.createElement('span');
		span.innerText = str[r];
		document.getElementsByClassName('code')[0].appendChild(span);
		spanStyle(span);
		return str[r];

	}
//	干扰线
	function line(){
		var divLine = document.createElement('div');
		divLine.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 200) +
			"," + Math.floor(Math.random() * 200) +
			"," + Math.floor(Math.random() * 200) + ")";
		divLine.style.width = Math.random()*30 + "px";
//					divLine.style.border = "1px solid black";
		divLine.style.height = "1px";
		document.getElementsByClassName('code')[0].appendChild(divLine);
		spanStyle(divLine);
	}
	function spanStyle(span) {
//					宽
		var w = num * 40;
//					高
		var h = 40;
//					22-44
		var left = Math.random() * 40 + index * 40;
		var top = Math.random() * h;
		if(left > w - 30){
			left = w-30;
		}
		if(left < 15){
			left = 15;
		}
		if(top > h - 30){
			top = h-30;
		}
//					if(top < 15){
//						top = 15;
//					}
//		index++;
//		console.log(index);
//		console.log(span.innerText);
		//				改变文字颜色,随机  rgb(200,200,200)  越255越接近白色
		span.style.color = "rgb(" + Math.floor(Math.random() * 200) +
			"," + Math.floor(Math.random() * 200) +
			"," + Math.floor(Math.random() * 200) + ")";
		span.style.position = "absolute";
		span.style.top = top + "px";
		span.style.left = left + "px";
//					0-180
//					-90~90
		span.style.transform = "rotate(" + (Math.random() * 180 - 90) + "deg)";
	}
}