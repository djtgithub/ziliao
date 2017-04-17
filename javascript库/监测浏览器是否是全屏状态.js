window.onresize=function(){
	if(window.outerHeight==screen.height&&window.outerWidth==screen.width){
	$('.vjs-control-bar').css({'width':'100%','bottom':'0%'});
	}else{
		$('.vjs-control-bar').css({'width':'100%','bottom':'0.2%'});
	}
}