import {
  getRandomCharacter,
  getRandomCharacterComics,
} from '../service/marvelApi';

const backdrop = document.querySelector('.backdrop[data-backdrop]');
const modal = document.querySelector('.modal_window[data-modal]');
const closeBtn = document.querySelector('.close_btn[data-modal-close]');
const randomCharacterImg = document.querySelector('[data-modal-open]');

const closeModal = () => {
  backdrop.classList.replace('is-shown', 'is-hidden');
};

const openModal = () => {
  backdrop.classList.replace('is-hidden', 'is-shown');
};

window.addEventListener('keydown', e => {
  if (e.code === 'Escape') {
    closeModal();
  }
});

randomCharacterImg.addEventListener('click', async e => {
  // await getRandomCharacterComics(e.target.dataset.id);
  openModal();
  await getRandomCharacter(e.target.dataset.id);
});
closeBtn.addEventListener('click', closeModal);
backdrop.addEventListener('click', e => {
  if (e.target === e.currentTarget) {
    closeModal();
  }
});
