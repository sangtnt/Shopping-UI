$(document).ready(function(){
    $('.add-cart').click(function(){
        if($(this).hasClass('disable')){
            return false;
        }
        $('.add-cart').addClass('disable');
        var parent=$(this).parents('.thumbnail');
        var cart= $(document).find('#cart-shop');
        var src= parent.find('img').attr('src');
        var parTop= parent.offset().top;
        var parLeft= parent.offset().left+parent.width()-50;
        $('<img/>',{
            class: 'img-fly',
            src: src,
        }).appendTo('body').css({
            left: parLeft,
            top: parTop,
        });
        setTimeout(function(){
            $(document).find('.img-fly').css({
                left: cart.offset().left,
                top: cart.offset().top,
            });
        },500);
        setTimeout(function(){
            $(document).find('.img-fly').remove();
            var count = parseInt($(document).find('#count').data('count'))+1;
            $('#count').text(count).data('count',count);
            $('.add-cart').removeClass('disable');
        },1600);
    });
});