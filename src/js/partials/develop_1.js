
function topBlockParalax(){

    // paralax move func

    function moveParalax(scroll){
        $('.paralax-layer').each(function() {

            var count = $(this).data('count');
            var max = $(this).data('max');
            var way = $(this).data('way');

            var value = count * scroll;

            if(value >= max){
                value = max;
            }
            if(way == "top"){
                value=value*(-1);
            }

            $(this).css({'transform':'translateY('+value+'px)'});

        });
    }

    // paralax load position

    var scroll = $(window).scrollTop();
    moveParalax(scroll);

    // paralax position by scroll move

    $(window).scroll(function(){

        scroll = $(window).scrollTop();
        moveParalax(scroll);

    });

    // prety show paralax elements by page load

    $(window).load(function(){

        setTimeout(function(){
            $('.paralax-background').addClass('show');
        }, 500);

    });

}

$(document).ready(function(){

    topBlockParalax();

});

$(window).load(function(){

});

$(window).resize(function(){

});