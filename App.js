import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { setNavigator } from './src/utils/navigation'
import { StatusBar } from 'react-native'
import Routes from './src/routes/Routes'
import store from './src/redux/store'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <StatusBar backgroundColor="black" barStyle="light-content" />
        <Routes ref={setNavigator} />
      </Provider>
    )
  }
}
