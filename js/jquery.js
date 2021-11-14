$(document).ready(function(){

    // menu_navigate
    $('nav ul li:nth-child(1), #logo_small, #topBtn').click(function(){
        $('html,body').animate({
            scrollTop:0,
        },300)
    })
    $('nav ul li:nth-child(3), #scrollDown').click(function(){
        $('html,body').animate({
            scrollTop:750+'px',
        },300)
    })
    $('nav ul li:nth-child(5)').click(function(){
        $('html,body').animate({
            scrollTop:2250+'px',
        },300)
    })
    $('nav ul li:nth-child(7)').click(function(){
        $('html,body').animate({
            scrollTop:3250+'px',
        },300)
    })
    $('nav ul li:nth-child(9)').click(function(){
        $('html,body').animate({
            scrollTop:4160+'px',
        },300)
    })


    // scroll_disapear
    $(window).scroll(function(){

        if($(window).scrollTop()>200){
            $('#scrollDown').fadeOut(200)
            $('#topBtn').fadeIn(200)
        }else{
            $('#scrollDown').fadeIn(200)
            $('#topBtn').fadeOut(200)
        }

    })


    // page_2 animate
    $(window).scroll(function(){
        if($(window).scrollTop()>430){
            $('.leftCon').delay(700).animate({
                marginTop:0,
                opacity:1,
            },700)
            $('.midCon').delay(1300).animate({
                marginTop:0,
                opacity:1,
            },700)
            $('.rightCon').delay(1900).animate({
                marginTop:0,
                opacity:1,
            },700)
            $('#leftBox').animate({
                opacity:.8,
            },700)
            $('#rightBox').animate({
                opacity:.8,
            },700)
        }
    })


    // ability_animate
    $(window).scroll(function(){
        if($(window).scrollTop()>2150){
            $('#profile_l #ability_wrap .ability_bar:nth-child(1)>span').animate({
                width:55+'%'
            },770,'linear')
        }
    })
    $(window).scroll(function(){
        if($(window).scrollTop()>2150){
            $('#profile_l #ability_wrap .ability_bar:nth-child(2)>span').animate({
                width:65+'%'
            },910,'linear')
        }
    })
    $(window).scroll(function(){
        if($(window).scrollTop()>2150){
            $('#profile_l #ability_wrap .ability_bar:nth-child(3)>span').animate({
                width:45+'%'
            },630,'linear')
        }
    })
    $(window).scroll(function(){
        if($(window).scrollTop()>2150){
            $('#profile_l #ability_wrap .ability_bar:nth-child(4)>span').animate({
                width:35+'%'
            },490,'linear')
        }
    })
    $(window).scroll(function(){
        if($(window).scrollTop()>2150){
            $('#profile_l #ability_wrap .ability_bar:nth-child(5)>span').animate({
                width:50+'%'
            },560,'linear')
        }
    })


    // notice_disapear
    $('.linkCircle').click(function(){
        $('#notice').fadeOut(0)
    })
    $('#notice').click(function(){
        $(this).fadeOut(300)
    })


}) //end