import styled from 'styled-components/native'
import { colors, metrics } from '../../styles'
import { LinearGradient } from 'expo-linear-gradient'
import ICON from '@expo/vector-icons/Ionicons'

const Container = styled.ScrollView`
  flex: 1;
  background-color: ${colors.BgPrimary};
`

const CurrentSeries = styled.View`
  height: ${metrics.spotlight}px;
  background-color: ${colors.BgSecondary};
`

const BlurImage = styled.ImageBackground.attrs({
  resizeMode: 'cover',
  blurRadius: 50,
})`
  width: 100%;
  height: 80%;
`

const Linear = styled(LinearGradient).attrs({
  colors: ['transparent', colors.BgSecondary],
  start: { x: 0, y: 0 },
  end: { x: 0, y: 0.97 },
})`
  height: 100%;
`

const Infos = styled.View`
  position: absolute;
  flex: 1;
  top: 0;
  height: 100%;
  width: 100%;
  padding-top: ${metrics.header}px;
  justify-content: space-between;
`

const Cover = styled.View`
  justify-content: center;
  align-items: center;
  box-shadow: 4px 4px 10px black;
`

const Image = styled.Image`
  width: ${metrics.width / 3}px;
  height: ${metrics.width / 2}px;
  border-radius: 4px;
`

const Options = styled.View`
  margin: 0px 8px;
`

const PlayButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 32px;
  margin: 16px 0px;
  border-radius: 2px;
  background-color: ${colors.RedPrimary};
`

const Icon = styled(ICON).attrs(props => ({
  name: props.type,
  size: 25,
  color: 'white',
}))``

const TextButton = styled.Text`
  font-size: 14px;
  margin-left: 4px;
  color: white;
  font-weight: bold;
`

const DescriptionContet = styled.View`
  margin-bottom: 16px;
`

const Description = styled.Text`
  font-size: 12px;
  color: white;
  font-weight: bold;
  text-align: left;
`

const CastContent = styled.View`
  margin-bottom: 16px;
`

const Cast = styled.Text`
  font-size: 12px;
  color: ${colors.Grey};
  text-align: left;
`

const SeriesActions = styled.View`
  justify-content: space-between;
  flex-direction: row;
  margin-left: 16px;
  width: 60%;
  height: 60px;
`

const Actions = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  align-items: center;
`

const ActionText = styled.Text`
  font-size: 11px;
  color: ${colors.Grey};
  text-align: left;
`

const EpisodesContent = styled.View`
  margin-top: 4px;
  padding: 0 8px;
  background-color: ${colors.BgSecondary};
`

const SeasonsActionsContainer = styled.View`
  flex-direction: row;
`

const SeasonsActionsContent = styled.View`
  flex-direction: row;
`

const SeasonsActions = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  border-color: ${props => (props.active ? colors.RedPrimary : 'transparent')};
  border-top-width: 4px;
`

const SeasonsActionsText = styled.Text`
  font-size: 14px;
  padding-top: 16px;
  padding-bottom: 32px;
  color: ${props => (props.active ? 'white' : colors.Grey)};
  font-weight: bold;
`

const Separator = styled.View`
  width: 10px;
`

export {
  Container,
  CurrentSeries,
  BlurImage,
  Linear,
  Infos,
  Cover,
  Image,
  Options,
  PlayButton,
  Icon,
  TextButton,
  DescriptionContet,
  Description,
  CastContent,
  Cast,
  SeriesActions,
  Actions,
  ActionText,
  EpisodesContent,
  SeasonsActionsContainer,
  SeasonsActionsContent,
  SeasonsActions,
  SeasonsActionsText,
  Separator,
}
