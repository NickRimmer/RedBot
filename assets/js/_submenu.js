$(function(){
    submenuUpdateSticky();
})

function submenuUpdateSticky(){
    var stickyOffset = $(".submenu").offset().top;
    $(".submenu").css("width", $(".submenu").width());
    $(".submenu").css("height", $(".submenu").height());

    $(window).scroll(function(e){
        var submenu = $(".submenu"),
            scroll = $(window).scrollTop();

        if(submenu.length==0) return;

        if(scroll >= stickyOffset) {
            submenu.addClass("sticky");
            submenu.removeClass("active");
            if(isBreakpoint("sm")) $(".content", submenu).css("margin-top", scroll - stickyOffset);
        }
        else {
            submenu.removeClass("sticky");
            submenu.addClass("active");
            $(".content", submenu).css("margin-top", 0);
        }
    })
}