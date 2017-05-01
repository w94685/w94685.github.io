$(document).ready(function(e) {
	//welcome page----------------------------------
	$(".main").animate({'opacity':1,'top':'15vh'},2000);
	
	//scroll bar------------------------------------
	$(window).load(function(){
		$(".textbox").mCustomScrollbar();
	});

	//change page-----------------------------------
	var cur = 0;
	var next;

	$(".nav li").each(function(index){
		$(this).click(function(){
			next = index;
			changePage();
		});
	});

	function changePage(){
		if(next != cur){
			$(".textbox").eq(next).stop().animate({'opacity':1,'z-index':10},700);
			$(".textbox").eq(cur).stop().animate({'opacity':0,'z-index':1},1000);
		};
		cur = next;
	};
});