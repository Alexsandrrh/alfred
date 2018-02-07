$(function() {

    // PLUS
	$('.js-plus').click(function() {
		if (checkInputData()) {
			showBubble(Number(getFirstWord()) + Number(getSecondWord()));
		} else {
			if (checkInputData().empty) {
				showBubble('NO');
			} else {
				showBubble(getFirstWord() + ' ' + getSecondWord());
			}
		}
	});

	// MINUS
	$('.js-minus').click(function() {
		if (checkInputData()) {
			showBubble(Number(getFirstWord()) - Number(getSecondWord()));
		} else {
			if (checkInputData().empty) {
				showBubble('NO');
			} else {
				showBubble(getFirstWord() + ' ' + getSecondWord());
			}
		}
	});

    // MULTIPLY
	$('.js-multiply').click(function() {
		if (checkInputData()) {
			showBubble(Number(getFirstWord()) * Number(getSecondWord()));
		} else {
			if (checkInputData().empty) {
				showBubble('NO');
			} else {
				showBubble(getFirstWord() + ' ' + getSecondWord());
			}
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

        showNotNumericData();
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

	function showNotNumericData() {
		if ((getFirstWord() || getSecondWord()) == 0) {
			showBubble("I'm so sorry it zero!");
		} else if ((getSecondWord() || getFirstWord()) == 0) {
			showBubble("I'm so sorry it zero!");
		}
	}

});