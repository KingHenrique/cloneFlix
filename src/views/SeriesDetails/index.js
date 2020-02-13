import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Episodes, CloseButton } from '../../components'
import * as C from './styles'
import PropTypes from 'prop-types'

export default function SeriesDetails() {
  const { cover, description, cast } = useSelector(
    state => state.SeriesRedux.currentSeries
  )

  const [seasonsActions, setSeasonsActions] = useState([
    {
      name: 'EPISÓDIOS',
      active: true,
    },
    {
      name: 'TÍTULOS SEMELHANTES',
      active: false,
    },
  ])

  const seriesActions = [
    {
      icon: 'ios-add',
      text: 'Minha lista',
    },
    {
      icon: 'ios-thumbs-up',
      text: 'Classifique',
    },
    {
      icon: 'ios-send',
      text: 'Compartilhe',
    },
  ]

  function checkTab(index) {
    return seasonsActions[index].active == true ? true : false
  }

  function changeSelected(index) {
    if (checkTab(index)) return

    setSeasonsActions(
      seasonsActions.map(action => {
        return {
          ...action,
          active: !action.active,
        }
      })
    )
  }

  return (
    <C.Container showsVerticalScrollIndicator={false}>
      <CloseButton />
      <C.CurrentSeries>
        <C.BlurImage source={{ uri: cover }}>
          <C.Linear />
        </C.BlurImage>
        <C.Infos>
          <C.Cover>
            <C.Image source={{ uri: cover }} />
          </C.Cover>
          <C.Options>
            <C.PlayButton>
              <C.Icon type={'ios-play'} />
              <C.TextButton>Assistir</C.TextButton>
            </C.PlayButton>
            <C.DescriptionContet>
              <C.Description numberOfLines={3}>{description}</C.Description>
            </C.DescriptionContet>
            <C.CastContent>
              <C.Cast>{`Elenco: ${cast}`}</C.Cast>
            </C.CastContent>
            <C.SeriesActions>
              {seriesActions.map((action, index) => (
                <C.Actions key={index}>
                  <C.Icon type={action.icon} />
                  <C.ActionText>{action.text}</C.ActionText>
                </C.Actions>
              ))}
            </C.SeriesActions>
          </C.Options>
        </C.Infos>
      </C.CurrentSeries>
      <C.EpisodesContent>
        <C.SeasonsActionsContainer>
          {seasonsActions.map(({ name, active }, index) => (
            <C.SeasonsActionsContent key={index}>
              <C.SeasonsActions
                active={active}
                onPress={() => changeSelected(index)}>
                <C.SeasonsActionsText active={active}>
                  {name}
                </C.SeasonsActionsText>
              </C.SeasonsActions>
              <C.Separator />
            </C.SeasonsActionsContent>
          ))}
        </C.SeasonsActionsContainer>
        <Episodes />
      </C.EpisodesContent>
    </C.Container>
  )
}

SeriesDetails.navigationOptions = {
  header: null,
}

SeriesDetails.defaultProps = {}

SeriesDetails.propTypes = {}
