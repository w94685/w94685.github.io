
$(document).ready(function(e) {
	//welcome page----------------------------------
	$(".main").animate({'opacity':1,'top':'15vh'},2000);
	
	//scroll bar------------------------------------
	$(window).load(function(){
		$(".textbox").mCustomScrollbar();
	});

	//change page-----------------------------------
	var main_cur = 0;
	var main_next;

	$(".nav li").each(function(index){
		$(this).click(function(){
			main_next = index;
			changePage();
		});
	});

	function changePage(){
		if(main_next != main_cur){
			$(".textbox").eq(main_next).stop().animate({'opacity':1,'z-index':2},700);
			$(".textbox").eq(main_cur).stop().animate({'opacity':0,'z-index':1},1000);
		};
		main_cur = main_next;
	};

	//Page3 slide-------------------------------------
	var slide_interval;
	var slide_cur = 0;
	var slide_next;

	//btn click
	$("#right").click(function(){
		slide_next = slide_cur + 1;
		slide();
	});
	$("#left").click(function(){
		slide_next = slide_cur - 1;
		slide();
	});
	$(".smallbtn").each(function(index){
		$(this).click(function(){
			if(slide_cur != index){
				slide_next = index;
				slide();
			};
		});
	});

	//slide
	slideON();
	function slideON(){
		slide_next = slide_cur + 1;
		slide_interval = setInterval(slide,10000);
	};
	function slideOFF(){
		clearInterval(slide_interval);
	};
	function slide(){
		slideOFF();
		if(slide_next > 2) slide_next = 0;
		if(slide_next < 0) slide_next = 2;
		$(".smallbtn").eq(slide_cur).css({'background-color':'#CCC'});
		$(".smallbtn").eq(slide_next).css({'background-color':'#198d91'});

		if(slide_next != slide_cur){
			slide_cur = slide_next;
			var slide_width = $(".slide_box").width();
			$(".slide").stop().animate({'left': -slide_width * slide_next},1000,function(){
				slideON();
			});
		};
	};

	$(".works_btn").click(function(){
		$(".coverBg").css({'visibility':'visible','opacity':1});
	});
});