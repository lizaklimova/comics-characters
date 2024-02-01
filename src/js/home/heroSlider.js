// const rightPart = document.querySelector('.right_img');
// const leftPart = document.querySelector('.left_part');
// const buttonsContainer = document.querySelector('.slider_btns_list');
// const redirectLink = document.querySelector('.all_characters_redirect');
// const decorCircle = document.querySelector('.decor_circle');
// const decorArrow = document.querySelector('.decor_arrow');
// const buttonsArr = Array.from(buttonsContainer.querySelectorAll('.slider_btn'));
const refs = {
  rightPart: document.querySelector('.right_img'),
  leftPart: document.querySelector('.left_part'),
  buttonsContainer: document.querySelector('.slider_btns_list'),
  redirectLink: document.querySelector('.all_characters_redirect'),
  decorCircle: document.querySelector('.decor_circle'),
  decorArrow: document.querySelector('.decor_arrow'),
};

const buttonsArr = Array.from(
  refs.buttonsContainer.querySelectorAll('.slider_btn')
);

const changeSlideAutomatically = () => {
  let activeIndex = buttonsArr.findIndex(btn =>
    btn.classList.contains('active')
  );
  activeIndex = (activeIndex + 1) % buttonsArr.length;
  buttonsArr[activeIndex].click();
};

const heroIntervalId = setInterval(changeSlideAutomatically, 3500);

refs.buttonsContainer.addEventListener('click', event => {
  if (event.isTrusted) {
    clearInterval(heroIntervalId);
  }

  buttonsArr.forEach(btn => {
    btn.classList.remove('active', 'panther', 'hulk', 'spiderman');
  });

  const btnIndex = buttonsArr.indexOf(event.target);

  refs.leftPart.className = 'left_part';
  refs.rightPart.className = 'right_img';
  refs.decorCircle.className = 'decor_circle';
  refs.redirectLink.className = 'all_characters_redirect';
  refs.decorArrow.className.baseVal = 'decor_arrow';

  switch (btnIndex) {
    case 0:
      refs.leftPart.classList.add('panther');
      refs.rightPart.classList.add('panther');
      refs.decorCircle.classList.add('panther');
      refs.decorArrow.classList.add('panther');
      refs.redirectLink.classList.add('panther');
      buttonsArr[0].classList.add('slider_btn', 'active', 'panther');

      refs.decorCircle.innerHTML = 'Black panther';
      break;
    case 1:
      refs.leftPart.classList.add('hulk');
      refs.rightPart.classList.add('hulk');
      refs.decorCircle.classList.add('hulk');
      refs.decorArrow.classList.add('hulk');
      refs.redirectLink.classList.add('hulk');
      buttonsArr[1].classList.add('slider_btn', 'active', 'hulk');

      refs.decorCircle.innerHTML = 'Hulk';
      break;
    case 2:
      refs.leftPart.classList.add('spiderman');
      refs.rightPart.classList.add('spiderman');
      refs.decorCircle.classList.add('spiderman');
      refs.decorArrow.classList.add('spiderman');
      refs.redirectLink.classList.add('spiderman');
      buttonsArr[2].classList.add('slider_btn', 'active', 'spiderman');

      refs.decorCircle.innerHTML = 'Spider <br/> Man';
      break;
    default:
      refs.leftPart.classList.add('panther');
      refs.rightPart.classList.add('panther');
      refs.decorCircle.classList.add('panther');
      refs.decorArrow.classList.add('panther');
      refs.redirectLink.classList.add('panther');
      buttonsArr[0].classList.add('active', 'panther');

      refs.decorCircle.innerHTML = 'Black panther';
  }
});
