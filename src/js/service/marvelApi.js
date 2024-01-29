import axios from 'axios';
import dotenv from 'dotenv';
import createMD5Hash from '../helpers';
dotenv.config();

const { PUBLIC_KEY, PRIVATE_KEY } = process.env;

const BASE_URL = 'https://gateway.marvel.com/v1/public/';

axios.defaults.baseURL = BASE_URL;

const ts = Date.now();
axios.defaults.params = {
  ts,
  apikey: PUBLIC_KEY,
  hash: createMD5Hash(ts, PRIVATE_KEY, PUBLIC_KEY),
};

export const getCharacters = async () => {
  try {
    const {
      data: { data },
    } = await axios('characters');

    return data.results;
  } catch ({ message }) {
    console.log(message);
  }
};

export const getRandomFiveCharacters = async () => {
  try {
    const {
      data: { data },
    } = await axios('characters');

    const randomEndIndex = Math.floor(Math.random() * (20 - 5) + 5);
    const randomStartIndex = randomEndIndex - 5;

    return data.results.slice(randomStartIndex, randomEndIndex);
  } catch ({ message }) {
    console.log(message);
  }
};
