$(function() {
	var superHero = {
		name: 'Superman',
		age: 25,
		gender: 'Male',
		params: {
			height: 175,
			weight: 68,
			color: 'white',
			strength: 90,
			intelegence: 98,
			agility: 80
		},
		power: {
			main: 'snowball',
			secondary: 'speed'
		}
	}

console.log(superHero.params.strength);

$('.js-superHero').click(function() {
	showBubble(superHero);
});

$('.js-change').click(function() {
	superHero.params.height = getFirstWord();
	showBubbleWithMarkup(superHero.params.height);
});

var fruits = ['Orange','Banana','Apple','Au'];

$('.js-addElem').click(function() {
	if (getSecondWord() == '') {
		showBubble('Fail');
		showArray('Fail');
	} else {
	    fruits.push(getSecondWord());
	    showBubble(fruits);
	    showArray(fruits);
	}
});

    function showArray(text) {
    $('.test-array').text(text);
	}; 







































// ==================================================================
    // PLUS
	$('.js-plus').click(function() {
		if (checkInputData()) {
			showBubble(Number(getFirstWord()) + Number(getSecondWord()));
		} else {
			showNotNumericData();
		}
	});

	// MINUS
	$('.js-minus').click(function() {
		if (checkInputData()) {
			showBubble(Number(getFirstWord()) - Number(getSecondWord()));
		} else {
			showNotNumericData();
		}
	});

    // MULTIPLY
	$('.js-multiply').click(function() {
		if (checkInputData()) {
			showBubble(Number(getFirstWord()) * Number(getSecondWord()));
		} else {
			showNotNumericData();
		}
	});

    // DIVIDE
	$('.js-divide').click(function() {
		if (checkInputData().isNumber) {
			showBubble(Number(getFirstWord()) / Number(getSecondWord()));
		} else {
			showNotNumericData();
		}
		showZero();
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

        function showBubbleWithMarkup(blocks) {
    	$('.bubble').append(blocks);
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
        if (checkInputData().empty) {
			showBubble('NO');
		} else {
			showBubble(getFirstWord() + ' ' + getSecondWord());
		}
	}

	function showZero() {
		if ((getSecondWord() || getFirstWord()) == "0") {
			showBubble("I'm so sorry it zero!");
		}
	}

});