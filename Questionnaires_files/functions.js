jQuery(document).ready( function($) {

var activationListener = false; //triggers the menu to collapse if it starts out wider than the breakpoint
var windowWidth = $(window).width();

$(window).resize(function() {
	showMenuInFullscreen();
});


//determine if menu was open before resize and show if it was
function showMenuInFullscreen() {

	var navWidth = $('.nav-primary').width();
	windowWidth = $(window).width();

	if (activationListener == true) {
		$('.nav-primary').css('left','0px');
		$('#mobileToggle img').css('margin-left',navWidth);
	} else if (activationListener == false){
		$('.nav-primary').css('left','-80%');
		$('#mobileToggle img').css('margin-left','0');
	}
}

//toggle menu open vs closed
$('#mobileToggle img').click(function() {

	var navWidth = $('.nav-primary').width();

	if(activationListener == false) {
		$('.nav-primary').animate( {
			left: '0px'}, 100);
		$('#mobileToggle').css('width','100%');
		$('#mobileToggle').css('background','#ffffff');
		$('#mobileToggle img').animate( {
			marginLeft:navWidth}, 100);
		activationListener = true;

	} else if (activationListener == true) {
		$('.nav-primary').animate( {
			left: '-80%'}, 100);	
		$('#mobileToggle').css('width','auto');
		$('#mobileToggle').css('background','none');
				$('#mobileToggle img').animate({
			marginLeft:'0'}, 100);
		activationListener = false;
	}

});

//displays the menu above the first CSS breakpoint
showMenuInFullscreen();
});