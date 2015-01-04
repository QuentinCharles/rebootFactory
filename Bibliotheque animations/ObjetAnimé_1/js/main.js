$(document).ready(function(){

	$('.flecheDroite').click(function(){
		$('.slides').addClass('transitionSlides');
		$('.flecheGauche').addClass('apparition');
		$('.navListDeux').addClass('apparition');
		$('.navListUne').addClass('flou');
		$('.flecheDroite').addClass('disparition');
		$('.flecheDroite').addClass('transitionFlecheDroite');
		$('.flecheGauche').addClass('transitionFlecheGauche');
	});

	$('.navListDeux').click(function(){
		$('.slides').addClass('transitionSlides');
		$('.flecheGauche').addClass('apparition');
		$('.navListDeux').addClass('apparition');
		$('.navListUne').addClass('flou');
		$('.flecheDroite').addClass('disparition');
		$('.flecheDroite').addClass('transitionFlecheDroite');
		$('.flecheGauche').addClass('transitionFlecheGauche');
	});

		$('.flecheGauche').click(function(){
		$('.slides').removeClass('transitionSlides');
		$('.flecheGauche').removeClass('apparition');
		$('.navListDeux').removeClass('apparition');
		$('.navListUne').removeClass('flou');
		$('.flecheDroite').removeClass('disparition');
		$('.flecheDroite').removeClass('transitionFlecheDroite');
		$('.flecheGauche').removeClass('transitionFlecheGauche');
	});

		$('.navListUne').click(function(){
		$('.slides').removeClass('transitionSlides');
		$('.flecheGauche').removeClass('apparition');
		$('.navListDeux').removeClass('apparition');
		$('.navListUne').removeClass('flou');
		$('.flecheDroite').removeClass('disparition');
		$('.flecheDroite').removeClass('transitionFlecheDroite');
		$('.flecheGauche').removeClass('transitionFlecheGauche');
	});


});