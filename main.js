$(document).ready(function () {
    $('.menu-toggler').on('click', function(){
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });
    //Esto cierra el menu cuando elegimos un de los links
    $('.top-nav .nav-link').on('click', function(){
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });

    $('nav a[href*="#"]').on('click', function(){
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 2000); //2 segundos
    });

    $('#up').on('click', function(){
        $('html, body').animate({
            scrollTop: 0 }, 2000); //2 segundos
    });

    //Dependencia AOS 

    AOS.init({
        easing: 'ease',
        duration: 1800, //1.8 segundos
        once: true, //La animacion se hace una sola vez
    });
});