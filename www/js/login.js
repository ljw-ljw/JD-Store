//表单控件，获取焦点时头像的背景色
$('input[type!=submit]').focus(function(){
	$(this).prev().css({'background-position-y':'-48px'})
})
$('input[type!=submit]').blur(function(){
	$(this).prev().css({'background-position-y':'0'})
})

//提交表单

$('form').submit(function(e){
	e.preventDefault();
	
	
	$.post('/login',$(this).serialize(),function(data){
		$('.modal-body').html(data.info);
		$('#myModal').modal('show').on('hide.bs.modal',function(){
			if(data.code){
			   location.href='login.html'
		     }else{
			   location.href = '/';
		    }
		})
		
		
	})
})
