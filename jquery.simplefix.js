(function($){
  $.fn.simpleFix = function(){
  
    // Get element's original attributes (to restore)
    var $elementToFix           = $(this); 
    var $elementInitialOffset   = $elementToFix.offset().top;			
    var $elementInitialPos      = $($elementToFix).css("position");
    
    $(window).scroll(function(){
    
    // Figure out how much of the doc has been scrolled
    var $wrapperScrollTop       = $(document).scrollTop();
    
    // If things match up, fix the element in place
    if($wrapperScrollTop > $elementInitialOffset){
      $($($elementToFix)).css({
        "position"    : "fixed",
        "top"         : 0
      });
      
    // Put it back when you're done	
      } else {
        $($($elementToFix)).css({
          "position"  : $elementInitialPos,
          "top"       : $elementInitialOffset
        });				
      };
    });		
  };
})(jQuery);