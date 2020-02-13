import React, { useState, useEffect } from 'react'
import * as C from './styles'
import PropTypes from 'prop-types'

export default function SeriesListItem({
  lastItem,
  specialType,
  item: { cover }
}) {
  function renderComumItem() {
    return (
      <C.Container lastItem={lastItem}>
        <C.Image source={{ uri: cover }} />
      </C.Container>
    )
  }

  function renderSpecialItem() {
    return (
      <C.SpecialContainer lastItem={lastItem}>
        <C.SpecialImage source={{ uri: cover }} />
      </C.SpecialContainer>
    )
  }

  return specialType ? renderSpecialItem() : renderComumItem()
}

SeriesListItem.defaultProps = {}

SeriesListItem.propTypes = {}
