$(function(){
    updateClassesDisabled();
})

function updateClassesDisabled(){
    $(".nav-link.disabled").on("click", function(){return false;});
}