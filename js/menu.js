$(document).ready(function(){
    var pos = $('#nav-scroll').position();
    $(window).scroll(function(){
        var pos_scroll= $(document).scrollTop();
        if (parseInt(pos_scroll)>parseInt(pos.top)){
            $('#nav-scroll').addClass('menu_scroll');
        }
        else{
            $('#nav-scroll').removeClass('menu_scroll');
        }
    })
});