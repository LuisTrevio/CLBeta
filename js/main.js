const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

const currentTheme = (localStorage.getItem("theme"));

const mtag = document.querySelector("meta[name=color-theme]");

$(window).on("scroll", function() {
    if($(window).scrollTop() > 1) {
        $(".scroll-hd").addClass("header-scroll");
        $(".scroll-tx").addClass("resolt");   
        $(".scroll-bg").addClass("bg-resolt");
        $(".scroll-btn").addClass("btn-resolt");
    } else {
        $(".scroll-hd").removeClass("header-scroll");
        $(".scroll-tx").removeClass("resolt");
        $(".scroll-bg").removeClass("bg-resolt");
        $(".scroll-btn").removeClass("btn-resolt");
    }
});

function ClickMenu() {
    document.querySelectorAll('.br-1').forEach((result) => { result.classList.toggle('bar1-on'); })

    document.querySelectorAll('.br-2').forEach((result) => { result.classList.toggle('bar2-on'); })

    document.querySelectorAll('.br-3').forEach((result) => { result.classList.toggle('bar3-on'); })
    //Estos tres comandos son para mover las tres barras del boton simulando una x

    document.querySelectorAll('.menu-on').forEach((result) => { result.classList.toggle('menu-wave-on'); })

    document.querySelectorAll('.smooth-menu').forEach((result) => { result.classList.toggle('menu-grid-smooth'); })

    document.querySelectorAll('.freeze').forEach((result) => { result.classList.toggle('menu-block'); })
}

function darkm() { 

    if (prefersDarkScheme.matches) {
    document.body.classList.toggle("light-theme");
    var theme = document.body.classList.contains("light-theme")
        ? "light"
        : "dark";
    } else {
        
    document.body.classList.toggle("dark-theme");
    var theme = document.body.classList.contains("dark-theme")
        ? "dark"
        : "light";
    }

    localStorage.setItem("theme", theme);
        document.querySelectorAll('.dl').forEach((result) => { result.classList.toggle('demo'); })
};

if (currentTheme == "dark") {
    document.body.classList.toggle("dark-theme");
    } else if (currentTheme == "light") {
    document.body.classList.toggle("light-theme");
}
