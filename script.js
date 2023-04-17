new WOW().init();

let menu = document.querySelector('div');
menu.addEventListener('click', function (e) {
    menu.classList.toggle('toggleMenu');
})