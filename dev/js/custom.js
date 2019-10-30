$(function() {
	$(".link_box").css("opacity","0.5");

	$(".link_box").hover(function () {
		$(this).stop().animate({
			opacity: 1.0
		}, "fast");
	},
 
// ON MOUSE OUT
function () {
 
// SET OPACITY BACK TO 50%
$(this).stop().animate({
opacity: 0.5
}, "fast");
});
});

$(function() {
// OPACITY OF BUTTON SET TO 50%
$(".motion_graphics_icons").css("opacity","0.5");

// ON MOUSE OVER
$(".motion_graphics_icons").hover(function () {
 
// SET OPACITY TO 100%
$(this).stop().animate({
opacity: 1.0
}, "fast");
},
 
// ON MOUSE OUT
function () {
 
// SET OPACITY BACK TO 50%
$(this).stop().animate({
opacity: 0.5
}, "fast");
});
});

$(function() {
// OPACITY OF BUTTON SET TO 50%
$(".emblem_container").css("opacity","0.5");

// ON MOUSE OVER
$(".emblem_container").hover(function () {
 
// SET OPACITY TO 100%
$(this).stop().animate({
opacity: 1.0
}, "fast");
},
 
// ON MOUSE OUT
function () {
 
// SET OPACITY BACK TO 50%
$(this).stop().animate({
opacity: 0.5
}, "fast");
});
});