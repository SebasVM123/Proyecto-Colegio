$(document).ready(function(){

	var imgItems = $('.slider li').length;
	var imgPos = 1;

	for(i = 1; i <= imgItems; i++){
		$('.paginacion').append('<li><span class="fa fa-circle"></span></li>');
	}

	$('.slider li').hide();
	$('.slider li:first').show();

	$('.paginacion li:first').css({'color': '#CDA34F'}) 

	$('.paginacion li').click(paginacion); 
	$('.right span').click(nextImage);
	$('.left span').click(prevImage);

	setInterval(function(){
		nextImage();
	}, 5000);

	//FUNCIONES----------------------------------------------

	function paginacion(){
		var paginacionPos = $(this).index() + 1;

		$('.slider li').hide();
		$('.slider li:nth-child('+ paginacionPos +')').fadeIn();

		$('.paginacion li').css({'color': '#373F27'});
		$(this).css({'color': '#CDA34F'});

		imgPos = paginacionPos;
	}

	function nextImage(){
		if(imgPos >= imgItems){
			imgPos = 1;
		} else {
			imgPos++;
		}

		$('.paginacion li').css({'color': '#373F27'});
		$('.paginacion li:nth-child('+imgPos+')').css({'color': '#CDA34F'});

		$('.slider li').hide();
		$('.slider li:nth-child('+imgPos+')').fadeIn();
	}

	function prevImage(){
		if(imgPos <= 1){
			imgPos = imgItems;
		} else {
			imgPos--;
		}

		$('.paginacion li').css({'color': '#373F27'});
		$('.paginacion li:nth-child('+imgPos+')').css({'color': '#CDA34F'});

		$('.slider li').hide();
		$('.slider li:nth-child('+imgPos+')').fadeIn();
	}

});
