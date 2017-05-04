import {render} from 'react-dom'
import Index from './Components/Index'
import React from 'react'

function mount (index) {
  render(
    React.createElement(index),
    document.getElementById('app')
  )
}

function hotReload () {
  // Hot reload components.
  const NextIndex = require('./Components/Index').default

  mount(NextIndex)
}

mount(Index)

if (module.hot) {
  module.hot.accept('./Components/Index', hotReload)
}
