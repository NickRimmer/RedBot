$(function(){
    updateNoActionLinks();
})

function updateNoActionLinks(){
    $("a[href='#noaction']").on("click", function(){return false;})
}