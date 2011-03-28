(function($){
	$.fn.simpleFix = function(){
	
		// Get element's original attributes (to restore)
		var $elementToFix						=	$(this); 
		var $elementInitialOffset		=	Math.floor($elementToFix.offset().top);			
		var $elementInitialPos			=	$($elementToFix).css("position");
		
		$(window).scroll(function(){
		
		// Figure out when it hits the top
		var $wrapperScrollTop				=	$(document).scrollTop();
		
		// Fix it in place
		if($wrapperScrollTop > $elementInitialOffset){
			$($($elementToFix)).css({
				"position"	:	"fixed",
				"top"				:	0
			});
		
		// Put it back when you're done	
			} else {
				$($($elementToFix)).css({
					"position"	:	$elementInitialPos,
					"top"				:	$elementInitialOffset
				});				
			};
		});		
	};
})(jQuery);