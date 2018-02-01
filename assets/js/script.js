$(function() {
	$('.js-showHide').click(function(){
	    $('.alfred').toggleClass('-invisible');
    });

    var alferdspeak = 'Привет, меня зовут Альфред.'

    $('.js-alfredTalk').click(function(){
    	$('.bubble').text(alferdspeak);
    	$('.bubble').toggleClass('-visible');
    });
});