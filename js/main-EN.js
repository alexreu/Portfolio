// fonction jQuery
$(document).ready(function(){

    /**
     * fonction permettant d'avoir une page load le temps que le site ce charge avant d'afficher
     */
    $(window).on('load',(function(){
        $('#loader').fadeOut(500);
    }));

    /**
     * fonction permettant de changer le contenu du bouton voir plus du portfolio
     */
    $("#buttonCollapse").on('click',function(){
        if($("#buttonCollapse").hasClass("show")){
            $("#buttonCollapse").removeClass("show");
            $("#buttonCollapse").html("See More");
        }else{
            $("#buttonCollapse").addClass("show");
            $("#buttonCollapse").html("See Less");
        }
    });
    // menu pc
    $("#scrollDown").click(function(){
        fluidScroll($('#about'));
    });
    $("#navHeader").click(function(){
        fluidScroll($('#header'));
    });
    $("#navAbout").click(function(){
        fluidScroll($('#about'));
    });
    $("#navPortfolio").click(function(){
        fluidScroll($('#portfolio'));
    });
    $("#navCourse").click(function(){
        fluidScroll($('#parcour'));
    });
    $("#navContact").click(function(){
        fluidScroll($('#contact'));
    });

    // menu mobile
    $("#navHeaderMobile").click(function(){
        fluidScroll($('#header'));
    });
    $("#navAboutMobile").click(function(){
        fluidScroll($('#about'));
    });
    $("#navCoursetMobile").click(function(){
        fluidScroll($('#parcour'));
    });
    $("#navPortfolioMobile").click(function(){
        fluidScroll($('#portfolio'));
    });
    $("#navContactMobile").click(function(){
        fluidScroll($('#contact'));
    });

    /**
     * fonction scroll fluid au clique d'un lien
     * @param {string} target 
     */
    function fluidScroll(target){
        if(target.length){
            $("html,body").stop().animate({scrollTop: target.offset().top}, 1500)
        }
    };
});


// fonction JS
function transformIconMenu (){
    var icon = document.querySelector('#menuIcon');
    icon.classList.toggle('change');       
}

/**
 * fonction de check si les champs du formulaire sont remplis
 */
var inputForm = document.querySelectorAll('input, textarea');
for (let i = 0, f=inputForm.length; i < f ; i++) {
    inputForm[i].addEventListener('blur', function(){
        if (inputForm[i].value ==  '') {
            inputForm[i].classList.add('is-invalid');
        }else{
            inputForm[i].classList.remove('is-invalid')
            inputForm[i].classList.add('is-valid');
        }
    })
}



