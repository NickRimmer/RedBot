$(function(){
    submenuUpdateSticky();
    submenuUpdateCurrent();
})

function submenuUpdateSticky(){
    var submenu = $(".submenu");
    if(submenu.length==0) return;

    var stickyOffset = submenu.offset().top;
    submenu.css("width", submenu.width());
    submenu.css("height", submenu.height());

    $(window).scroll(function(e){
        var scroll = $(window).scrollTop();

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

function submenuUpdateCurrent(){
    var current = location.href;
    $("a", ".submenu").each(function(i,el){
        if($(el).prop("href")==current) $(el).addClass("active");
    });
}