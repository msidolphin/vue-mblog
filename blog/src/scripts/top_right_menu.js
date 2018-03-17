$(function(){
	// alert(documentHeight)
	$('.icon-search').click(function(e){
//	    $("body").append("<div class='shadow' style='width:100%;height:100%;position:absolute;left:0;top:0;background:rgba(0,0,0,.5);z-index:1000;'></div>");
		$(".shadow").css({"width":$(document).width(),"height":$(document).height()}).show();
		$('.search-form').css('top','50%');
		$('.search-form').css('marginTop','-80px');
		$('.search-form').css('opacity','1');
		$('.search-form').css('transition','.5s all');
//	    e.stopPropagation();
	  });
	 $('.search-close').click(function(e){
		 // $(".shadow").remove();
		 $(".shadow").hide();
		 $('.search-form').css('top','0');
		 $('.search-form').css('opacity','0');
//		 e.stopPropagation();
	  });
	 $(".shadow").click(function(e){
		 $(this).hide();
     $('.search-form').css('top','0');
     $('.search-form').css('opacity','0');
//         e.stopPropagation(300);
	 })
	//	$(document).click(function(){
	//		    $(".shadow").remove();
	//		    $('.search-form').css('top','0');
	//		    $('.search-form').css('opacity','0');
	//	 });
})
