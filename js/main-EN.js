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

    $(window).scroll(function(){
        if($(this).scrollTop() > 50){
            $("#go-top").fadeIn(500).addClass("visible")
        }else{
            $("#go-top").fadeOut(500).removeClass("visible")
        }
    })

    $("#go-top").on('click', function(){
        fluidScroll($("#header"));
    })

    // menu pc
    $("#scrollDown").on('click', function(){
        fluidScroll($('#about'));
    });
    $("#navHeader").on('click',  function(){
        fluidScroll($('#header'));
    });
    $("#navAbout").on('click', function(){
        fluidScroll($('#about'));
    });
    $("#navPortfolio").on('click', function(){
        fluidScroll($('#portfolio'));
    });
    $("#navCourse").on('click', function(){
        fluidScroll($('#parcour'));
    });
    $("#navContact").on('click', function(){
        fluidScroll($('#contact'));
    });

    // menu mobile
    $("#navHeaderMobile").on('click', function(){
        fluidScroll($('#header'));
    });
    $("#navAboutMobile").on('click', function(){
        fluidScroll($('#about'));
    });
    $("#navCoursetMobile").on('click', function(){
        fluidScroll($('#parcour'));
    });
    $("#navPortfolioMobile").on('click', function(){
        fluidScroll($('#portfolio'));
    });
    $("#navContactMobile").on('click', function(){
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



