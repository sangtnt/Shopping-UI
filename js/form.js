$(document).ready(function(){
    $("#signin").click(function(){
        $(".form-login").slideDown();
        $('.body-main').addClass('no-click');
        $("body").addClass('no-scroll');
    });
    $("#signup").click(function(){
        $(".form-signup").slideDown();
        $('.body-main').addClass('no-click');
        $("body").addClass('no-scroll');
    })
    $(".cancelform").click(function(){
        $(".form-login").slideUp();
        $(".form-signup").slideUp();
        $('.body-main').removeClass('no-click');
        $("body").removeClass('no-scroll');
        $(".emailError").text("");
        $(".passwordError").text("");
    });
    function isEmail(input){
        var format= /^[a-zA-Z0-9]+\@[a-zA-Z]+(\.[a-zA-Z]+)+$/;
        return format.test(input);
    }
    function isPassword(input){
        if (input>8)
            return true;
        return false;
    }
    $(".emailtxt").change(function(){
        var email=$(this).val().trim();
        if (!isEmail(email)){
            $(".emailError").text("Email không hợp lệ");
        }
        else{
            $(".emailError").text("");
        }
    });
    $(".passwordtxt").change(function(){
        var password=$(this).val().length;
        if (!isPassword(password)){
            $(".passwordError").text("Password phải trên 8 kí tự");
        }
        else{
            $(".passwordError").text("");
        }
    });
})