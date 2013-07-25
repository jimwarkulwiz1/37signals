jQuery(document).ready(function() {
	$('#bc').on('mouseenter', function() {
		$('.bc_headings').show();
		$('.center_headings').hide();
	}).on('mouseleave', function() {
		$('.center_headings').show();
		$('.bc_headings').hide();
	});
	$('#hr').on('mouseenter', function() {
		$('.hr_headings').show();
		$('.center_headings').hide();
	}).on('mouseleave', function() {
		$('.center_headings').show();
		$('.hr_headings').hide();
	});
	$('#cf').on('mouseenter', function() {
		$('.cf_headings').show();
		$('.center_headings').hide();
	}).on('mouseleave', function() {
		$('.center_headings').show();
		$('.cf_headings').hide();
	});
});
