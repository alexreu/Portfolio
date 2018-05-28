$(document).ready(function(){

    $(window).on('load',(function(){
        $('#loader').fadeOut(500);
    }));

    
    $("#buttonCollapse").on('click',function(){
        if($("#buttonCollapse").hasClass("show")){
            $("#buttonCollapse").removeClass("show");
            $("#buttonCollapse").html("Voir Plus");
        }else{
            $("#buttonCollapse").addClass("show");
            $("#buttonCollapse").html("Voir Moins");
        }
    }

)});