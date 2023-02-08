const menuContainer = document.querySelector('.div-container');
const btnToggle = document.querySelector('.btn-toggle');
const btnClose = document.querySelector('.close-btn');
const Link = document.querySelector('.nav-link');

btnToggle.addEventListener('click', () => {
  menuContainer.classList.toggle('show-menu');
});
btnClose.addEventListener('click', () => {
  menuContainer.classList.toggle('show-menu');
});
Link.forEach((link) => {
  link.addEventListener('click', () => {
    menuContainer.classList.toggle('show-menu');
  });
});