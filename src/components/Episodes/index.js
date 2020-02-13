import React, { useState, useEffect } from 'react'
import * as C from './styles'
import episodesJson from './episodes.json'
import PropTypes from 'prop-types'

export default function Episodes() {
  const { episodes } = episodesJson

  return (
    <C.Container>
      <C.CurrentSeason>
        <C.Text>{'Temporada 1'}</C.Text>
        <C.Icon type={'ios-arrow-down'} size={20} />
      </C.CurrentSeason>
      {episodes.map(({ name, cover, description }, index) => (
        <C.EpisodeContainer key={index}>
          <C.EpisodeContent>
            <C.CoverContent>
              <C.Cover
                source={{
                  uri: cover,
                }}
              />
            </C.CoverContent>
            <C.InfosContent>
              <C.TextInfos>
                <C.Title>{`${index + 1}. ${name}`}</C.Title>
                <C.Duration>44m</C.Duration>
              </C.TextInfos>
              <C.Icon type={'md-download'} size={25} />
            </C.InfosContent>
          </C.EpisodeContent>
          <C.DescriptionContent>
            <C.Description numberOfLines={3}>{description}</C.Description>
          </C.DescriptionContent>
        </C.EpisodeContainer>
      ))}
    </C.Container>
  )
}

Episodes.defaultProps = {}

Episodes.propTypes = {}
