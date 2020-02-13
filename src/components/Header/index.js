import React, { useState, useEffect } from 'react'
import * as C from './styles'
import PropTypes from 'prop-types'

export default function Header() {
  const menu = ['Séries', 'Filmes', 'Minha Lista']
  return (
    <C.Container>
      <C.Content>
        <C.LogoContent>
          <C.Logo />
        </C.LogoContent>
        <C.MenuContent>
          {menu.map((item, index) => (
            <C.MenuItem key={index}>
              <C.Text>{item}</C.Text>
            </C.MenuItem>
          ))}
        </C.MenuContent>
      </C.Content>
    </C.Container>
  )
}

Header.defaultProps = {}

Header.propTypes = {}
