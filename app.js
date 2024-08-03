const menu = document.querySelector('.mobile');
const navBar = document.querySelector('.menu');
const li = document.querySelector('li:nth-child(4)');
const main = document.querySelector('.main')

menu.addEventListener('click', () => {
   navBar.classList.add("menu")
   navBar.style.display = "block";

})
navBar.addEventListener('mousedown', () => {
    navBar.style.display = "none"
})