import styled from 'styled-components/native'
import { metrics } from '../../styles'
import ICON from '@expo/vector-icons/Ionicons'

const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  position: absolute;
  top: ${metrics.header - 30}px;
  right: ${metrics.header - 30}px;
  height: 30px;
  width: 30px;
  background-color: rgba(0, 0, 0, 0.2);
  justify-content: center;
  align-items: center;
  border-radius: ${30 / 2}px;
  z-index: 5;
`

const Icon = styled(ICON).attrs({
  name: 'ios-close',
  size: 30,
  color: 'white',
})``

export { Container, Icon }
