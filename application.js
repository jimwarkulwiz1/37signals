jQuery(document).ready(function() {
	$('#bc').on('mouseenter', function() {
		$('.bc_headings').show();
		$('.center_headings').hide();
		$('#bc_arrow').show();
	}).on('mouseleave', function() {
		$('.center_headings').show();
		$('.bc_headings').hide();
		$('#bc_arrow').hide();
	});
	$('#hr').on('mouseenter', function() {
		$('.hr_headings').show();
		$('.center_headings').hide();
		$('#hr_arrow').show();
	}).on('mouseleave', function() {
		$('.center_headings').show();
		$('.hr_headings').hide();
		$('#hr_arrow').hide();
	});
	$('#cf').on('mouseenter', function() {
		$('.cf_headings').show();
		$('.center_headings').hide();
		$('#cf_arrow').show();
	}).on('mouseleave', function() {
		$('.center_headings').show();
		$('.cf_headings').hide();
		$('#cf_arrow').hide();
	});
});
