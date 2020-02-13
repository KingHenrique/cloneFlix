import styled from 'styled-components/native'
import { colors, metrics } from '../../styles'
import ICON from '@expo/vector-icons/MaterialCommunityIcons'

const Container = styled.View`
  height: ${metrics.header}px;
  background-color: rgba(0, 0, 0, 0.02);
`

const Content = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
`

const LogoContent = styled.View`
  flex: 1;
  height: 30px;
  justify-content: center;
  align-items: center;
`

const Logo = styled(ICON).attrs({
  name: 'netflix',
  size: 30,
  color: colors.RedPrimary,
})``

const MenuContent = styled.View`
  flex: 5;
  height: 30px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`

const MenuItem = styled.TouchableOpacity``

const Text = styled.Text`
  font-size: 14px;
  color: white;
  box-shadow: 1px 1px 4px black;
`

export { Container, Content, LogoContent, Logo, MenuContent, MenuItem, Text }
