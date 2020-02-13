import styled from 'styled-components/native'

const Container = styled.View``

const Title = styled.Text`
  font-size: 20px;
  margin-bottom: 8px;
  margin-left: 8px;
  color: #fff;
  font-weight: bold;
`

const List = styled.FlatList`
  margin-bottom: 24px;
`
const Item = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})``

export { Container, List, Title, Item }
