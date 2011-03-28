It took less time to write this function than it did to find one that wasn't more complex than I felt necessary. Avoid bouncy animation if you respect your users. 

Basic use:

1. Make sure you're including jQuery

2. Include the simplefix.js script
<script type="text/javascript" src="jquery.simplefix.js"></script>	

3. Attach the function to whatever you want to keep in place
<script type="text/javascript">
	$(document).ready(function() {
		$("#sticker").simpleFix();	
	});
</script>