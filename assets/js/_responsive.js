function isBreakpoint( alias ) {
    return $(".responsive-check.d-"+alias+"-none").not(':visible').length>0;
}