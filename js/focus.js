// 代码整理：懒人之家 lanrenzhijia.com
$(document).ready(function(){
	
	
	if ($('#myfocus').length) {
		zSlider();
		$('#h_sns').find('img').click(function(){
			$(this).fadeTo(200,0.5);
		}, function(){
			$(this).fadeTo(100,1);//淡出隐藏h_sns下的img
		});
	}
	function zSlider(ID, delay){
		var ID=ID?ID:'#myfocus';//三元运算符
		var delay=delay?delay:10000;//三元运算符
		var currentEQ=0, picnum=$('.pic-box li').size(), autoScrollFUN;//声明三个变量
		$('#myfocus>.fr li').eq(currentEQ).addClass('active');
		$('.pic-box li').eq(currentEQ).show();
		// $('#picshow_tx li').eq(currentEQ).show();
		autoScrollFUN=setTimeout(autoScroll, delay);//执行一次autoScroll
		
		$(".btn-box>.down").click(function(){

		 autoScroll() //调用向下切换的方法
	
		})
	$(".btn-box>.up").click(function(){ 
		autoScroll2() //调用向上切换的方法
		})
		//向下切换的方法
		function autoScroll(){
			clearTimeout(autoScrollFUN);//清除计时器
			currentEQ++;//轮播图的索引
			if (currentEQ>picnum-1) currentEQ=0;

			$('#myfocus>.fr li').removeClass('active');
			$('.pic-box li').hide();
			// $('#picshow_tx li').hide().eq(currentEQ).slideDown();
			$('#myfocus>.fr li').eq(currentEQ).addClass('active');
			$('.pic-box li').eq(currentEQ).show();
			autoScrollFUN = setTimeout(autoScroll, delay);
		}
		//向上切换的方法
		function autoScroll2(){
			clearTimeout(autoScrollFUN);//清除计时器
			currentEQ--;//轮播图的索引 
			if (currentEQ<0) currentEQ=2;	 
			$('#myfocus>.fr li').removeClass('active');
			$('.pic-box li').hide();
			// $('#picshow_tx li').hide().eq(currentEQ).slideDown(500);
			$('#myfocus>.fr li').eq(currentEQ).addClass('active');
			$('.pic-box li').eq(currentEQ).show();
			autoScrollFUN = setTimeout(autoScroll2, delay);
		}
		
		
		$('#myfocus>.fl').click(function(){
			clearTimeout(autoScrollFUN);
		}, function(){
			autoScrollFUN = setTimeout(autoScroll, delay);
		});
		$('#myfocus>.fr li').click(function(){
			var picEQ=$('#myfocus>.fr li').index($(this));
			if (picEQ==currentEQ) return false;
			currentEQ = picEQ;
			$('#myfocus>.fr li').removeClass('active');
			$('.pic-box li').hide();
			// $('#picshow_tx li').hide().eq(currentEQ).slideDown(500);
			$('#myfocus>.fr li').eq(currentEQ).addClass('active');
			$('.pic-box li').eq(currentEQ).show();
			return false;
		});
	};	
})
// 代码整理：懒人之家 lanrenzhijia.com