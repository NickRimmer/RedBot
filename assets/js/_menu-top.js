$(function(){
    updateMenuTop();
    eventsMenuTop();
    eventsSubmenuTop();
})

function updateMenuTop(){
    var menu = $(".menu-top");
    if(menu.length==0) return;

    var active = $(".dropdown-item.active", menu);
    if(active.length==0) return;

    var btoggle = $(".dropdown-toggle", menu);
    if(btoggle.length==0) return;

    btoggle.text(active.text());
    active.removeClass("active");

    menu.addClass("show");
}

function eventsMenuTop(){
    var menu = $(".menu-top");
    if(menu.length==0) return;

    $("a.dropdown-item:not(.disabled)", menu).on("click", function(e){
        $(e.target).addClass("active");
        updateMenuTop();

        /*$(".dropdown.show .dropdown-toggle", menu).dropdown('toggle');
        return false;*/
    });
}

function eventsSubmenuTop(){
    var menu = $(".submenu");
    if(menu.length==0) return;

    $(".title", menu).on("click", function(){
        menu.toggleClass("active");
        return false;
    })
}