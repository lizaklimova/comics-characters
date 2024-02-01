import axios from 'axios';
import dotenv from 'dotenv';
import { createMD5Hash, generateRandomLetter } from '../helpers';
import { BASE_URL } from '../../constants';
dotenv.config();

axios.defaults.baseURL = BASE_URL;

const ts = Date.now();
axios.defaults.params = {
  ts,
  apikey: process.env.PUBLIC_KEY,
  hash: createMD5Hash(ts, process.env.PRIVATE_KEY, process.env.PUBLIC_KEY),
};

export const getCharacters = async () => {
  try {
    const {
      data: { data },
    } = await axios.get('characters', {
      params: {
        limit: 100,
      },
    });
    return data.results;
  } catch ({ message }) {
    console.log(message);
  }
};

export const getRandomFiveCharacters = async () => {
  try {
    const {
      data: { data },
    } = await axios.get('characters', {
      params: {
        nameStartsWith: generateRandomLetter(),
      },
    });

    const randomEndIndex = Math.floor(Math.random() * (20 - 5) + 5);
    const randomStartIndex = randomEndIndex - 5;
    return data.results.slice(randomStartIndex, randomEndIndex);
  } catch ({ message }) {
    console.log(message);
  }
};

export const getRandomCharacter = async characterId => {
  try {
    const {
      data: { data },
    } = await axios.get(`characters/${characterId}`);

    console.log(data);
    return data.results;
  } catch ({ message }) {
    console.log(message);
  }
};

export const getRandomCharacterComics = async characterId => {
  try {
    const {
      data: { data },
    } = await axios.get(`characters/${characterId}/comics`);

    console.log(data);
    return data.results;
  } catch ({ message }) {
    console.log(message);
  }
};
