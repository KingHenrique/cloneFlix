import React, { useState, useEffect } from 'react'
import { goBack } from '../../utils/navigation'
import * as C from './styles'
import PropTypes from 'prop-types'

export default function CloseButton() {
  return (
    <C.Container onPress={() => goBack()}>
      <C.Icon />
    </C.Container>
  )
}

CloseButton.defaultProps = {}

CloseButton.propTypes = {}
