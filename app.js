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

      if (nextTestId === 'test-resut' && score <= 1) {
        nextTestElement.innerHTML += ` <div class="container" style="text-align: center;"><img class="container" src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHdjZ3ViY2lscW9ldHY0Y2pxYjR3N2N3ZmY2ZGU1OHdqZmx3bzhvayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/UShW8A2CRzW67yU4qp/giphy.webp" 
        style="max-width: 1000px; max-height: 700px; display: block; margin: 0 auto;"><p class = "container" style = "text-aling: center !important; padding: 20px 0; margin: 0 auto !important;">წარმატებული დასასრული , შედეგი: ${score}</p> </div>`;
       } else if (nextTestId === 'test-resut' && score <= 2)
       {
         nextTestElement.innerHTML += ` <div class="container" style="text-align: center;"><img class="container" src="https://media3.giphy.com/media/l41m5h1yLXqAi5Uf6/giphy.gif?cid=6c09b952fk9caxrlrikdmhba0ux72fi7mppj77wbl96x4qeg&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g" 
         style="max-width: 1000px; max-height: 700px; display: block; margin: 0 auto;"><p class = "container" style = "text-aling: center !important; padding: 20px 0; margin: 0 auto !important;">წარმატებული დასასრული , შედეგი: ${score}</p> </div>`;
       }
    }, 1000);
  }

  const options = document.querySelectorAll(`#${element.closest('.container').parentElement.id} .option`);
  options.forEach(option => option.onclick = null);
}
