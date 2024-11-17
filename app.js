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
let score = 0;

function checkAnswer(element, isCorrect, nextTestId) {
  if (isCorrect) {
    element.style.border = "2px solid green";
    score++;
  } else {
    element.style.border = "2px solid red";
  }

  if (nextTestId) {
    setTimeout(() => {
      element.closest('.container').parentElement.style.display = 'none';
      const nextTestElement = document.getElementById(nextTestId);
      nextTestElement.style.display = 'block';

      if (nextTestId === 'test-resut') {
        nextTestElement.innerHTML += `<p class = "container">წარმატებული დასასრული , შედეგი: ${score}</p>`;
      }
    }, 1000);
  }

  const options = document.querySelectorAll(`#${element.closest('.container').parentElement.id} .option`);
  options.forEach(option => option.onclick = null);
}
