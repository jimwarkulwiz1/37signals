jQuery(document).ready(function()){
	$('#cf').on('mouseenter', function()
		$('.bc_headings').show();
		$('.center_headings').hide();
	});.on('mouseleave', function() {
		$('.center_headings').show();
		$('.bc_headings').hide();
	});
});