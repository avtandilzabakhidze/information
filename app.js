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
        let resultMessage = ``;
        let gifUrl = '';

        if (score <= 3) {
          gifUrl = 'https://i.gifer.com/3tfo.gif';
          resultMessage = `ცუდი შედეგი, შედეგი: ${score} / 10`;
        } else if (score <= 7) {
          gifUrl = 'https://media4.giphy.com/media/TFiA77l0TNNGgyS58H/giphy.gif?cid=6c09b952qrmb1146kerpm6hdqznm247bvjczn7t0wte5iv1q&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g'; 
          resultMessage = `ნორმალური დასასრული , შედეგი: ${score} / 10`;
        }else{
          gifUrl = 'https://media.tenor.com/A06Ykcsz23wAAAAM/coolz.gif';
          resultMessage = `წარმატებული დასასრული , შედეგი: ${score} / 10`;
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

// submit button stay 
function handleFormSubmit(event) {
  event.preventDefault();

  const emailInput = document.getElementById('email').value;
  if (emailInput) {
    console.log('Email submitted:', emailInput);
  } else {
    console.log('Email field is empty');
  }

  return false;
}