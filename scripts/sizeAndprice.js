$(function(){
	$(".pro_size li").click(function(){
		$(this).addClass("cur").siblings().removeClass("cur");
		$(this).parent().siblings("strong").text( $(this).text() );
		});
	});