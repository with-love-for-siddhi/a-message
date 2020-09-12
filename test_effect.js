$(window).load(function(){
    $('.loading').fadeOut('fast');
    $('.container').fadeIn('fast');
});
$('document').ready(function(){
        var vw;
        $(window).resize(function(){
             vw = $(window).width()/2;
            $('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
            $('#b11').animate({top:240, left: vw-350},500);
            $('#b22').animate({top:240, left: vw-250},500);
            $('#b33').animate({top:240, left: vw-150},500);
            $('#b44').animate({top:240, left: vw-50},500);
            $('#b55').animate({top:240, left: vw+50},500);
            $('#b66').animate({top:240, left: vw+150},500);
            $('#b77').animate({top:240, left: vw+250},500);
        });

$('#play').click(function(){
        var audio = $('.song')[0];
        audio.play();
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
        $('#bulb_red').addClass('bulb-glow-red-after');
        $('#bulb_blue').addClass('bulb-glow-blue-after');
        $('#bulb_green').addClass('bulb-glow-green-after');
        $('#bulb_pink').addClass('bulb-glow-pink-after');
        $('#bulb_orange').addClass('bulb-glow-orange-after');
        $('body').css('backgroud-color','#FFF');
        $('body').addClass('peach-after');
        $(this).fadeOut('slow').delay(6000).promise().done(function(){
            $('#bannar_coming').fadeIn('slow');
        });
    });
$('#play1').click(function(){
        var audio = $('.song')[0];
        audio.play();
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
        $('#bulb_red').addClass('bulb-glow-red-after');
        $('#bulb_blue').addClass('bulb-glow-blue-after');
        $('#bulb_green').addClass('bulb-glow-green-after');
        $('#bulb_pink').addClass('bulb-glow-pink-after');
        $('#bulb_orange').addClass('bulb-glow-orange-after');
        $('body').css('backgroud-color','#FFF');
        $('body').addClass('peach-after');
        $(this).fadeOut('slow').delay(6000).promise().done(function(){
            $('#bannar_coming').fadeIn('slow');
        });
    });

});

$(document).ready(function() {

  typing( 0, $('.typewriter-text').data('text') );

  function typing( index, text ) {

    var textIndex = 1;

    var tmp = setInterval(function() {
      if ( textIndex < text[ index ].length + 1 ) {
                $('.typewriter-text').text( text[ index ].substr( 0, textIndex ) );
                textIndex++;
            } else {
        setTimeout(function() { deleting( index, text ) }, 2000);
        clearInterval(tmp);
      }

        }, 110);

    }

    function deleting( index, text ) {

    var textIndex = text[ index ].length;

    var tmp = setInterval(function() {

      if ( textIndex + 1 > 0 ) {
        $('.typewriter-text').text( text[ index ].substr( 0, textIndex ) );
        textIndex--;
      } else {
        index++;
        if ( index == text.length ) { index = 0; }
        typing( index, text );
        clearInterval(tmp);
      }

        }, 15)

  }

});





