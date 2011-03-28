It took less time to write this function than it did to find one that wasn't more complex than I felt necessary. 

Basic use:

1. Make sure you're including jQuery
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.min.js"></script>

2. Include the simplefix.js script
<script type="text/javascript" src="jquery.simplefix.js"></script>	

3. Attach the function to whatever you want to keep in place
<script type="text/javascript">
	$(document).ready(function() {
		$("#sticker").simpleFix();	
	});
</script>