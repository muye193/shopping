$(function(){
	var $span = $(".pro_price strong");
	var price = $span.text();
	$("#num_sort").change(function(){
		var num = $(this).val();
		var abb = num * price;
		$span.text(abb);
		}).change();
	});