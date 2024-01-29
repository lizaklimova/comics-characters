import { getRandomFiveCharacters } from './service/marvelApi';

const imgPlug = document.querySelector('.character_image_plug');
const randomImg = document.querySelector('.fetched');
const randomTextItems = document.querySelectorAll('.text_block_item');
const randomNames = document.querySelectorAll('.character_name');
const randomInfos = document.querySelectorAll('.character_info');

const fetchRandomCharacters = async () => {
  try {
    const res = await getRandomFiveCharacters();
    // imgPlug.style.display = none;
    // randomImg.style.display = 'block';
    randomImg.src = `${res[0].thumbnail.path}.${res[0].thumbnail.extension}`;

    res.forEach(({ name, description, thumbnail }, i) => {
      randomInfos[i].innerHTML = description;
      randomNames[i].innerHTML = name;
      // randomImg.className = 'character_image';

      randomTextItems[i].addEventListener('click', () => {
        randomTextItems.forEach(item => {
          item.classList.remove('active');
        });

        randomTextItems[i].classList.add('active');
        randomImg.src = `${thumbnail.path}.${thumbnail.extension}`;
        randomImg.classList.add('active');
      });
    });
  } catch ({ message }) {
    console.log(message);
  }
};
fetchRandomCharacters();
