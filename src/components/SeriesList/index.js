import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { navigate } from '../../utils/navigation'
import actions, { SeriesRedux } from '../../redux/actions'
import SeriesListItem from '../SeriesListItem'
import * as C from './styles'
import PropTypes from 'prop-types'

export default function SeriesList({ list: { list_title, list_type, items } }) {
  const dispatch = useDispatch()

  function setSeriesAndNavigate(currentSeries) {
    dispatch(SeriesRedux.setSeries(currentSeries))
    navigate('SeriesDetails')
  }

  return (
    <C.Container>
      {list_type != 'special' && <C.Title>{list_title}</C.Title>}
      <C.List
        data={items}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <C.Item onPress={() => setSeriesAndNavigate(item)}>
            <SeriesListItem
              item={item}
              specialType={list_type == 'special'}
              lastItem={items.length - 1 == index}
            />
          </C.Item>
        )}
        keyExtractor={(item, index) => String(index)}
      />
    </C.Container>
  )
}

SeriesList.defaultProps = {}

SeriesList.propTypes = {}
