// $(document).ready(function(){
// 	var fade = {transform: 'translateX(0)',opacity: 1};
//     $("#main_body").css(fade);
// });

$(function(){
	var isOpen = false;
	function animateShow(){
		$(".menubox").animate({
			height:'162px',
			opacity:'1',
		},300);
	}
	function animateHide(){
		$(".menubox").animate({
			height:'0px',
			opacity:'0',
		},300);
	}

	$('body').on('click',function () {
		if (isOpen) {
			animateHide();
			isOpen = false;
			return;
		}
	});


	// 鐐瑰嚮鎸夐挳鍖烘墦寮€鑿滃崟
	$('.menu').on('click',function (e) {
		e.stopPropagation();
		if (isOpen) {
			animateHide();
			isOpen = false;
			return;
		}
		isOpen = true;
		animateShow();
	});


	//鐐瑰嚮鑿滃崟鍖哄煙涓嶈兘鍏抽棴鑿滃崟
	$(".menubox").on('click',function(e){
		e.stopPropagation();
		if (isOpen)  return;
	});


	//鐐瑰嚮close鎸夐挳鍏抽棴鑿滃崟
	$(".menu-close").click(function(){
		if(isOpen){
			animateHide();
			isOpen = false;
			return;
		}
	});
	/*婊氬姩鏉�*/
	jQuery(window).scroll(function(){
		percentage=jQuery(this).scrollTop()/(jQuery(document).height()-$(window).height());
		$(".scroll-bar").width(percentage*100+"%")
	});
	/*鍔犺浇鏉�*/
	jQuery(document).ready(function(e) {
	  function hideLoadingBar(){
		$(".loading-bar").hide();
	  }
	  e(document).on("click", "#yeyeye", function() {
	    showLoadingBar();
		setTimeout(hideLoadingBar,5000)
	  });
	  function showLoadingBar(){
		$(".loading-bar").show();
	  }
	  document.onreadystatechange = loadingChange;//褰撻〉闈㈠姞杞界姸鎬佹敼鍙樼殑鏃跺€欐墽琛岃繖涓柟娉�.
		 function loadingChange()
		 {
		   if(document.readyState == "complete"){ //褰撻〉闈㈠姞杞界姸鎬佷负瀹屽叏缁撴潫鏃惰繘鍏�
			  hideLoadingBar();
		   }
		 }
	});


	/*绛惧悕*/
	// var signature = $(".signature").val();
	// $(".personInfo .logoTheme h3").val(signature);
})

