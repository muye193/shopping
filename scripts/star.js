$(function(){
	$("ul.rating li a").click(function(){
		var title = $(this).attr("title");
		alert("你给商品评分为："+title);
		var cl = $(this).parent().attr("class");
		$(this).parent().parent().removeClass().addClass("rating "+cl+"star");
		return false;
		});
	});