new WOW().init();

let menu = document.querySelector('.hamburger');
let header = document.querySelector('header');
let openMenu = false;
menu.addEventListener('click', function (e) {
    menu.disabled = true;
    menu.classList.toggle('toggleMenu');
    if (!openMenu) {
        openMenu = true;
        header.style.height = '1280px';
    }
    else {
        openMenu = false;
        header.style.height = '1080px';
    }
    menu.disabled = false;
})
