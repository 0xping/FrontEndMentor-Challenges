const humbuggerMenu = document.querySelector('.nav__icon');
const menu = document.querySelector('.nav__menu');
humbuggerMenu.addEventListener('click', () => {
    humbuggerMenu.classList.toggle('nav__icon--active')
    menu.classList.toggle('nav__menu--active')
})