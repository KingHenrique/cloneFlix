import styled from 'styled-components/native'
import { Animated } from 'react-native'
import { colors } from '../../styles'
import { LinearGradient } from 'expo-linear-gradient'
import ICON from '@expo/vector-icons/MaterialCommunityIcons'
import BG from '../../../assets/featuredSeries.png'
import LOGO from '../../../assets/vikings_logo.png'

const Container = styled.View``

const AnimatedImage = styled(Animated.View)``

const Image = styled.ImageBackground.attrs({
  source: BG,
  resizeMode: 'cover',
})`
  width: 100%;
  height: 100%;
`

const LinearContent = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
`

const Linear = styled(LinearGradient).attrs({
  colors: ['transparent', colors.BgPrimary],
  start: { x: 0, y: 0 },
  end: { x: 0, y: 0.97 },
})`
  justify-content: flex-end;
  height: 100%;
`

const Infos = styled.View`
  height: 200px;
`

const Logo = styled.ImageBackground.attrs({
  source: LOGO,
  resizeMode: 'contain',
})`
  width: 100%;
  height: 100%;
  justify-content: flex-start;
`

const LogoContent = styled.View`
  height: 100px;
`

const SeriesTags = styled.View`
  margin-top: 24px;
  justify-content: center;
  flex-direction: row;
`

const Tags = styled.Text`
  font-size: 14px;
  color: #fff;
  box-shadow: 1px 1px 4px black;
`

const Options = styled.View`
  flex: 1;
  margin-top: 16px;
  justify-content: space-around;
  flex-direction: row;
`

const OptionsButton = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const OptionsText = styled.Text`
  font-size: 14px;
  color: #fff;
  box-shadow: 1px 1px 4px black;
`

const Icon = styled(ICON).attrs(props => ({
  name: props.type,
  size: 30,
  color: props.type != 'play' ? 'white' : colors.BgPrimary,
}))``

const PlayerButton = styled.View`
  width: 100%;
  height: 32px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 2px;
`

const ButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.BgPrimary};
`

export {
  Container,
  AnimatedImage,
  Image,
  LinearContent,
  Linear,
  Infos,
  LogoContent,
  Logo,
  SeriesTags,
  Tags,
  Options,
  OptionsButton,
  OptionsText,
  PlayerButton,
  ButtonText,
  Icon,
}
