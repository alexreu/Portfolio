// fonction jQuery
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
// fonction JS
function transformIconMenu (){
    var icon = document.getElementById('menuIcon');
    icon.classList.toggle('change');       
}
function check (id){
    var champ = document.getElementById(id);
    console.log('fpoezkfpokezop');
    console.log(champ)

    if (champ.value == '') {
        champ.classList.add('border-red');
    }else {
        champ.classList.remove('border-red');
        champ.classList.add('border-green');
    }
}