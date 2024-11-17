const navbarToggler = document.querySelector('.navbar-toggler');
const navbarBrand = document.getElementById('navbarBrand');

navbarToggler.addEventListener('click', () => {
  const screenWidth = window.innerWidth;

  if (screenWidth < 2000) {
    navbarBrand.classList.toggle('d-block');
    navbarBrand.classList.toggle('d-none');
  }
});

// test
function checkAnswer(element, isCorrect) {
  if (isCorrect) {
    element.style.border = "2px solid green";
  } else {
    element.style.border = "2px solid rgb(231, 69, 69)";
  }
  
  // Optional: disable further clicks
  const options = document.querySelectorAll('.option');
  options.forEach(option => option.onclick = null);
}