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
  'test-test42': 2,
  'test-test43': 1,
  'test-test44': 1,
  'test-test45': 0,
  'test-test46': 3,
  'test-test47': 3,
  'test-test48': 1,
  'test-test49': 1,
  'test-test50': 0,

  'test-test51': 0,
  'test-test52': 3,
  'test-test53': 2,
  'test-test54': 3,
  'test-test55': 2,
  'test-test56': 0,
  'test-test57': 1,
  'test-test58': 3,
  'test-test59': 0,
  'test-test60': 3,
  
  'test-test61': 3,
  'test-test62': 3,
  'test-test63': 1,
  'test-test64': 0,
  'test-test65': 0,
  'test-test66': 2,
  'test-test67': 1,
  'test-test68': 0,
  'test-test69': 3,
  'test-test70': 3,
    
  'test-test71': 0,
  'test-test72': 3,
  'test-test73': 1,
  'test-test74': 0,
  'test-test75': 2,
  'test-test76': 0,
  'test-test77': 2,
  'test-test78': 3,
  'test-test79': 0,
  'test-test80': 3,

  'test-test81': 3,
  'test-test82': 1,
  'test-test83': 1,
  'test-test84': 2,
  'test-test85': 2,
  'test-test86': 3,
  'test-test87': 2,
  'test-test88': 2,
  'test-test89': 0,
  'test-test90': 1,
  
  'test-test91': 0,
  'test-test92': 2,
  'test-test93': 3,
  'test-test94': 1,
  'test-test95': 2,
  'test-test96': 0,
  'test-test97': 1,
  'test-test98': 0,
  'test-test99': 3,
  'test-test100': 1,

  'test-test161': 3,
  'test-test162': 1,
  'test-test163': 0,
  'test-test164': 1,
  'test-test165': 2,
  'test-test166': 0,
  'test-test167': 2,
  'test-test168': 3,
  'test-test169': 0,
  'test-test170': 3,

  'test-test171': 3,
  'test-test172': 3,
  'test-test173': 1,
  'test-test174': 0,
  'test-test175': 1,
  'test-test176': 2,
  'test-test177': 3,
  'test-test178': 1,
  'test-test179': 0,
  'test-test180': 3,

  'test-test181': 0,
  'test-test182': 1,
  'test-test183': 3,
  'test-test184': 0,
  'test-test185': 1,
  'test-test186': 2,
  'test-test187': 1,
  'test-test188': 3,
  'test-test189': 1,
  'test-test190': 3
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
          gifUrl = 'https://media1.giphy.com/media/UdM6BoaQyIZHMU7YHu/200w.gif?cid=6c09b9528mhahnv9j80b11eo44t6q1c4td0umo0o0rucdj1n&ep=v1_gifs_search&rid=200w.gif&ct=g';
          resultMessage = `არაუშავს! კიდევ სცადე 🚶‍♂️ შედეგი: ${score} / 10`;
        } else if (score < 7) {
          gifUrl = 'https://i.pinimg.com/originals/9c/f4/36/9cf4361811aca2cfbf0d984cb3a8996f.gif'; 
          resultMessage = `გილოცავ! ნელ-ნელა მწვერვალს უახლოვდები 🧗‍♂️ შედეგი: ${score} / 10`;
        }else if(score < 10){
          gifUrl = 'https://media.tenor.com/KRnLmD-HYAMAAAAM/wow-oh.gif';
          resultMessage = `საუკეთესო ხარ! 🏆 შედეგი: ${score} / 10`;
        } else {
          gifUrl = 'https://media4.giphy.com/media/fDbzXb6Cv5L56/200w.gif?cid=6c09b95274hcsb043e2ew6m0nec5ptg6uftazocqe1ozjve3&ep=v1_gifs_search&rid=200w.gif&ct=g';
          resultMessage = `WOW! მაქსიმალური ქულა! 👑 შედეგი: ${score} / 10`;
      }

        nextTestElement.innerHTML = `
          <div class="container" style="text-align: center;">
            <img class="container" src="${gifUrl}" style="max-width: 1000px; max-height: 700px; display: block; margin: 0 auto;">
            <p class="container" style="text-align: center !important; padding: 20px 0; margin: 0 auto !important;">${resultMessage}</p>
          </div>
        `;
      }
    }, 500);
  }
}

// submit button stay 
function handleFormSubmit(event) {
  event.preventDefault();

  const emailInput = document.getElementById('email');
  const emailValue = emailInput.value;

  if (emailValue) {
    console.log('Email submitted:', emailValue);
    setTimeout(() => {
      emailInput.value = '';
    }, 500);
  } else {
    console.log('Email field is empty');
  }

  return false;
}