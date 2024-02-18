$(window).on("scroll", function() {
    if($(window).scrollTop() > 1) {
        $(".scroll").addClass("active");
        $(".scroll-2").addClass("resolt");   
        $(".scroll-3").addClass("bg-resolt");
        $(".scroll-4").addClass("btn-resolt");
    } else {
        $(".scroll").removeClass("active");
        $(".scroll-2").removeClass("resolt");
        $(".scroll-3").removeClass("bg-resolt");
        $(".scroll-4").removeClass("btn-resolt");
    }
});

function ClickMenu() {
    document.querySelectorAll('.br-1').forEach((result) => { result.classList.toggle('bar1-on'); })

    document.querySelectorAll('.br-2').forEach((result) => { result.classList.toggle('bar2-on'); })

    document.querySelectorAll('.br-3').forEach((result) => { result.classList.toggle('bar3-on'); })
    //Estos tres comandos son para mover las tres barras del boton simulando una x

    document.querySelectorAll('.menu-on').forEach((result) => { result.classList.toggle('menu-wave-on'); })

    document.querySelectorAll('.smooth-menu').forEach((result) => { result.classList.toggle('menu-grid-smooth'); })

}


//
//document.querySelectorAll('.menu-on').forEach((result) => { result.classList.toggle('Menu-Full-on'); })

//document.querySelectorAll('.scr-fr').forEach((result) => { result.classList.toggle('scroll-frost'); })

//document.querySelectorAll('.smooth-menu').forEach((result) => { result.classList.toggle('menu-grid-smooth'); })

//document.querySelectorAll('.smooth-credits').forEach((result) => { result.classList.toggle('credits-smooth'); })

//document.querySelectorAll('.smooth-logo').forEach((result) => { result.classList.toggle('logo-on'); })

//document.querySelectorAll('.ctn-scale').forEach((result) => { result.classList.toggle('content-scale'); })