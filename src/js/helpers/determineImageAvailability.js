import { DEFAULT_IMG_URL } from '../../constants';

export const determineImageAvailability = ({ path, extension }) => {
  return path.includes('image_not_available')
    ? DEFAULT_IMG_URL
    : `${path}.${extension}`;
};
