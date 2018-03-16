 $(document).ready(function(){
     var documentWidth = $(document).width();
	 var documentHeight = $(document).height();
	// alert(documentHeight)
 	$('.to-top').toTop({
		position:false,
		offset:1000,
	});
	 $('.icon-search').click(function(e){
//	    $("body").append("<div class='shadow' style='width:100%;height:100%;position:absolute;left:0;top:0;background:rgba(0,0,0,.5);z-index:1000;'></div>");
    	$(".shadow").css({"width":documentWidth,"height":documentHeight}).show();
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
	console.log("%chttp://myblogbo.com"," text-shadow: 0 1px 0 #ccc,0 2px 0 #c9c9c9,0 3px 0 #bbb,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);font-size:20px")
 });