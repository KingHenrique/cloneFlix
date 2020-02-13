import styled from 'styled-components/native'
import { metrics, colors } from '../../styles'
import ICON from '@expo/vector-icons/Ionicons'

const Container = styled.View``

const CurrentSeason = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`

const Text = styled.Text`
  font-size: 13px;
  color: white;
  font-weight: bold;
  margin-right: 8px;
`

const Icon = styled(ICON).attrs(props => ({
  name: props.type,
  size: props.size,
  color: colors.CleanBlue,
}))``

const EpisodeContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})``

const EpisodeContent = styled.View`
  flex-direction: row;
  padding-bottom: 16px;
`

const CoverContent = styled.View`
  flex: 1.5;
  justify-content: center;
  align-items: center;
`

const Cover = styled.Image`
  width: 100%;
  height: 100px;
`

const InfosContent = styled.View`
  flex: 2;
  align-items: center;
  justify-content: space-between;
  margin: 0 8px;
  flex-direction: row;
`

const TextInfos = styled.View``

const Title = styled.Text`
  font-size: 13px;
  color: white;
  font-weight: bold;
  text-align: left;
`

const Duration = styled.Text`
  font-size: 12px;
  color: ${colors.Grey};
  text-align: left;
`

const DescriptionContent = styled.View`
  padding-bottom: 16px;
`

const Description = styled.Text`
  font-size: 12px;
  color: ${colors.Grey};
  text-align: left;
`

export {
  Container,
  CurrentSeason,
  Icon,
  Text,
  EpisodeContainer,
  EpisodeContent,
  CoverContent,
  Cover,
  InfosContent,
  TextInfos,
  Title,
  Duration,
  DescriptionContent,
  Description,
}
