
$( document ).ready(function() {
	var widthofwindow = $( window ).width();
	var widthofmaincontainer = $( ".container" ).width();

	var widthtocontainer = ((widthofwindow - widthofmaincontainer) / 2) - 80;
	var widthformenu = (((widthofwindow - widthofmaincontainer) / 2) - 80) + 388;
	if(widthofwindow <= 1200){
		var widthtocontainer = ((widthofwindow - widthofmaincontainer) / 2) - 50;
		var widthformenu = (((widthofwindow - widthofmaincontainer) / 2) - 50) + 388;
	}

	// linefilter css
	$(".linefilter").css("margin-left", widthtocontainer);
	$(".linefilter").css("width", widthofwindow - widthtocontainer);

	// $(".menu").css("width", widthformenu);
	$(".menu .leftline").css("margin-left", widthtocontainer);
	$(".menu .formenu").css("margin-left", widthtocontainer);

	$( ".header .menuhumburger" ).click(function() {
	  $(".menu").css("width", widthformenu);
	  $(".menu").css("opacity", 1);
	  $(".header .menuhumburger").css("opacity", 0);
	});
	$( ".menu .mcross" ).click(function() {
	  $(".menu").css("width", 0);
	  $(".menu").css("opacity", 0);
	  $(".header .menuhumburger").css("opacity", 1);
	});

	$('.videomodal').on('hide.bs.modal', function(e) {    
	    var $if = $(e.delegateTarget).find('iframe');
	    var src = $if.attr("src");
	    $if.attr("src", '/empty.html');
	    $if.attr("src", src);
	});
	
	// var heightovideomodal2 = $( ".videomodalheight" ).height();
	// var heightofwindow2 = $( window ).height();

	// $(".videomodalheight").css("margin-top", (heightofwindow2 / 2) - (heightovideomodal2 / 2));


	var heightofwindow = $( window ).height();
	var heightofdealhero = $( ".dealhero" ).height();
	var heightofsearchline = $( ".searchline" ).height();
	var heigtoffilters = heightofwindow - (heightofdealhero + heightofsearchline);
	$(".filtersoptions .container").css("min-height", heigtoffilters);





	$( ".searchline .filter" ).click(function() {
		if ( $( this ).hasClass( "filtersclosed" ) ) {
			$(".filtersoptions").css("visibility", "visible");
			$(".filtersoptions").css("opacity", "1");
			$(".filtersoptions").css("z-index", "3");
			$(".searchline .filter img").attr("src","img/minusicon.png");
			$( ".searchline .filter" ).addClass( "filtersopened" );
			$( ".searchline .filter" ).removeClass( "filtersclosed" );
		}else{
			$(".filtersoptions").css("visibility", "hidden");
			$(".filtersoptions").css("opacity", "0");
			$(".filtersoptions").css("z-index", "0");
			$(".searchline .filter img").attr("src","img/filtericon.png");
			$( ".searchline .filter" ).addClass( "filtersclosed" );
			$( ".searchline .filter" ).removeClass( "filtersopened" );
		}

	});




});
$( window ).resize(function() {
	var widthofwindow = $( window ).width();
	var widthofmaincontainer = $( ".container" ).width();

	var widthtocontainer = ((widthofwindow - widthofmaincontainer) / 2) - 80;
	var widthformenu = (((widthofwindow - widthofmaincontainer) / 2) - 80) + 388;
	if(widthofwindow <= 1200){
		var widthtocontainer = ((widthofwindow - widthofmaincontainer) / 2) - 50;
		var widthformenu = (((widthofwindow - widthofmaincontainer) / 2) - 50) + 388;
	}
	// linefilter css
	$(".linefilter").css("margin-left", widthtocontainer);
	$(".linefilter").css("width", widthofwindow - widthtocontainer);

	$(".menu .leftline").css("margin-left", widthtocontainer);
	$(".menu .formenu").css("margin-left", widthtocontainer);

	$( ".header .menuhumburger" ).click(function() {
	  $(".menu").css("width", widthformenu);
	  $(".menu").css("opacity", 1);
	  $(".header .menuhumburger").css("opacity", 0);
	});
	$( ".menu .mcross" ).click(function() {
	  $(".menu").css("width", 0);
	  $(".menu").css("opacity", 0);
	  $(".header .menuhumburger").css("opacity", 1);
	});


	var menuwidthifopened = $( ".menu" ).width();

	if(menuwidthifopened > 20){
		$(".menu").css("width", widthformenu);
	}
	// var heightovideomodal2 = $( ".videomodalheight" ).height();
	// var heightofwindow2 = $( window ).height();

	// $(".videomodalheight").css("margin-top", (heightofwindow2 / 2) - (heightovideomodal2 / 2) - 50);




	var heightofwindow = $( window ).height();
	var heightofdealhero = $( ".dealhero" ).height();
	var heightofsearchline = $( ".searchline" ).height();
	var heigtoffilters = heightofwindow - (heightofdealhero + heightofsearchline);
	$(".filtersoptions .container").css("min-height", heigtoffilters);
});

$('.carousel').carousel({
    pause: true,
    interval: false
});


$(".backtotop").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});