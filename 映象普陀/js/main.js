$(function() {
			$('#header').load('header.html');
			$('#footer').load('footer.html');
		})
	/*获取头部 尾部*/
$(function(){
	$(".derail_xt").click(function(){
		$(this).addClass('active').siblings().removeClass('active');
		var num=$(this).index();
		$(".detail_pic").hide();
		$(".detail_pic").eq(num).show();
	})
})
$(document).ready(function(){
	var number=$(".detail_list li").length;
	$(".detail_list").width(number*225)
	var count = $(".detail_list li").length -3; /* 显示 4 个 li标签内容 */
	var num=$(".detail_list li").length;
	var curIndex = 0;
	
	$('.scolbtn').click(function(){
		if( $(this).hasClass('disabled') ) return false;
		
		if ($(this).hasClass('btn_l')) --curIndex;
		else ++curIndex;
		
		if (num<=4) return false;
		
		$('.scolbtn').removeClass('disabled');
		if (curIndex == 0) $('.btn_l').addClass('disabled');
		if (curIndex == count-1) $('.btn_r').addClass('disabled');
		
		$(".detail_list").stop(false, true).animate({"marginLeft" : -curIndex*225 + "px"}, 600);
	});
})
/*我要留言按钮*/
$(document).ready(function(){
	 var scroll_offset=$(".online_form_title").offset()
	 $(".to_mes").click(function(){
		 $("html,body").animate({scrollTop:scroll_offset.top+130},500)
	 });
})