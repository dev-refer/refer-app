import { Platform, Dimensions, NativeModules } from 'react-native';
import { get } from 'lodash';

export const isAndroid = () => Platform.OS === 'android';
export const isIOS = () => Platform.OS === 'ios';
export const isNative = () =>
  Platform.OS === 'android' || Platform.OS === 'ios';
export const isIpad = () => {
  return isIOS() && get(NativeModules, 'DeviceProfile.device', 'iPhone') === 'iPad';
};
export const isIphoneX = () => {
  const { height, width } = Dimensions.get('window');
  let ratio = height / width;
  if (width > height) {
    ratio = width / height;
  }
  return (isIOS() && ratio >= 2.0);
};
export const iPhoneMarginTopSafeArea = () => (isIphoneX() ? 44 : 20);
export const osVersion = () => {
  return parseInt(Platform.Version, 10);
};

export const iOSBefore10 = () => {
  return (osVersion() <= 10);
};

export const IOSAfter10 = () => {
  return (osVersion() >= 11 && isIOS());
};

export const isViewPort320 = () => {
  const { width } = Dimensions.get('window');
  if (width === 320) {
    return true;
  }
  return false;
};

export default {
  isAndroid,
  isIOS,
  isNative,
  isIphoneX,
  iPhoneMarginTopSafeArea,
  iOSBefore10,
  IOSAfter10,
  isViewPort320
};
