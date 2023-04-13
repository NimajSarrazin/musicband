const hamburger = document.querySelector('#menu_burger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', ()=>{
    navMenu.classList.toggle('menu_display');
});

navMenu.addEventListener('click', ()=> {
    navMenu.classList.toggle('menu_display');
});






// const burger = document.querySelector('#menu_burger');
// const nav = document.querySelector('#menu_open');

// burger.addEventListener('click', () => {
//     nav.classList.toggle('menu_display');
// });
// nav.addEventListener('click', () => {
//     nav.classList.toggle('menu_display');
// });
