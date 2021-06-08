import images from '../Assets';

/**
 *
 * @param Theme can be spread like {Colors, NavigationColors, Gutters, Layout, Common, ...args}
 * @return {*}
 */
images;
export default function () {
  return {
    logo: require('../Assets/Images/TOM.png'),
    ...images,
  };
}
