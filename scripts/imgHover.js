$(function(){
	$("#jnBrandTab li a").click(function(){
		$(this).parent().addClass("chos").siblings().removeClass("chos");
		var idx=$("#jnBrandTab li a").index(this);
		abc(idx);
		
		}).eq(0).click();
	});
function abc(index){
	var $rollobj =$("#jnBrandList");
	var rollWidth= $rollobj.find("li").outerWidth();
	rollWidth =rollWidth*4;
	$rollobj.stop(true,true).animate({left:-rollWidth*index},1000);
	}