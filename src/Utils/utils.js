import { Image } from 'react-native';

const calculateImageFixParent = ({ widthParent, heighParent }, sourceImage) => {
  const { width, height } = Image.resolveAssetSource(sourceImage) || {};
  const aspectRatio = width / height;
  const operator = widthParent > heighParent ? 1 / aspectRatio : aspectRatio;
  return {
    fixWidth: aspectRatio > 1 ? widthParent : heighParent * operator,
    fixHeight: aspectRatio < 1 ? heighParent : widthParent * operator,
  };
};

export { calculateImageFixParent };
