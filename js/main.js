const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

const currentTheme = (localStorage.getItem("theme"));

const mtag = document.querySelector("meta[name=color-theme]");

let LastScrollY = window.scrollY

window.addEventListener("scroll", () => {

    if(LastScrollY < window.scrollY) {
        console.log("arriba");
        document.querySelectorAll('.scroll-hd').forEach((result) => { result.classList.add('header-scroll'); })
        document.querySelectorAll('.scroll-tx').forEach((result) => { result.classList.add('resolt'); })
        document.querySelectorAll('.scroll-bg').forEach((result) => { result.classList.add('bg-resolt'); })
        document.querySelectorAll('.scroll-btn').forEach((result) => { result.classList.add('btn-resolt'); })
    } else { 
        console.log("abajo");
        document.querySelectorAll('.scroll-hd').forEach((result) => { result.classList.remove('header-scroll');})
        document.querySelectorAll('.scroll-tx').forEach((result) => { result.classList.remove('resolt'); })
        document.querySelectorAll('.scroll-bg').forEach((result) => { result.classList.remove('bg-resolt'); })
        document.querySelectorAll('.scroll-btn').forEach((result) => { result.classList.remove('btn-resolt'); })
    }
})

function ClickMenu() {
    document.querySelectorAll('.br-1').forEach((result) => { result.classList.toggle('bar1-on'); })

    document.querySelectorAll('.br-2').forEach((result) => { result.classList.toggle('bar2-on'); })
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
