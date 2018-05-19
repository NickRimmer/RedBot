$(function(){
    updateClassesDisabled();
    updateTableTitle();
})

function updateClassesDisabled(){
    $(".nav-link.disabled").on("click", function(){return false;});
}

function updateTableTitle(){
    $(".tbl-title").each(function(i, el){
        var td = $(el).closest("td");
        var tr = td.closest("tr");
        var count = $("td", tr).length;

        tr.addClass("tbl-title-tr")
        td.prop("colspan", count);
        tr.empty();
        tr.html(td);
    });
}