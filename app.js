const navbarToggler = document.querySelector('.navbar-toggler');
const navbarBrand = document.getElementById('navbarBrand');

navbarToggler.addEventListener('click', () => {
  const screenWidth = window.innerWidth;

  if (screenWidth < 2000) {
    navbarBrand.classList.toggle('d-block');
    navbarBrand.classList.toggle('d-none');
  }
});
