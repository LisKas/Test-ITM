$(document).ready(function() {

	var clock = new FlipClock($('.flip-counter'), 99, {
		clockFace: 'Counter',
		autoStart: true,
		countdown: true,
		callbacks:{
			stop: function(){
				$('.massage').html('мест больше нет')
			}
		}
	});		
				

			
////////////////////////////////////////////////////////////

    $(".arrow").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
         
        $('body,html').animate({scrollTop: top}, 3000);

    });

});