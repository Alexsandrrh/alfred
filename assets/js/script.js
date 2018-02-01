$(function() {

    function showBubble(text) {
    	$('.bubble').text(text);
		$('.bubble').addClass('-visible');
		setTimeout(function() {
    	$('.bubble').removeClass('-visible');
    }, 2000);
    }


    function showFristInput() {
		var inputText = $('.js-firstNumber').val();
		if (inputText == "") {
			inputText = "NO TEXT";
			showBubble("NO TEXT");
		}
		else {
			showBubble(inputText);
		}   	
    }
    

	$('.js-count').click(function() {
		showBubble($('.js-firstNumber').val() + $('.js-secondNumber').val());
	});


});