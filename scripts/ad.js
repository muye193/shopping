$(function(){
	var $imgrolls = $("#jnImageroll div a");
	$imgrolls.css("opacity","0.7");
	var len=$imgrolls.length;
	var index = 0;
	var adTimer = null;
	$imgrolls.mouseover(function(){
		index = $imgrolls.index(this);
		showImg(index);
		}).eq(0).mouseover();
	$("#jnImageroll").hover(function(){
		if(adTimer){clearInterval(adTimer);}
		},function(){
			adTime=setInterval(function(){
				showImg(index);
				index++;
				if(index==len){index=0;}
				},5000)
			});
})
function showImg(index){
	var $rollobj = $("#jnImageroll");
	var $rolllist = $rollobj.find("div a");
	var newhref = $rolllist.eq(index).attr("href");
	$("#JS_imgWrap").find("img").eq(index).stop(true,true).fadeIn().siblings().fadeOut();
	$rolllist.removeClass("chos").css("opacity","0.7").eq(index).addClass("chos").css("opacity","1")
	}