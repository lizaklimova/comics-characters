import md5 from 'md5';

export const createMD5Hash = (timestamp, privateKey, publicKey) => {
  const dataToHash = timestamp + privateKey + publicKey;
  const md5Hash = md5(dataToHash);
  return md5Hash;
};
