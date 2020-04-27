$(document).ready(function(){
    $(".info").click(function(){
        $("#txtid").val($(this).find(".catID").text());
        $("#txtname").val($(this).find(".catName").text());
    });
});