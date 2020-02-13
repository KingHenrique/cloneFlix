import { Platform, Dimensions } from 'react-native'
import { getStatusBarHeight, isIphoneX } from 'react-native-iphone-x-helper'
import { Header } from 'react-navigation'

export default {
  height: Dimensions.get('window').height,
  width: Dimensions.get('window').width,
  header: isIphoneX() ? Header.HEIGHT + getStatusBarHeight() : Header.HEIGHT,
  spotlight: isIphoneX()
    ? Header.HEIGHT +
      getStatusBarHeight() +
      Dimensions.get('window').height / 1.5
    : Header.HEIGHT + Dimensions.get('window').height / 1.5,
}
