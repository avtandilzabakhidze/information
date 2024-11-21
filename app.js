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
  'test-test10': 1,

  'test-test11': 0,
  'test-test12': 0,
  'test-test13': 2,
  'test-test14': 0,
  'test-test15': 2,
  'test-test16': 2,
  'test-test17': 0,
  'test-test18': 1,
  'test-test19': 2,
  'test-test20': 2,

  'test-test31': 0,
  'test-test32': 2,
  'test-test33': 2,
  'test-test34': 0,
  'test-test35': 1,
  'test-test36': 0,
  'test-test37': 1,
  'test-test38': 3,
  'test-test39': 3,
  'test-test40': 0,


  'test-test41': 0,
  'test-test42': 0,
  'test-test43': 1,
  'test-test44': 0,
  'test-test45': 3,
  'test-test46': 0,
  'test-test47': 0,
  'test-test48': 1,
  'test-test49': 2,
  'test-test50': 1,

  'test-test51': 0,
  'test-test52': 3,
  'test-test53': 2,
  'test-test54': 3,
  'test-test55': 2,
  'test-test56': 0,
  'test-test57': 1,
  'test-test58': 3,
  'test-test59': 0,
  'test-test60': 3
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
    }, 600);
  }
}
