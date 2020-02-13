import React, { useState, useEffect } from 'react'
import SeriesList from '../SeriesList'
import * as C from './styles'
import PropTypes from 'prop-types'
import series from './list.json'

export default function Series() {
  return (
    <C.Container>
      {series.map((list, index) => (
        <SeriesList key={index} list={list} />
      ))}
    </C.Container>
  )
}

Series.defaultProps = {}

Series.propTypes = {}
