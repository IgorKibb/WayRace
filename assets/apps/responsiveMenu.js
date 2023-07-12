const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".nav-menu");
const linkMenu = document.querySelector(".nav-menu");

hamburguer.addEventListener("click", () => {
   hamburguer.classList.toggle("active");
   navMenu.classList.toggle("active");
});

linkMenu.addEventListener("click", () => {
   hamburguer.classList.remove("active");
   navMenu.classList.remove("active");
});

//remover o drop-shadow do logo pra parar o bug
const dropShadow = document.querySelector(".logo-name-business");

hamburguer.addEventListener('click',() => {
   dropShadow.style.removeProperty('filter');
})
