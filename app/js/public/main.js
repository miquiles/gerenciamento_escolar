var baseUri = $('base').attr('href').replace('/app/','');
$(function(){
    $('li').hover(function(e){
        e.stopImmediatePropagation();
        e.stopPropagation();
        $(this).find('img').animate({
            height: 100, 
            width: 110
        }, 300)
    },function(e){
        e.stopImmediatePropagation();
        e.stopPropagation();                    
        $(this).find('img').animate({
            height: 80, 
            width: 80
        }, 500)
    })
    
    //tips
    $('.tip-top').tooltip({
        'placement':'top'
    });
    $('.tip-left').tooltip({
        'placement':'left'
    });
    $('.tip-bottom').tooltip({
        'placement':'bottom'
    });
    $('.tip-right').tooltip({
        'placement':'right'
    }); 

    
    if($(window).width() >= 1500)
    {
        $('body').css('background','url(images/layout/bgfull.jpg)');
        $('body').css('background-attachment','fixed');
        $('body').css('background-repeat','no-repeat');
    }
})    

function hider(elm) {
    $('#'+elm).hide();
}

function showr(elm) {
    $('#'+elm).show();
}


function notifyr(msg) {
    $('#proc-ok span').html(msg);
    $('#proc-ok').show();
}