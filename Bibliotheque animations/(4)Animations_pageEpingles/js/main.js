$(document).ready(function(){

	$('.bouton').click(function(){
		$('.epingle').toggleClass('epingleHover');
		$('.epingleEpingler').toggleClass('epingleEpinglerHover');
		$('.bouton').toggleClass('boutonHover');
		$('.titreDeux').toggleClass('titreDeuxHover');
		$('.titreUn').toggleClass('titreUnHover');
		$('.memosListQuatre').toggleClass('memosListQuatreHover');
		$('.memosListTrois').toggleClass('memosListTroisHover');
		$('.memosListDeux').toggleClass('memosListDeuxHover');
		$('.memosListUn').toggleClass('memosListUnHover');
	});

	$('.memosListUn').click(function(){
		$('.memosListDeux').toggleClass('memosListDeuxHoverMun');
		$('.memosListTrois').toggleClass('memosListTroisHoverMun');
		$('.memosListQuatre').toggleClass('memosListQuatreHoverMun');
		$('.titreDeuxHover').toggleClass('titreDeuxHoverMun');
		$('.titreTrois').toggleClass('titreTroisHoverMun');

	});

	$('.memosListDeux').click(function(){		
		$('.memosListDeux').toggleClass('memosListUnHoverMdeux');
		$('.memosListDeux').toggleClass('memosListDeuxHoverMdeux');
		$('.memosListTrois').toggleClass('memosListTroisHoverMdeux');
		$('.memosListQuatre').toggleClass('memosListQuatreHoverMdeux');
		$('.titreDeuxHover').toggleClass('titreDeuxHoverMun');
		$('.titreTrois').toggleClass('titreTroisHoverMun');

	});

	$('.memosListTrois').click(function(){		
		$('.memosListDeux').toggleClass('memosListUnHoverMtrois');
		$('.memosListDeux').toggleClass('memosListDeuxHoverMtrois');
		$('.memosListTrois').toggleClass('memosListTroisHoverMtrois');
		$('.memosListQuatre').toggleClass('memosListQuatreHoverMtrois');
		$('.titreDeuxHover').toggleClass('titreDeuxHoverMun');
		$('.titreTrois').toggleClass('titreTroisHoverMun');

	});

});