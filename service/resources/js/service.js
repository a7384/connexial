$(document).ready(function(){
     //nice scroll
    $("html").niceScroll({
        cursorwidth:8,
        cursorborder:0,
        cursorcolor:'#18D408',
    });
    //tab
   
$(".demo").champ();
    //bottom-top
       $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });
        // scroll body to 0px on click
        $('#back-to-top').click(function () {
            $('#back-to-top').tooltip('hide');
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
        
        $('#back-to-top').tooltip('show');


});