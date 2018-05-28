$(document).ready(function(){

    $(window).on('load',(function(){
        $('#loader').fadeOut(500);
    }));

    
    $("#buttonCollapse").on('click',function(){
        console.log('bla bla bla')
        if($("#collapse_portfolio").hasClass("show")){
        $("#buttonCollapse").html("Voir Plus");
        }else{
        $("#buttonCollapse").html("Voir Moins");
        }
    }

)});