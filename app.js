const navbarToggler = document.querySelector('.navbar-toggler');
const navbarBrand = document.getElementById('navbarBrand');

navbarToggler.addEventListener('click', () => {
  const screenWidth = window.innerWidth;

  if (screenWidth < 2000) {
    navbarBrand.classList.toggle('d-block');
    navbarBrand.classList.toggle('d-none');
  }
});




let score = 0;


const correctAnswers = {
  'test-test1': 0, 
  'test-test2': 1, 
  'test-test3': 2, 
  'test-test4': 3,
  'test-test5': 1, 
  'test-test6': 2,
  'test-test7': 1, 
  'test-test8': 1,
  'test-test9': 1, 
  'test-test10': 1 
};

function checkAnswer(element, selectedIndex, nextTestId) {

  const currentTestId = element.closest('.container').parentElement.id;
  

  if (selectedIndex === correctAnswers[currentTestId]) {
    element.style.border = "2px solid green"; 
    score++;
  } else {
    element.style.border = "2px solid red"; 
  }

 
  const options = document.querySelectorAll(`#${currentTestId} .option`);
  options.forEach(option => option.onclick = null);


  if (nextTestId) {
    setTimeout(() => {
   
      element.closest('.container').parentElement.style.display = 'none';

     
      const nextTestElement = document.getElementById(nextTestId);
      nextTestElement.style.display = 'block';

      
      if (nextTestId === 'test-result') {
        const resultMessage = `წარმატებული დასასრული , შედეგი: ${score}`;
        let gifUrl = '';

        
        if (score >= 8) {
          gifUrl = 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHdjZ3ViY2lscW9ldHY0Y2pxYjR3N2N3ZmY2ZGU1OHdqZmx3bzhvayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/UShW8A2CRzW67yU4qp/giphy.webp'; // Success gif
        } else if (score <= 2) {
          gifUrl = 'https://media3.giphy.com/media/l41m5h1yLXqAi5Uf6/giphy.gif?cid=6c09b952fk9caxrlrikdmhba0ux72fi7mppj77wbl96x4qeg&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g'; // Fail gif
        }

        
        nextTestElement.innerHTML = `
          <div class="container" style="text-align: center;">
            <img class="container" src="${gifUrl}" style="max-width: 1000px; max-height: 700px; display: block; margin: 0 auto;">
            <p class="container" style="text-align: center !important; padding: 20px 0; margin: 0 auto !important;">${resultMessage}</p>
          </div>
        `;
      }
    }, 1000);
  }
}



