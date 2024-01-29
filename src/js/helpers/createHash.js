import md5 from 'md5';

const createMD5Hash = (timestamp, privateKey, publicKey) => {
  const dataToHash = timestamp + privateKey + publicKey;
  const md5Hash = md5(dataToHash);
  return md5Hash;
};

export default createMD5Hash;
