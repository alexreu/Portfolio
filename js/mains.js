$(document).ready(function(){

    $(window).on('load',(function(){
        $('#loader').fadeOut(500);
    }));

    
    if($("#collapse_portfolio").is(".show")){
        $("#buttonCollapse").html("Voir Moins");
    }else{
        $("#buttonCollapse").html("Voir Plus xxxx");
    }

});