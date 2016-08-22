$(document).ready(function(){
	
	
	
	$(window).scroll(function () {
			if ($(this).scrollTop() > offsetTop()) {
				$('.visual').fadeOut();}
			else($('.visual').fadeIn());
			
		});
	
		$('#back-top a').click(function (e) {
			e.preventDefault();
			$('body').animate({
				scrollTop: 0
			}, 800);
		});
		
		
		
});
