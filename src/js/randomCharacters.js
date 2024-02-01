import { getRandomFiveCharacters } from './service/marvelApi';
import { DEFAULT_DESCRIPTION } from '../constants';
import { determineImageAvailability } from './helpers';

const randomImg = document.querySelector('.character_image');
const randomNames = document.querySelectorAll('.character_name');
const randomInfos = document.querySelectorAll('.character_info');
const randomTextItems = Array.from(
  document.querySelectorAll('.text_block_item')
);

const changeRandomAutomatically = () => {
  let activeIndex = randomTextItems.findIndex(item =>
    item.classList.contains('active')
  );
  activeIndex = (activeIndex + 1) % randomTextItems.length;
  randomTextItems[activeIndex].click();
};

const randomIntervalId = setInterval(changeRandomAutomatically, 3500);

const fetchRandomCharacters = async () => {
  try {
    const res = await getRandomFiveCharacters();

    const currentImage = determineImageAvailability(res[0].thumbnail);
    randomImg.src = currentImage;

    res.forEach(({ id, name, description, thumbnail }, i) => {
      const characterDescr = description ? description : DEFAULT_DESCRIPTION;

      randomInfos[i].innerHTML = characterDescr;
      randomNames[i].innerHTML = name;
      randomImg.dataset.id = id;
      randomImg.className = 'character_image';

      randomTextItems[i].addEventListener('click', event => {
        if (event.isTrusted) {
          clearInterval(randomIntervalId);
        }

        randomTextItems.forEach(item => {
          item.classList.remove('active');
        });

        randomImg.classList.remove('active');

        randomImg.src = determineImageAvailability(thumbnail);
        randomTextItems[i].classList.add('active');
        randomImg.classList.add('fetched');

        setTimeout(() => {
          randomImg.classList.add('active');
        }, 500);
      });
    });
  } catch ({ message }) {
    console.log(message);
  }
};
fetchRandomCharacters();
