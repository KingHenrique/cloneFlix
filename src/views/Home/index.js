import React, { useState, useEffect } from 'react'
import { actions } from '../../redux/actions'
import { Spotlight, Series } from '../../components'
import { useSelector, useDispatch } from 'react-redux'
import { Animated } from 'react-native'
import * as C from './styles'
import PropTypes from 'prop-types'

export default function Home() {
  const translateY = new Animated.Value(0)
  const animatedEvent = new Animated.event([
    {
      nativeEvent: {
        contentOffset: {
          y: translateY
        }
      }
    }
  ])

  return (
    <C.Container>
      <C.Content
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={animatedEvent}>
        <Spotlight translateY={translateY} />
        <Series />
      </C.Content>
    </C.Container>
  )
}

Home.navigationOptions = {
  header: null
}

Home.defaultProps = {}

Home.propTypes = {}
