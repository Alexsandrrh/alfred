$(function() {

    // PLUS
	$('.js-plus').click(function() {
		if (checkInputData()) {
			showBubble(Number(getFirstWord()) + Number(getSecondWord()));
		}
	});

	// MINUS
	$('.js-minus').click(function() {
		if (checkInputData()) {
			showBubble(Number(getFirstWord()) - Number(getSecondWord()));
		}
	});

    // MULTIPLY
	$('.js-multiply').click(function() {
		if (checkInputData()) {
			showBubble(Number(getFirstWord()) * Number(getSecondWord()));
		}
	});

    // DIVIDE
	$('.js-divide').click(function() {
		if (checkInputData().isNumber) {
			showBubble(Number(getFirstWord()) / Number(getSecondWord()));
		} else {
			if (checkInputData().empty) {
				showBubble('NO');
			} else {
				showBubble(getFirstWord() + ' ' + getSecondWord());
			}
		}
	});		


    // ==============================================================
    // ==============================================================

    // FUNCTION
    function showBubble(text) {
    	$('.bubble').text(text);
		$('.bubble').addClass('-visible'); 
		setTimeout(function() {
    	$('.bubble').removeClass('-visible');
    }, 5000);
    }

	function getFirstWord() {
		return $('.js-firstNumber').val();
	}

	function getSecondWord() {
		return $('.js-secondNumber').val();
	}

	function checkInputData() {
		if ($.isNumeric(getFirstWord()) && $.isNumeric(getSecondWord())) {
			return {
				isNumber: true
			};
		}else if (getFirstWord() === '' && getSecondWord() === '') {
			return {
				isNumber: false,
				empty: true
			};
		} else {
			return {
				isNumber: false,
				empty: false
			};
		}
	}

});