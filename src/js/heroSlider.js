const rightPart = document.querySelector('.right_img');
const leftPart = document.querySelector('.left_part');
const buttonsContainer = document.querySelector('.slider_btns_list');
const redirectBtn = document.querySelector('.characters_redirect_btn');
const decorCircle = document.querySelector('.decor_circle');
const decorArrow = document.querySelector('.decor_arrow');
const buttonsArr = Array.from(buttonsContainer.querySelectorAll('.slider_btn'));

const changeSlideAutomatically = () => {
  let activeIndex = buttonsArr.findIndex(btn =>
    btn.classList.contains('active')
  );
  activeIndex = (activeIndex + 1) % buttonsArr.length;
  buttonsArr[activeIndex].click();
};

// const intervalId = setInterval(changeSlideAutomatically, 3000);

buttonsContainer.addEventListener('click', event => {
  buttonsArr.forEach(btn => {
    btn.classList.remove('active', 'panther', 'hulk', 'spiderman');
  });

  const btnIndex = buttonsArr.indexOf(event.target);

  leftPart.className = 'left_part';
  rightPart.className = 'right_img';
  decorCircle.className = 'decor_circle';
  redirectBtn.className = 'characters_redirect_btn';
  decorArrow.className.baseVal = 'decor_arrow';

  switch (btnIndex) {
    case 0:
      leftPart.classList.add('panther');
      rightPart.classList.add('panther');
      decorCircle.classList.add('panther');
      decorArrow.classList.add('panther');
      redirectBtn.classList.add('panther');
      buttonsArr[0].classList.add('slider_btn', 'active', 'panther');

      decorCircle.innerHTML = 'Black panther';
      break;
    case 1:
      leftPart.classList.add('hulk');
      rightPart.classList.add('hulk');
      decorCircle.classList.add('hulk');
      decorArrow.classList.add('hulk');
      redirectBtn.classList.add('hulk');
      buttonsArr[1].classList.add('slider_btn', 'active', 'hulk');

      decorCircle.innerHTML = 'Hulk';
      break;
    case 2:
      leftPart.classList.add('spiderman');
      rightPart.classList.add('spiderman');
      decorCircle.classList.add('spiderman');
      decorArrow.classList.add('spiderman');
      redirectBtn.classList.add('spiderman');
      buttonsArr[2].classList.add('slider_btn', 'active', 'spiderman');

      decorCircle.innerHTML = 'Spider <br/> Man';
      break;
    default:
      leftPart.classList.add('panther');
      rightPart.classList.add('panther');
      decorCircle.classList.add('panther');
      decorArrow.classList.add('panther');
      redirectBtn.classList.add('panther');
      buttonsArr[0].classList.add('active', 'panther');

      decorCircle.innerHTML = 'Black panther';
  }
});
