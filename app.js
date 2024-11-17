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
function checkAnswer(element, isCorrect, nextTestId) {
  if (isCorrect) {
    element.style.border = "2px solid green";
    if (nextTestId) {
      setTimeout(() => {
        element.closest('.container').parentElement.style.display = 'none';
        document.getElementById(nextTestId).style.display = 'block';
      }, 1000); 
    }
  } else {
    element.style.border = "2px solid red";
    setTimeout(() => {
      element.closest('.container').parentElement.style.display = 'none';
      document.getElementById(nextTestId).style.display = 'block';
    }, 1000);
  }

  const options = document.querySelectorAll(`#${element.closest('.container').parentElement.id} .option`);
  options.forEach(option => option.onclick = null);
}