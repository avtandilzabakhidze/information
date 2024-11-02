const navbarToggler = document.querySelector('.navbar-toggler');
const navbarBrand = document.getElementById('navbarBrand');

navbarToggler.addEventListener('click', () => {
  if (navbarBrand.style.display === 'none') {
    setTimeout(() => {
      navbarBrand.style.display = 'block';
    }, 400);
  } else {
    navbarBrand.style.display = 'none';
  }
});